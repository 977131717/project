let express = require('express')
let router = express.Router();
let mgdb = require('../../utils/mgdb')
let jwt = require('../../utils/jwt.js')

router.get('/', (req, res, next) => {
	jwt.verify(req.query.token).then((result)=>{
		res.send({result,err:0})
	}).catch(err=>res.send({err:1,msg:'校验失败'}))
})

module.exports = router;