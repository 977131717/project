let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb.js')

// //请求轮播图
router.get('/',(req,res,next)=>{
	// let collectionName = req.params.goodsname;//要操作的集合
	var p=mgdb.findList({
		dbName:'newapp',
		collectionName:'list',
		_page:4,
		_limit:3,
	})
	p.then(({err,data})=>{
		res.send(data)
		})
	p.catch(
    err => res.send(err)
  )
})
module.exports = router;