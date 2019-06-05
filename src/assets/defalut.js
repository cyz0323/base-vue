/**
 * 系统底层公共方法自定义入口
 * yangzeng 20190523*/
const defaultParam = {
    /* 测试地址 */
    // path_login: "http://10.231.128.189:5000",
    // path_app: "http://10.231.128.189:8082",
    /* 测试地址二 */
    path_login: "http://10.231.132.130:5000",
    path_app: "http://10.231.132.130:8082",
    /*本地地址*/
    // path_login: "http://localhost:8888",
    // path_app: "http://localhost:8888",
    path2: "http://localhost:8888",



    //文件上传： http://10.231.128.189:1111/upload/test?access_token=30ff6ecf-437b-4b89-9b12-a1eeac2e2ba4
    //文件下载： http://10.231.128.189:1111/download/fileId      //fileId为当前资源的id
    //获取文件信息： http://10.231.128.189:1111/getFileInfo/fileId         //fileId为上传资源id

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

//对用户信息的存储根据用户的token获取当前用户的一本信息
defaultParam.setUserData = function(){

};

/**
 * 退出登陆
 * @param self  调用环境本身
 */
defaultParam.logout = function(self){
    window.localStorage.clear();
    self.$router.push("/login");
};

/**
 * 自定义get请求，包含对token的验证
 * @param self  当前请求发起的环境对象
 * @param url   请求发送的地址
 * @param successCallback   请求成功的回调方法
 * @param errorCallback 请求异常的回调方法
 * @Author yangzeng 20190604
 */
defaultParam.get = function(self,url,successCallback,errorCallback){
    let access_token = window.localStorage.getItem("user_token"),_this = this;
    //判断token是否存在若不存在则需要重新进行登陆操作
    if(!!access_token){     //登陆成功
        let opts = {
            method: "get",     //请求类型
            url: url+"&access_token="+access_token,     //请求地址处理
        };
        axios(opts).then(res=>{
            //返回参数结果判断
            if(this.isSuccess(res.status)){
                let _data= res.data;
                if(typeof _data != "object") return _this.errorMsg(self, "请返回正确格式的参数！");        //验证数据本身是否按照指定格式传递
                if(_data.status == 0)   successCallback(_data.message);     //对成功回调的调用
                else   _this.errorMsg(self, _data.message);
            }
        }).catch(err=>{
            if(err.request.status == 401) this.logout(self);
            if(!!errorCallback)  errorCallback(err);
            else    _this.errorMsg(self, "参数请求异常！"+err.toString());
        });
    }else{
        window.localStorage.clear();    //清除所有缓存
        self.$router.push("/login");
    }
};
/**
 * 自定义post请求，对token 包含对token的验证
 * @param self  当前调用的环境对象本身
 * @param url   请求发送地址
 * @param data  请求附带参数
 * @param successCallback   成功回调
 * @param errorCallback 异常回调
 * @Author yangzeng 20190603
 */
defaultParam.post = function(self,url, data,successCallback,errorCallback){
    let access_token = window.localStorage.getItem("user_token"),_this = this;
    //判断token是否存在若不存在则需要重新进行登陆操作
    if(!!access_token){     //登陆成功
        let opts = {
            method: "post",     //请求类型
            url: url+"?access_token="+access_token,     //请求地址处理
            headers: {
                'Content-Type': 'application/json'
            },      //请求头设定
            data: JSON.stringify({params: data})        //请求参数处理
        };
        axios(opts).then(res=>{
            //返回参数结果判断
            if(this.isSuccess(res.status)){
                let _data= res.data;
                if(typeof _data != "object") return _this.errorMsg(self, "请返回正确格式的参数！");        //验证数据本身是否按照指定格式传递
                if(_data.status == 0)   successCallback(_data.message);     //对成功回调的调用
                else   _this.errorMsg(self, _data.message);
            }
        }).catch(err=>{
            if(err.request.status == 401) this.logout(self);
            if(!!errorCallback)  errorCallback(err);
            else    _this.errorMsg(self, "参数请求异常！"+err.toString());
        });
    }else{
        window.localStorage.clear();    //清除所有缓存
        self.$router.push("/login");
    }
};
//返回请求的成功与否验证
defaultParam.isSuccess= function(code){
    let successFlg = false;
    let message = "";
    switch (code) {
        case 200:
            successFlg = true;
            break;
        case "400":
            break;
        case "401":
            break;
        case "403":
            break;
        case "404":
            break;
        case "500":
            break;
        case "501":
            break;
        case "503":
            break;
    }
    return successFlg;
};
/**
 * 成功消息提醒
 * @param self  调用环境本身
 * @param message   消息内容
 * @Author yangzeng
 */
defaultParam.successMsg = function(self,message){
    self.$message({
        type: "success",
        message: message,
        showClose: true
    });
};
/**
 * 异常消息提醒
 * @param self  调用环境本身
 * @param message 消息提醒内容
 * @Author yangzeng
 */
defaultParam.errorMsg = function(self, message){
    self.$message({
        type: "danger",
        message: message,
        showClose: true
    });
};
import axios from 'axios';
export default defaultParam;