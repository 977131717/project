let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb.js')

// //请求列表
router.get('/',(req,res,next)=>{
	// let collectionName = req.params.goodsname;//要操作的集合
	let { _page, _limit, _sort, q } = req.query;//获取默认参数或手动传递的参数
	console.log(_page, _limit, _sort, q);
	var p=mgdb.findList({
		dbName:'newapp',
		collectionName:'list',
		_page,
		_limit,
		q
	})
	p.then(({err,data})=>{
		res.send(data)
		})
	p.catch(
    err => res.send(err)
  )
})
module.exports = router;

