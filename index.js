var express = require('express');
 var app = express();

 app.get('/', (req, res) => {
     res.send("Hello from Docker!");
 });

 app.listen(80, () => {
     console.log("Listening on port 80!");
 });
