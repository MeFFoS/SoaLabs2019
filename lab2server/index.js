var express = require("express");

const app = express();

const jsonParser = express.json();

app.get("/Ping", function(req, res){
	
	res.sendStatus(200);

});

app.get("/getInputData", function(req, res){
	res.send('{"K":10,"Sums":[1.01,2.02],"Muls":[1,4]}');
});

app.post("/WriteAnswer", jsonParser, function(req, res){
	let Output = req.body.Output;
	if(Output === '{"SumResult":"30.3","MulResult":"4","SortedInputs":[1,1.01,2.02,4]}')
		res.sendStatus(200);
	else res.sendStatus(400);

});

app.listen(process.env.PORT || 3030, function(){
    console.log("Сервер ожидает подключения...");
});