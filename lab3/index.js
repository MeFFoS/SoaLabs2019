var express = require("express");
const Decimal = require('decimal.js');

const app = express();

const jsonParser = express.json();

var result;
var SumResult = new Decimal(0);
var MulResult = new Decimal(1);
var SortedInputs = [];

app.get("/Ping", function(req, res){
	
	res.sendStatus(200);

});

app.get("/GetAnswer", function(req, res){
	res.send(result);
});

app.post("/PostInputData", jsonParser, function(req, res){
	let Input = req.body.Input;
	
	for(let elem of Input.Sums){
		SumResult = SumResult.plus(elem);
		SortedInputs.push(elem);
	}
	SumResult = SumResult.times(Input.K);

	for(let elem of Input.Muls){
		MulResult = MulResult.times(elem);
		SortedInputs.push(elem);
	}
	SortedInputs.sort((a, b) => a - b );
	
	let obj = 
	{ 
		'Output': {
			'SumResult' : SumResult,
			'MulResult' : MulResult,
			'SortedInputs' : SortedInputs
		}
	};
	
	result = JSON.stringify(obj);
	
	res.sendStatus(200);

});

app.get("/Stop", function(req, res){
	
	SumResult = new Decimal(0);
	MulResult = new Decimal(1);
	SortedInputs = [];
	res.sendStatus(200);
	//process.exit();
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Сервер ожидает подключения...");
});

module.exports.app = app;