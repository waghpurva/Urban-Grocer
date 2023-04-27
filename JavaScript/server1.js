const express = require("Express");
const app = express();

app.get("/", (req,res) => {
	res.send("<h1>Welcome to IET</h1>"+
					"<hr/>"+
					"<ol>"+
					"<li> PGDAC </li>"+
					"<li> PGDBA </li>");
});
app.get("/about", (req, res) => {
	 res.send("<h1>Urban Grocer</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact Number:9881735801</p>"
            +"<p>Email:ravi.tambade</p>" );
});

app.get("/flowers",(req, res)=>{
    var products=[
    {"id":12,"title":"Gerbera","description":"Wedding flower","unitprice":5,"quantity":6000},
    {"id":13,"title":"Rose","description":"Valntine flower","unitprice":15,"quantity":4000},
    {"id":14,"title":"Lotus","description":"Worship flower","unitprice":25,"quantity":16000},
    {"id":15,"title":"Jasmine","description":"Smelling  flower","unitprice":2,"quantity":6650},
 
    ];
    res.send(products);

})
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});