let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb')
router.get('/',(req,res,next)=>{
	mgdb.findDetail({
		dbName:'newapp',
		collectionName:'user',
		_id:req.query._id
	}).then(data=>{
		res.send(data)
	})
})


module.exports = router;