var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var io = require('socket.io').listen(server);
var con = mysql.createConnection({
    host: "localhost",
    user: "bakboukg",
    password: "S215535",
    database: "WinterSanctuary"
});
con.connect(function(err) {
	console.log ("SQL Connect Attempt");
    if (err) {
	throw err;
    } else {
	console.log("Sql Connect success!");
    }
});

// Set up the Web server
var server = http.createServer(function(req, res) {
  var url = req.url;
  // If no path, get the index.html
  if (url == "/") 
  { 
	console.log ("no url");
	url = "/phoneApp.html";
  }
  // get the file extension (needed for Content-Type)
  var ext = url.split('.').pop();
  // console.log(url + "  :  " + ext);
  // convert file type to correct Content-Type
  var memeType = 'text/html'; // default
  switch (ext) {
    case 'css':
      memeType = 'text/css';
      break;
    case 'png':
      memeType = 'text/png';
      break;
    case 'jpg':
      memeType = 'text/jpeg';
      break;
    case 'js':
      memeType = 'application/javascript';
      break;
  }
  // Send the requested file
  fs.readFile('.' + url, 'utf-8', function(error, content) {
      res.setHeader("Content-Type", memeType);
      res.end(content);
  });
	//console.log(url);
});

// Set up socket.io communication


// When a client connects, we note it in the console
io.sockets.on('connection', function(socket) {
    socket.on('letter', function (letter){
	console.log(letter);
	    if (letter=="/")
	    {
		    console.log("not getting it");
	    }
    });
	     
	      
  // watch for message from client (JSON)
  socket.on('message', function(message) {
    console.log('Client Command:'+message.operation);
    if (message.operation == 'NameSearch') {
      query = "SELECT * FROM Volunteers WHERE Last_Name like '%"+message.searchText+"%'" + "SELECT * FROM Volunteers WHERE First_Name like '%"+message.searchText+"%'";
      sendQueryResults(query, socket);
    } else if (message.operation == 'Search') {
      query = "SELECT * FROM Volunteers WHERE First like '%"+message.searchText+"%'";
      sendQueryResults(query, socket);
    } else if (message.operation == 'Type') {
      query = "SELECT * FROM PhoneBook WHERE Type like '%"+message.searchText+"%'";
      sendQueryResults(query, socket);
    } else if (message.operation == 'New') {
      query = "INSERT INTO PhoneBook(First, Last, Phone, Type) VALUES ('"+message.First+"','"+message.Last+"','"+message.Phone+"','"+message.Type+"')";
      AddRow(query, socket);
    } else if (message.operation == 'Update') {
      query = "UPDATE PhoneBook SET First='"+message.First+"', Last='"+message.Last+"', Phone='"+message.Phone+"', Type='"+message.Type+"' WHERE RecNum='"+message.RecNum+"'";
      UpdateRow(query, socket);
    } else if (message.operation == 'Delete') {
      query = "DELETE FROM PhoneBook WHERE RecNum='"+message.RecNum+"'";
      DeleteRow(query, socket);
    } 
  });
});

// Perform search, send results to caller
function sendQueryResults(query,socket) {
    console.log(query);
    con.query(query, function (err, result, fields) {
		if (err) throw err;
		var results = [];
		Object.keys(result).forEach(function(key) {
			var row = result[key];
			results.push(row);
			//console.log(row.First+" "+row.Last+", Phone:"+row.Phone+"  ["+row.Type+"]");	    	
		});
		socket.emit('message', {
    		operation: 'rows',
    		rows: results
    	});
	});
}

// Add record
function AddRow(query,socket) {
	//console.log(query);
    con.query(query, function (err, result, fields) {
		if (err) throw err;
		socket.emit('message', {
    		operation: 'Add',
    		Status: "Row Added"
    	});
	});
}
// Delete record
function DeleteRow(query,socket) {
	//console.log(query);
    con.query(query, function (err, result, fields) {
		if (err) throw err;
		socket.emit('message', {
    		operation: 'delete',
    		Status: "Row Deleted"
    	});
	});
}

// update record
function UpdateRow(query,socket) {
	//console.log(query);
    con.query(query, function (err, result, fields) {
		if (err) throw err;
		socket.emit('message', {
    		operation: 'update',
    		Status: "Record Updated"
    	});
	});
}
//Everyone must use own port > 8000
console.log("Start server on 9007");
server.listen(9007);
