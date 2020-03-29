let mongodb = require("mongodb")
let mongodbCt=mongodb.MongoClient
mongodbCt.connect(url="mongodb://127.0.0.1:27017",{useUnifiedTopology:true},(err,client)=>{
	let db=client.db('demo')
	let collection = db.collection('user')
	collection.find().toArray((err,res)=>{
		console.log(res);
		client.close()
	})
})
