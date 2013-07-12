var express = require("express"),  
    fs = require("fs"),
    buffer = fs.readFileSync("index.html"),
    app = express.createServer(express.logger());

app.get("/", function(request, response) {
    response.send(buffer.toString()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
);
