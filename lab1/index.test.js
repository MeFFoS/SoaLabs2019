var index = require("./index");
var assert = require("assert");
it("test 1", function(){
     
    var expectedResult = JSON.stringify({SumResult:30.3,MulResult:4,SortedInputs:[1.0,1.01,2.02,4]});
    var result = JSON.stringify(index.calculate({K:10,Sums:[1.01,2.02],Muls:[1,4]}));
	assert.equal(result, expectedResult);
});

it("test 2", function(){
     
    var expectedResult = JSON.stringify({SumResult:168.81,MulResult:14,SortedInputs:[1.72,2,3.21,5,7]});
    var result = JSON.stringify(index.calculate({K:17,Sums:[3.21,1.72,5.0],Muls:[2,7]}));
	assert.equal(result, expectedResult);
});

it("test 3", function(){
     
    var expectedResult = JSON.stringify({SumResult:48.12,MulResult:42,SortedInputs:[1.72,2,2.1,3,3.21,5,7]});
    var result = JSON.stringify(index.calculate({K:4,Sums:[3.21,1.72,5.0,2.1],Muls:[2,7,3]}));
	assert.equal(result, expectedResult);
});