const express = require("express");
var path=require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });