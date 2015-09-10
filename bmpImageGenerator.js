	/**
			 * Different content for the ShapeClip to display.
			 */
			var weather = {
				"ClearSky" : {
					"colourFiles" : ["images/ClearSky_colour.bmp"],
					"heightFiles" : ["images/ClearSky_height.bmp"],
					"animationSpeed" : -1, // -1 disables animation.
				},
				"FewClouds" : {
					"colourFiles" : ["images/FewClouds_colour.bmp"],
					"heightFiles" : ["images/FewClouds_height.bmp"],
					"animationSpeed" : -1,
				},
				"ManyClouds"  : { 
					"colourFiles" : ["images/ManyClouds_colour.bmp"],
					"heightFiles" : ["images/ManyClouds_height.bmp"],
					"animationSpeed" : -1,
				},
				"Rain" : {
					"colourFiles" : ["images/Rain_colour.bmp"],
					"heightFiles" : ["images/Rain_height.bmp"],		
					"animationSpeed" : -1,					
				},
				"Wind_North" : {
					"colourFiles" : ["wind_anim/Wind_anim_01.bmp"],
					"heightFiles" : ["wind_anim/Wind_anim_01.bmp", 
									 "wind_anim/Wind_anim_02.bmp", 
									 "wind_anim/Wind_anim_03.bmp", 
									 "wind_anim/Wind_anim_04.bmp", 
									 "wind_anim/Wind_anim_05.bmp", 
									 "wind_anim/Wind_anim_06.bmp", 
									 "wind_anim/Wind_anim_07.bmp", 
									 "wind_anim/Wind_anim_08.bmp", 
									 "wind_anim/Wind_anim_09.bmp", 
									 "wind_anim/Wind_anim_10.bmp", 
									 "wind_anim/Wind_anim_11.bmp", 
									 "wind_anim/Wind_anim_12.bmp", 
									 "wind_anim/Wind_anim_13.bmp",
									 "wind_anim/Wind_anim_14.bmp", 
									 "wind_anim/Wind_anim_15.bmp", 
									 "wind_anim/Wind_anim_16.bmp", 
									 "wind_anim/Wind_anim_17.bmp", 
								 	 "wind_anim/Wind_anim_18.bmp", 
									 "wind_anim/Wind_anim_19.bmp",
									 "wind_anim/Wind_anim_20.bmp", 
									 "wind_anim/Wind_anim_21.bmp", 
									 "wind_anim/Wind_anim_22.bmp", 
									 "wind_anim/Wind_anim_23.bmp", 
									 "wind_anim/Wind_anim_24.bmp", 
									 "wind_anim/Wind_anim_25.bmp"],
					"animationSpeed" : 500,	// 500ms per frame.
				},
				"Wind_East" : {
					"colourFiles" : ["wind_anim_east/Wind_anim_01.bmp"],
					"heightFiles" : ["wind_anim_east/Wind_anim_01.bmp", 
									 "wind_anim_east/Wind_anim_02.bmp", 
									 "wind_anim_east/Wind_anim_03.bmp", 
									 "wind_anim_east/Wind_anim_04.bmp", 
									 "wind_anim_east/Wind_anim_05.bmp", 
									 "wind_anim_east/Wind_anim_06.bmp", 
								 	 "wind_anim_east/Wind_anim_07.bmp", 
									 "wind_anim_east/Wind_anim_08.bmp", 
									 "wind_anim_east/Wind_anim_09.bmp", 
									 "wind_anim_east/Wind_anim_10.bmp", 
									 "wind_anim_east/Wind_anim_11.bmp", 
									 "wind_anim_east/Wind_anim_12.bmp", 
									 "wind_anim_east/Wind_anim_13.bmp",
									 "wind_anim_east/Wind_anim_14.bmp", 
									 "wind_anim_east/Wind_anim_15.bmp", 
									 "wind_anim_east/Wind_anim_16.bmp", 
									 "wind_anim_east/Wind_anim_17.bmp", 
									 "wind_anim_east/Wind_anim_18.bmp", 
									 "wind_anim_east/Wind_anim_19.bmp",
								 	 "wind_anim_east/Wind_anim_20.bmp", 
									 "wind_anim_east/Wind_anim_21.bmp", 
									 "wind_anim_east/Wind_anim_22.bmp", 
									 "wind_anim_east/Wind_anim_23.bmp", 
									 "wind_anim_east/Wind_anim_24.bmp", 
									 "wind_anim_east/Wind_anim_25.bmp"],
					"animationSpeed" : 500,	// 500ms per frame.
				},
				"Wind_South" : {
					"colourFiles" : ["wind_anim_south/Wind_anim_01.bmp"],
					"heightFiles" : ["wind_anim_south/Wind_anim_01.bmp", 
									 "wind_anim_south/Wind_anim_02.bmp", 
									 "wind_anim_south/Wind_anim_03.bmp", 
									 "wind_anim_south/Wind_anim_04.bmp", 
									 "wind_anim_south/Wind_anim_05.bmp", 
									 "wind_anim_south/Wind_anim_06.bmp", 
								 	 "wind_anim_south/Wind_anim_07.bmp", 
									 "wind_anim_south/Wind_anim_08.bmp", 
									 "wind_anim_south/Wind_anim_09.bmp", 
									 "wind_anim_south/Wind_anim_10.bmp", 
									 "wind_anim_south/Wind_anim_11.bmp", 
									 "wind_anim_south/Wind_anim_12.bmp", 
									 "wind_anim_south/Wind_anim_13.bmp",
									 "wind_anim_south/Wind_anim_14.bmp", 
									 "wind_anim_south/Wind_anim_15.bmp", 
									 "wind_anim_south/Wind_anim_16.bmp", 
									 "wind_anim_south/Wind_anim_17.bmp", 
									 "wind_anim_south/Wind_anim_18.bmp", 
									 "wind_anim_south/Wind_anim_19.bmp",
								 	 "wind_anim_south/Wind_anim_20.bmp", 
									 "wind_anim_south/Wind_anim_21.bmp", 
									 "wind_anim_south/Wind_anim_22.bmp", 
									 "wind_anim_south/Wind_anim_23.bmp", 
									 "wind_anim_south/Wind_anim_24.bmp", 
									 "wind_anim_south/Wind_anim_25.bmp"],
					"animationSpeed" : 500,	// 500ms per frame.
				},
				"Wind_West" : {
					"colourFiles" : ["wind_anim_west/Wind_anim_01.bmp"],
					"heightFiles" : ["wind_anim_west/Wind_anim_01.bmp", 
									 "wind_anim_west/Wind_anim_02.bmp", 
									 "wind_anim_west/Wind_anim_03.bmp", 
									 "wind_anim_west/Wind_anim_04.bmp", 
									 "wind_anim_west/Wind_anim_05.bmp", 
									 "wind_anim_west/Wind_anim_06.bmp", 
								 	 "wind_anim_west/Wind_anim_07.bmp", 
									 "wind_anim_west/Wind_anim_08.bmp", 
									 "wind_anim_west/Wind_anim_09.bmp", 
									 "wind_anim_west/Wind_anim_10.bmp", 
									 "wind_anim_west/Wind_anim_11.bmp", 
									 "wind_anim_west/Wind_anim_12.bmp", 
									 "wind_anim_west/Wind_anim_13.bmp",
									 "wind_anim_west/Wind_anim_14.bmp", 
									 "wind_anim_west/Wind_anim_15.bmp", 
									 "wind_anim_west/Wind_anim_16.bmp", 
									 "wind_anim_west/Wind_anim_17.bmp", 
									 "wind_anim_west/Wind_anim_18.bmp", 
									 "wind_anim_west/Wind_anim_19.bmp",
								 	 "wind_anim_west/Wind_anim_20.bmp", 
									 "wind_anim_west/Wind_anim_21.bmp", 
									 "wind_anim_west/Wind_anim_22.bmp", 
									 "wind_anim_west/Wind_anim_23.bmp", 
									 "wind_anim_west/Wind_anim_24.bmp", 
									 "wind_anim_west/Wind_anim_25.bmp"],
					"animationSpeed" : 500,	// 500ms per frame.
				}, 
				"Rain_Animation" : {
					"colourFiles" : ["rain_anim/Rain_anim_colour.bmp"],
					"heightFiles" : ["rain_anim/Rain_anim_01.bmp",
									 "rain_anim/Rain_anim_02.bmp",
									 "rain_anim/Rain_anim_03.bmp",
									 "rain_anim/Rain_anim_04.bmp",
									 "rain_anim/Rain_anim_05.bmp",
									 "rain_anim/Rain_anim_06.bmp",
									 "rain_anim/Rain_anim_07.bmp",
									 "rain_anim/Rain_anim_08.bmp",
									 "rain_anim/Rain_anim_09.bmp",
									 "rain_anim/Rain_anim_10.bmp",
									 "rain_anim/Rain_anim_11.bmp",
									 "rain_anim/Rain_anim_12.bmp",
									 "rain_anim/Rain_anim_13.bmp"],
					"animationSpeed" : 500, // 500ms per frame.
				},
				"Colour_01" : {
					"colourFiles" : ["interaction_images/Colour_01.bmp"],
					"heightFiles" : ["interaction_images/Hight_01.bmp"],
				},
				/*"Black_Config" : {
					"colourFiles" : ["config_img/black_mode.bmp"],
					"heightFiles" : ["config_img/black_mode.bmp"],
				},
				"White_Config" : {
					"colourFiles" : ["config_img/white_mode.bmp"],
					"heightFiles" : ["config_img/white_mode.bmp"],
				},*/
			}
			
			// A 2D array of shape clip pads. Col, Row.
			var pads = [];
			
			var animationFrame = 0;			// The current animation index (set through startAnimation and stopAnimation).
			var animationEnabled = false;	// Is animation enabled (set through startAnimation and stopAnimation).
			var animationTimer = null;		// The animation timer so that it can be stopped.
			
			/**
			 * Run when the page loads.
			 */
			function start() {
				
				// Create the pads.
				setupPads();
				
				// For each weather, load colour and height files into canvases.
				for (var key in weather) {
					weather[key]["colour"] = preloadImageList(weather[key]["colourFiles"]);
					weather[key]["height"] = preloadImageList(weather[key]["heightFiles"]);
				}
			}
			
			/**
			 * Convert RGB colour to Grayscale 0-255
			 */
			function toGrayscale(r, g, b) {
				// TODO: Improve this.. there is a better way to convert that gives better grays
				return (r + g + b) / 3; 
			}	
		
			/**
			 * Convert RGB colour to HSL.
			 * Taken from: http://stackoverflow.com/questions/3732046/how-do-you-get-the-hue-of-a-xxxxxx-colour
			 */
			function toHSL(r, g, b){
				var max = Math.max(r, g, b), min = Math.min(r, g, b);
				var h, s, l = (max + min) / 2;
				if(max == min){
					h = s = 0; // achromatic
				}
				else {
					var d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					switch(max){
						case r: h = (g - b) / d + (g < b ? 6 : 0); break;
						case g: h = (b - r) / d + 2; break;
						case b: h = (r - g) / d + 4; break;
					}
					h /= 6;
				}
				return [h, s, l];
			}
			
			/**
			 * Load a list of image files and convert them into a list of canvases.
			 * @param imageList A list of image files. For example: ["1.bmp", "2.bmp"]
			 */
			function preloadImageList(imageList) {
			
				var canvasList = [];
				for (var i = 0; i < imageList.length; ++i) {
					var canvas = preloadImage(imageList[i]);
					canvasList.push(canvas);
				}
				return canvasList;
				console.log(canvasList);
			}
			
			/**
			 * Load a single image file and convert it into a canvas.
			 * @param imageFile The path to an image file. For example: "image.bmp"
			 */
			
			function preloadImage(imageFile) {
				
				var img = new Image();
				var canvas = document.createElement("canvas");
				
				img.onload = function() {
					
					canvas.width  = img.width;
					canvas.height = img.height;
					var ctx = canvas.getContext('2d');
					ctx.drawImage(img, 0, 0, img.width, img.height);
				}
				
				img.src = imageFile;
				return canvas;
			}			
			
			/**
			 * Animate the weather of a particular type.
			 * @param weatherType The type of weather.
			 */
			function nextFrame(weatherType) {
				
				// Draw the next frame and advance the counter.
				drawWeather(weatherType, animationFrame);
				animationFrame++;
				
				// If we should stop animating, return now.
				if (!animationEnabled)
					return;
				
				// Get how long the animation frame should last. Default = 1000ms.
				var delay = weather[weatherType].animationSpeed || 1000;
				if (delay <= 0)
					return;
				
				// Call a function after 'delay' seconds to advance the frame.
				animationTimer = setTimeout(function(){
					nextFrame(weatherType);
				}, delay);
			}
			
			/**
			 * Start the weather of a particular type animating.
			 * @param weatherType The type of weather.
			 */
			function startAnimation(weatherType) {
				
				// Stop the previous one.
				stopAnimation();
				
				// Enable animations.
				animationEnabled = true;
				animationFrame = 0;
				
				// Start it off.
				nextFrame(weatherType);
			}
			
			/**
			 * Stop the weather animating.
			 */
			function stopAnimation(){
				
				// Stop animations and reset counter.
				animationEnabled = false;
				animationFrame = 0;
				
				// Stop the timer.
				if (animationTimer !== undefined)
					clearTimeout(animationTimer);
				animationTimer = null;
			}
			
			
			/**
			 * Draw a type of weather. 
			 * @param weatherType The type of weather to draw.
			 * @param animationIndex The index into the animation array. For the first one, use 0.
			 */
			function drawWeather(weatherType, animationIndex) {
				
				// Get the canvas from the weather type for height and colour.
				//  This wraps around frames larger than the length.
				var colourFrames = weather[weatherType]["colour"];
				var heightFrames = weather[weatherType]["height"];
				var colourCanvas = colourFrames[animationIndex % colourFrames.length];
				var heightCanvas = heightFrames[animationIndex % heightFrames.length];
				
				// For each pixel in the colour canvas, set the corresponding shape clip.
				var ctx = colourCanvas.getContext('2d');
				for (var y = 0; y < pads.length; ++y) {
					for (var x = 0; x < pads[y].length; ++x) {
						var colourArray = ctx.getImageData(x, y, 1, 1).data;					
						var r = colourArray[0];
						var g = colourArray[1];
						var b = colourArray[2];
						pads[y][x].colour(r, g, b);
					}
				}
				
				// For each pixel in the height canvas, set the corresponding shape clip.
				var ctx = heightCanvas.getContext('2d');
				for (var y = 0; y < pads.length; ++y) {
					for (var x = 0; x < pads[y].length; ++x) {
						var colourArray = ctx.getImageData(x, y, 1, 1).data;
						var value = toGrayscale(colourArray[0], colourArray[1], colourArray[2])
						pads[y][x].height(value / 255.0);
					}
				}
			}
			
			
			/** 
			 * Create the ShapeClip pads in an N by M grid. 
			 */
			var pixel_id = 0; 
			function setupPads() {
			
				// Correct ppi value.
				var agent = navigator.userAgent.toLowerCase();
				if 		(agent.indexOf("windows") 	!= -1) 	{ }
				if 		(agent.indexOf("nexus 5") 	!= -1) 	{ __ppi(150); }
				else if (agent.indexOf("ipad") 		!= -1) 	{ __ppi(160); }
				console.log("User Agent: " + navigator.userAgent.toLowerCase());
				
				// The size of the ShapeClip pad in mm.
				var SC_SIZE = __px(settings.ClipSize);
				
				// Create a grid of ShapeClip pads.
				for (var row = 0; row < settings.NumClipsY; ++row) { 
					
					pads.push([]);
					
					for (var col = 0; col < settings.NumClipsX; ++col) {
						
						// Compute the next position.
						var pX = settings.OffsetX + (col * settings.SpacingX);
						var pY = settings.OffsetY + (row * settings.SpacingY);
						
						// Create the pad and store user data that describes its position.
						var pad = new ShapeClip({x: __px(pX), y: __px(pY), width: SC_SIZE, height: SC_SIZE});
						pad._id = "pad_" + col + "-" + row;
						pad.outline(true);
						pad.rotate(180);
						pad.mouseRotate(false);
						pad.userData = [col, row];
						
						// Add it to the list of pads.
						pads[row].push(pad);
						
						//pixel_id = pad._id;
						//console.log(pad.userData);
					}
				}
				
				// Start the pads all at once.
				/** UNCOMMENT FOR COLOUR*/
				for (var row=0; row<pads.length; ++row)
					for (var col=0; col<pads[row].length; ++col)
						pads[row][col].pulse();
					
			};