let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb.js')

router.get('/:id',(req,res,next)=>{
	mgdb.findDetail({
		dbName:'newapp',
		collectionName:'list',
		_id:req.params.id
	}).then(({err,data})=>{
		res.send(data)
	})
})
module.exports = router;