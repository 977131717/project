//创建cookie
let setCookie=function(key,value,second=0){
    if(second==0){
        document.cookie=`${key}=${value};path=/`;
        //例：document.cookie="name=zhang;expires=date;path=/"只有一对双引号就够了;
    }else{
        var date=new Date();
        date.setTime(date.getTime()-8*3600*1000+second*1000);
        document.cookie=`${key}=${value};expires=${date};path=/`;
    }
}
//获取cookie的值
function getCookie(key){
    var cookies = document.cookie;
    var arr=cookies.split("; ");
    for(var i=0;i<arr.length;i++){
        var brr=arr[i].split("=");
        if(brr[0]==key){
            return brr[1];
        }
    }
}
//删除根目录cookie的值
function removeCookie(key){
    setCookie(key,"123",-5);
}
//删除当前目录的cookie值
let removeCookiephp=function(key){
    var date=new Date();
    date.setTime(date.getTime()-8*3600*1000+-60*1000);
    document.cookie=`${key}=${null};expires='${date}'`;
}
var cooke={
	setCookie,getCookie,removeCookie,removeCookiephp
}
export default cooke