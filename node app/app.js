//引入依赖
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//创建服务器
var app = express();

// 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//中间件安装 日志
app.use(logger('dev'));
//中间件安装-设置body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//多资源托管
app.use(express.static(path.join(__dirname, 'public','template')));
app.use('/admin',express.static(path.join(__dirname, 'public','admin')));//admin 是别名，决定了访问时 3001/admin
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//根据接口名字 将图片分发到不同目录
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user') !== -1 || req.url.indexOf('reg') !== -1 ){
      cb(null, path.join(__dirname,'public','upload','user'))
    }else if(req.url.indexOf('banner') !== -1){
      cb(null, path.join(__dirname,'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname,'public','upload','product'))
    }
  }
})
let upload = multer({storage})
app.use(upload.any());//允许删除图片

app.all('/api/*',require('./routes/api/params'));//处理api下发的所有接口的公共参数
app.use('/api/list',require('./routes/api/list'))
app.use('/api/banner',require('./routes/api/banner'))
app.use('/api/detail',require('./routes/api/detail'))
app.use('/api/reg',require('./routes/api/reg'))
app.use('/api/login',require('./routes/api/login'))
app.use('/api/verifytooken',require('./routes/api/verifytooken'))
app.use('/api/user',require('./routes/api/user'))
app.use('/api/follow',require('./routes/api/follow'))
app.use('/api/setFollow',require('./routes/api/setFollow'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
