let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb.js')

// //请求详情
router.get('/',(req,res,next)=>{
	// let collectionName = req.params.goodsname;//要操作的集合
	var p=mgdb.findList({
		dbName:'newapp',
		collectionName:'follow',
		_page:1,
		_limit:10,
		q:req.query.username
	})
	p.then((result)=>{
		if(result.err===0){
			res.send(result)
		}else{
			res.send(result)
		}
	}) 
	p.catch(
    err => res.send(err)
  )
})
module.exports = router;