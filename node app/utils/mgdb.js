let mongodb = require("mongodb")
let ObjectId = mongodb.ObjectId//函数，把字符转换成ObjectId的对象型_id
let mongodbCt=mongodb.MongoClient
let open = ({dbName,collectionName,url="mongodb://127.0.0.1:27017"})=>{
    return new Promise((resolve,reject)=>{
       mongodbCt.connect(url,{useUnifiedTopology:true},(err,client)=>{
            /* client=连接成功的mongodb数据库信息 可视化界面相当于打开了那个软件连接了一个连接 */
           if(err){
               reject(err)
           }else{
               let db=client.db(dbName)//db 库信息
               let collection = db.collection(collectionName)//collection 集合信息
               resolve({collection,client})
               //成功返回集合信息 用于增删改查 返回数据库信息 用于关闭数据库
           }
       }) 
    })
}
/* open函数参数说明     url=协议://端口或地址   dbName=要连接的库  collectionName=要连接的集合 */
let findList=({
    dbName,collectionName,//库名 集合名
    _page, _limit, _sort, q//_page 页数  _limit 限定条数 _sort 排序规则 q 模糊查询
})=>{
    let rule=q?{ username: eval('/' + q + '/') }:{}//动态生成正则表达式
    return new Promise((resolve,reject)=>{
        open({dbName,collectionName}).then(({ collection, client }) => {//先调用open开库 并返回集合信息 用来操作
            //生成检索条件，给collectoin.find({条件},{配置}) 
            collection.find(
				rule,
				{
					skip:(_page-1)*_limit,
					limit:_limit,
					projection:{},//规则要显示的例
					sort: { [_sort]: 1 }//单key的排序 对象的键如果是变量就需要加中括号
				}
			).toArray((err,result)=>{
                    if (!err && result.length > 0) {//集合操作不失败，同时数据长度存在
                        resolve({ //调用外面的then,传数据出去
                            err:0,
                            data: result
                          })
                    }else{
                        resolve({
                            err:1,
                            msg:"差无数据"
                        })
                    }
                    client.close();//操作完毕 关库
                })
        }).catch(err=>{
            reject({
                err,
                msg:"数据库连接失败"
            })
            console.log("open的catch");
            client.close();
        })
    })
}
let findDetail=({
    collectionName,//集合名
    dbName,
    _id = null
})=>{
    return new Promise((resolve,reject)=>{
        open({dbName,collectionName}).then(({collection,client})=>{
            if(_id.length===24){//判断id 符不符合规则 mongodb 自动生成的id长度是24
                collection.find(
                    {
                        _id:ObjectId(_id)
                    },//查询条件是id

                    {
                        projection:{_id:0}//不显示id 因为用id查询的 所以id是已知值 返回id也没用
                        
                    }).toArray((err,result)=>{
                    if(!err && result.length>0){//没有错误 且查询的结果大于0则代表查询成功 返回数据
                        resolve({
                            err:0,
                            data:result[0]
                        })
                    }else{
                        resolve({
                            err:1,
                            meg:"查无数据"
                        })
                    }
                    client.close();
                })
            }
        }).catch(err=>{
            reject({
                err,
                msg:"数据库连接失败"
            })
            console.log("open的catch");
            client.close();
        })
    })
}
exports.open=open
exports.findList=findList
exports.findDetail=findDetail