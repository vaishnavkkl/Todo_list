const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items =["buy"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/", function(req, res){

	var today = new Date();
	
	var options = {
		weekday:'long', day:'numeric', month:'long'
	};

	var day = today.toLocaleDateString("en-US", options);

	res.render("list", {kindofDay: day, listItem: items});
	
});

app.post("/", function(req, res){

	 var item = req.body.item;
	 items.push(item);
	res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("server running");
});