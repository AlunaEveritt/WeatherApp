/*
* The node server handles client connections and message 
* broadcasting (i.e. pushing messages to connected clients)
*
* @author Faisal T.
*/

var port=3000;

var app = io = require('socket.io').listen(app);

//Listen on specified port
app.listen(port);

console.log("Woop, server has begun!");

/*
* On client connection, handle events
*/
io.sockets.on('connection', function (socket) {
	console.log("A client has been connected successfully");
    //Listen for messages from mobile graph clip controller (control panel)
    socket.on("HelloMessage", function (data) {
		console.log("Client has sent a message: " + data);
        //Send the data to the bar chart interface
        //socket.broadcast.emit("serverMsg", data);
    });
	socket.on("ARDUINO_SERIAL", function (data) {
        //Send the data to the bar chart interface
		console.log(data);
        socket.broadcast.emit("LDR_VALUES", data);
    });
});