/**
 * 系统底层公共方法自定义入口
 * yangzeng 20150523*/
const defaultParam = {
    path: "http://localhost:5000",
    path2: "http://localhost:8888",
    path3: "http://10.231.132.130:8082"
};

/*
 * 提供简单的元素查找功能，初步定义仅支持id、class、标签本身的检索 */
defaultParam.find = function(e){
    let _vf = e.substring(0,1);
    let _ele = e.substring(1,e.length);
    if(_vf == "#"){
        return document.getElementById(_ele);
    }else if(_vf === "."){
        return document.getElementsByClassName(_ele);
    }else{
        return document.getElementsByTagName(e);
    }
};
//针对用户是否登陆的判断
defaultParam.hasUser = function(){
    let token = localStorage.getItem("user_token");
    if(!!token) return true;
    else {
        this.logout();
    }
};

//对用户信息的存储根据用户的token获取当前用户的一本信息
defaultParam.setUserData = function(){
    let token = localStorage.getItem('user_token');
    //let path = this.path +"/user?access_token="+token;
    let path = this.path +"/user?access_token="+token;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST",path,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //xmlhttp.send("user="+token);
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            console.log(xmlhttp.responseText);
        }
    }
    /*this.$axios.post(path).then(res=>{
        localStorage.setItem("userinfo",JSON.stringify(res.data));
        this.$router.push("/");
    }).catch(err=>{
        console.log(err);
    })*/
};

//成功提示消息
defaultParam.success = function(e){
    this.$message("aaaa");
};
//退出登陆
defaultParam.logout = function(){
    localStorage.clear();
    this.$router.push("/login");
};
export default defaultParam;