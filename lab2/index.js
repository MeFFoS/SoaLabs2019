const express = require("express");

const axios = require('axios');
const app = express();

const jsonParser = express.json();

app.listen(3000, function(){
	console.log("Сервер ожидает подключения...");
});
 
app.use(express.static(__dirname + "/public"));


app.get("/ping", function(req, res){
	
        (async() => {
		  try {
			let server = req.query.server;
			const response = await axios.get(`http://${server}/Ping`);

			res.sendStatus(response.status);
		  } catch (error) {
			res.sendStatus(400);
		  }
		})();      
});

app.get("/getInputData", function(req, res){
	
        (async() => {
		  try {
			let server = req.query.server;
			const response = await axios.get(`http://${server}/getInputData`);

			res.send(response.data);
		  } catch (error) {
			res.send(error);
		  }
		})();      
});

app.post("/WriteAnswer", jsonParser, function(req, res){
	
        (async() => {
		  try {
			let server = req.query.server;
			let Output = req.body.Output;
			const response = await axios.post(`http://${server}/WriteAnswer`,{
				Output: Output
		    });
			res.sendStatus(response.status);
		  } catch (error) {
			res.send(error);
		  }
		})();      
});

process.on("SIGINT", () => {
    process.exit();
});