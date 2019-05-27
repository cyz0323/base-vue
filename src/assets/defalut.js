/**
 * 系统底层公共方法自定义入口
 * yangzeng 20150523*/
const defaultParam = {};

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
defaultParam.setUserData = function(url){
    let access_token = localStorage.getItem("user_token");
    if(!!access_token){
        let path = url+"?access_token="+access_token;
        this.$axios.post(path).then(res=>{
          console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }else{
        this.logout();
    }
};
defaultParam.logout = function(){
    localStorage.clear();
    this.$router.push("/login");
};
export default defaultParam;