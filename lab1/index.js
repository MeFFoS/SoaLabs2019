const fs = require('fs');
const Decimal = require('decimal.js');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var builder = new xml2js.Builder();

let input = fs.readFileSync('input.txt', 'utf8');
input = input.split('\n');
let type = input[0].trim();
input.splice(0,1);
input = input.join('\n');

if (type === 'Xml')
{
	parseString(input, function (err, result) {
		
		let newInput = {
			Sums: result.Input.Sums[0].decimal,
			K: result.Input.K[0],
			Muls: result.Input.Muls[0].int
		};
		
		let obj = calculate(newInput);
	
		let newObj = 
		{ 
			'Output':
			{
				'SumResult' : obj.SumResult,
				'MulResult' : obj.MulResult,
				'SortedInputs' : 
				{
					'decimal' : obj.SortedInputs
				}
			}
		};
		var xml = builder.buildObject(newObj);
		fs.writeFileSync('output.txt', xml);
	});
	
}
else if (type === 'Json') 
{
	result = JSON.parse(input);
	let obj = calculate(result);
	result = JSON.stringify(obj);
	fs.writeFileSync('output.txt', 'Json\n' + result);
}

function calculate(input) {
	
	let SumResult = new Decimal(0);
	let MulResult = new Decimal(1);
	let SortedInputs = [];

	for(let elem of input.Sums){
		SumResult = SumResult.plus(elem);
		SortedInputs.push(elem);
	}
	SumResult = SumResult.times(input.K);

	for(let elem of input.Muls){
		MulResult = MulResult.times(elem);
		SortedInputs.push(elem);
	}
	SortedInputs.sort((a, b) => a - b );
	
	let obj = 
	{ 
		'SumResult' : SumResult.toNumber(),
		'MulResult' : MulResult.toNumber(),
		'SortedInputs' : SortedInputs
	};
	
	return obj;
}

module.exports.calculate = calculate;