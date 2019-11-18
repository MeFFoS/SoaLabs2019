const request = require("supertest");
 
var app = require("./index").app;
const assert = require("assert");
it("test /Ping", function(done){
     
    request(app)
        .get("/Ping")
        .expect(200)
        .end(done);
});

describe("Data test 1", function(){
	it("test /PostInputData", function(done){
		 
		request(app)
			.post('/PostInputData')
			.send({Input: {K:10,Sums:[1.01,2.02],Muls:[1,4]}})
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});

	it("test /GetAnswer", function(done){
		request(app)
			.get("/GetAnswer")
			.expect('{"Output":{"SumResult":"30.3","MulResult":"4","SortedInputs":[1,1.01,2.02,4]}}')
			.end(done);
	});
	
	it("test /Stop", function(done){
		request(app)
			.get("/Stop")
			.expect(200)
			.end(done);
	});
});


describe("Data test 2", function(){
	it("test /PostInputData", function(done){
		 
		request(app)
			.post('/PostInputData')
			.send({Input: {K:17,Sums:[3.21,1.72,5.0],Muls:[2,7]}})
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});

	it("test /GetAnswer", function(done){
		request(app)
			.get("/GetAnswer")
			.expect('{"Output":{"SumResult":"168.81","MulResult":"14","SortedInputs":[1.72,2,3.21,5,7]}}')
			.end(done);
	});
	
	it("test /Stop", function(done){
		request(app)
			.get("/Stop")
			.expect(200)
			.end(done);
	});
});

describe("Data test 3", function(){
	it("test /PostInputData", function(done){
		 
		request(app)
			.post('/PostInputData')
			.send({Input: {K:4,Sums:[3.21,1.72,5.0,2.1],Muls:[2,7,3]}})
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});

	it("test /GetAnswer", function(done){
		request(app)
			.get("/GetAnswer")
			.expect('{"Output":{"SumResult":"48.12","MulResult":"42","SortedInputs":[1.72,2,2.1,3,3.21,5,7]}}')
			.end(done);
	});
	
	it("test /Stop", function(done){
		request(app)
			.get("/Stop")
			.expect(200)
			.end(done);
	});
});