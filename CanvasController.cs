using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO.Ports;
using System.Threading;

namespace ShapeClipCanvas.Controllers
{
    /// <summary>
    /// A serial controller for an Arduino that drives a group of sliders.
    /// </summary>
    public class ShapeClipController : IController
    {
        #region Events
        /// <summary>
        /// Raised when a controller is sucessfully responding to commands.
        /// </summary>
        public event Action<IController> OnResponding;

        /// <summary>
        /// Raised when a controller is sucessfully configured.
        /// </summary>
        public event Action<IController> OnConfigured;

        /// <summary>
        /// Raised when an error is detected with the controller. Perhaps a serial timeout.
        /// </summary>
        public event Action<IController, Exception> OnError;
        #endregion

        #region Public Properties
        /// <summary>
        /// Get the number of frames that were processed in the last second by this controller.
        /// </summary>
        public double FPS { get { return _FPS.FPS; } }
        private FPSCounter _FPS = new FPSCounter();

        /// <summary>
        /// Get the unique name that identifies this controller to the software.
        /// </summary>
        public string ID { get; private set;  }

        /// <summary>
        /// Is this controller responding to commands and ready to be configured.
        /// </summary>
        public bool Responding { get; private set; }

        /// <summary>
        /// Is this controller configured and ready to operate.
        /// </summary>
        public bool Configured { get; private set; }

        /// <summary>
        /// The time in ms that it took to push a frame to this shape-clip controller.
        /// </summary>
        public double TransferTime { get; private set; }

        /// <summary>
        /// Read the data from the actual frame buffer or write data to be pushed in the next frame.
        /// </summary>
        /// <param name="index">The index into the frame buffer.</param>
        /// <returns>The value at that index</returns>
        public byte this[int index]
        {
            get
            {
                if (index >= 0 && index < ActualFrameBuffer.Length)
                    return ActualFrameBuffer[index];
                throw new IndexOutOfRangeException();
            }
            set
            {
                if (index < 0 || index >= TargetFrameBuffer.Length)
                    throw new IndexOutOfRangeException();
                TargetFrameBuffer[index] = value;                
            }
        }

        /// <summary>
        /// Get the latest frame of data.
        /// </summary>
        public byte[] Frame
        {
            get
            {
                return ActualFrameBuffer.ToArray();
            }
            set
            {
                if (value.Length != TargetFrameBuffer.Length)
                    throw new ArgumentException("Mismatch between source frame length and framebuffer size.");
                Array.Copy(value, TargetFrameBuffer, TargetFrameBuffer.Length);
            }
        }

        /// <summary>
        /// Get (a copy of) or set the pin config used in this shape-clip controller.
        /// </summary>
        public byte[] PinConfig
        {
            get
            {
                // Return a copy of the last known pin config.
                return _PinConfig.ToArray();
            }
            set
            {
                // Error if not responding.
                if (!Responding)
                    throw new InvalidOperationException("Cannot set pin config without connected serial device");

                // Sanitise values.
                if (_PinConfig.Length > byte.MaxValue)
                    throw new ArgumentException("Cannot set more than 255 pins per device.");

                // Internal store.
                _PinConfig = value.ToArray();

                // Redefine the frame buffer.
                TargetFrameBuffer = new byte[_PinConfig.Length * 2];
                ActualFrameBuffer = new byte[_PinConfig.Length * 2];

                // Push to the chip in the correct format.
                Serial.Write(new char[] { 'p' }, 0, 1);
                Serial.Write(new byte[] { (byte)_PinConfig.Length }, 0, 1);
                Serial.Write(_PinConfig, 0, _PinConfig.Length);

                // Say that this controller is configured.
                Configured = true;
                if (OnConfigured != null)
                    OnConfigured(this);

            }
        }
        private byte[] _PinConfig = new byte[0];

        /// <summary>
        /// Return the number of shape-clip controlled by this device.
        /// </summary>
        /// <remarks>This may have one extra phantom slider due to the hardware architecture. This value is a function of the number of configured pins (PinCount * 2).</remarks>
        public int ShapeClipCount
        {
            get
            {
                if (ActualFrameBuffer == null)
                    throw new InvalidOperationException("The slider count can only be read once the device is configured.");
                return ActualFrameBuffer.Length;
            }
        }
        #endregion

        #region Private Properties
        /// <summary>
        /// The target frame buffer that will be pushed to the device.
        /// </summary>
        private byte[] TargetFrameBuffer { get; set; }

        /// <summary>
        /// The actual ACD data that has been pushed from the device.
        /// </summary>
        private byte[] ActualFrameBuffer { get; set; }

        /// <summary>
        /// Serial port reference.
        /// </summary>
        private SerialPort Serial { get; set; }
        #endregion

        /// <summary>
        /// Create a new shape-clip controller with a given port (i.e. COM3).
        /// </summary>
        /// <param name="port">The COM address of the controller (i.e. COM5)</param>
        /// <param name="baudRate">The baud rate for this controller. Typically 115200.</param>
        public ShapeClipController(String port, int baudRate = 9600)
        {
            // Init and load settings.
            Responding = false;
            Configured = false;

            // Create a new serial port.
            Serial = new SerialPort(port, baudRate);
            Serial.ReadTimeout  = 500;
            Serial.WriteTimeout = 500;
            Serial.Open();

            // Try and get this to identify.
            ProcessAnnounce();
        }

        /// <summary>
        /// Send the announce byte and flag us as configured if we recieve a valid ID.
        /// </summary>
        private void ProcessAnnounce()
        {
            // Reset vars.
            Responding = false;
            Configured = false;
            _FPS.Reset();
            TransferTime = 0;

            // Write the announce packet.
            Serial.Write(new char[] { 'a' }, 0, 1);

            // Read the ID.
            var id = Serial.ReadLine();
            if (!id.StartsWith("SHAPECLIPCONTROL"))
            {
                this.Dispose();
                throw new ArgumentException("The specified serial port does not contain a SHAPECLIPCONTROLLER");
            }
            
            // Write ID and configured flag.
            ID = id.TrimEnd('\r', '\n');
            Responding = true;
            
            // Raise event.
            if (OnResponding != null)
                OnResponding.Invoke(this);
        }

        /// <summary>
        /// Send a frame of data to the serial device and read the data back.
        /// </summary>
        private void ProcessNextFrame()
        {
            try
            {
                // Start timing.
                var tStart = DateTime.Now;

                // Start with an 'f' for new frame.
                Serial.Write(new char[] { 'f' }, 0, 1);

                // Write the frame buffer targets.
                Serial.Write(TargetFrameBuffer, 0, TargetFrameBuffer.Length);

                //  Read the frame buffer response.
                //  Note: we can't just use a Serial.Read here because it won't wait
                //  for all the bytes to be returned.
                ReadByteArray(ActualFrameBuffer, ActualFrameBuffer.Length);

                // Stop timing.
                var tEnd = DateTime.Now;
                TransferTime = (tEnd - tStart).TotalMilliseconds;

                // Update the FPS counter.
                _FPS.NewFrame();
            }
            catch (Exception e)
            {
                // Raise error.
                if (OnError != null)
                    OnError(this, e);

                // Try to recover.
                //Serial.Close();
                //Serial.Dispose();
                //Serial = new SerialPort(Serial.PortName, Serial.BaudRate);

                // Announce it.
                //ProcessAnnounce();
                //PinConfig = this.PinConfig;
            }
        }


        /// <summary>
        /// Send a new frame and recieve data back.
        /// </summary>
        public void Poll()
        {
            // Don't process if not configured.
            if (!Configured)
                throw new InvalidOperationException("Cannot transmit / recieve data frames before controller is configured.");
            
            // Process the frame.
            ProcessNextFrame();
        }

        /// <summary>
        /// Remove any resources used by this controller.
        /// </summary>
        public void Dispose()
        {
            try
            {
                if (Serial != null)
                {
                    Serial.Close();
                    Serial.Dispose();
                }
                Serial = null;
            }
            catch (Exception e)
            {
            }
        }

        /// <summary>
        /// Helper to read an entire byte array from the serial port.
        /// </summary>
        /// <remarks>Keeps reading until all the bytes are read. Takes note of the offset.</remarks>
        /// <param name="response">The array to write into.</param>
        /// <param name="expectedBytes">The number of bytes to wait for.</param>
        /// <returns>True if read ok, false if not.</returns>
        private bool ReadByteArray(byte[] response, int expectedBytes)
        {
            int offset = 0, bytesRead;
            while (expectedBytes > 0 && (bytesRead = Serial.Read(response, offset, expectedBytes)) > 0)
            {
                offset += bytesRead;
                expectedBytes -= bytesRead;
            }
            return expectedBytes == 0;
        }

    }
}
