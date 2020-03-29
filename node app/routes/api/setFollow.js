let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb.js')

// //请求详情
router.post('/',(req,res,next)=>{
	let { username, follow_id, follow_name,follow_price } = req.body;
	mgdb.open({
		dbName:'newapp',
		collectionName:'follow',
	}).then(({collection,client})=>{
			collection.insertOne({
				username, follow_id, follow_name,follow_price
			},(err,result)=>{
				if(err===null){
					res.send(result.ops)
					collection.find({username}).toArray((err,result)=>{
						let l=result.length
						client.close()
						mgdb.open({
							dbName:'newapp',
							collectionName:'user',
						}).then(({collection,client})=>{
							collection.updateMany({username},{$set:{follow:l}},(err,res)=>{
								 client.close()
							})
						})
					})
				}else{
					res.send(err)
				}
			}) 
		}).catch(
    err => res.send(err)
  )
})
module.exports = router;