/*
* The node server handles client connections and message 
* broadcasting (i.e. pushing messages to connected clients)
*
*/


var port=3000;
var fs = require('fs'); // For writing to filesystems.
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
	
	socket.on("ACTION_LOG", function (data) {
		console.log("logging data");
		var parsed = JSON.parse(data);
		logData(","+parsed.Timestamp+","+parsed.Participant+","+parsed.Action_Name+","+parsed.Action_Type);
    });
});


/** Function to append log data to file. */
function logData(data) {
	data = data+"\r\n";
	fs.appendFile('logs/study_log.txt', data, function (err) {
		if(err) { return console.log("Could not write to file \r\n" + err); }
		else { }
	});
}
