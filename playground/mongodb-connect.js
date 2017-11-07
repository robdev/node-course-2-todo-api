//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB Server");
	}
	console.log("Connected to MongoDB Server");
	
//	db.collection('Todos').insertOne({
//		text: "Something to do",
//		completed: "false"
//	}, (err, result) => {
//		if (err) {
//			return console.log("Unable to insert Todo", err);
//		}
//		console.log(JSON.stringify(result.ops, undefined, 2))
//	});
	
	//insert new doc into users colection (name, age, location)
	
//	db.collection('Users').insertOne({
//		name: "Rob",
//		age: "24",
//		location: "PA"
//	}, (err, result) => {
//		if(err) {
//			return console.log("Unable to insert User", err);
//		}
//		console.log(result.ops[0]._id.getTimestamp());
//	});
	
	db.close();

});