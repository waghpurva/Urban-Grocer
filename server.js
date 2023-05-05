const express = require("express");
const app = express();

//Requst processing

app.get("/", (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

app.get("/about", (req, res) => {
    res.send("<h1> IET krushi agro Pvt. ltd.</h1>");
});

app.get("/Information", (req, res) => {
    res.send("<p>Seasional Crops</p>"
            +"<p>Crop fertilizers and pestisisde use cases </p>" );
});

app.get("/crop_information",(req, res)=>{
    var products=[
    {"id":1,"title":"Wheat","description":"cycle crop","unitprice":500,"quantity":4000},
    {"id":2,"title":"Jwar","description":"Rabbi crop","unitprice":750,"quantity":5000},
    {"id":3,"title":"red gram","description":"pulses ","unitprice":800,"quantity":10000},
    {"id":4,"title":"Soyabean","description":"oil pulses","unitprice":900,"quantity":7400},
 
    ];
    res.send(products);

})
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});
