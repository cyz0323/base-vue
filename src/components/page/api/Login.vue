<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tips">Tips : 请输入正确的用户名和密码。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                request_path: "http://localhost:8888/oauth/token",   //http://localhost:5000/oauth/token
                request_megUrl: "http://localhost:8888/user",
                grant_type: "password",
                client_id: "app",
                client_secret: "app",
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                let self = this;
                let path=this.request_path+"?grant_type="+this.grant_type+"&username="+this.ruleForm.username
                    +"&password="+this.ruleForm.password+"&client_id="+this.client_id+"&client_secret="+this.client_secret;
               /*this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post(path).then( res =>{
                            let _data = res.data;
                            if(_data.status == 0){
                                localStorage.setItem('user_name',self.ruleForm.username);
                                localStorage.setItem('user_token',_data.access_token);
                                self.$router.push("/");
                            }else if(_data.status == 400) {
                                this.$message(_data.message);
                            }else{
                                this.$message("登陆失败，请确认账号密码是否正确！");
                            }
                        }).catch(err=>{
                            this.$message(err.toString());
                        });
                    } else {
                        this.$message("验证失败，请输入正确格式的账号和密码！。");
                        return false;
                    }
                });*/

                this.$axios.post("localhost:8888/user?access_token=bf9c2ed9-c597-47bc-aff2-b92b5756d5a6").then( res =>{
                    console.log(res);
                }).catch(err=>{
                    this.$message(err.toString());
                });
            },
            setDataMessage(token){
                this.$axios.post("localhost:8888/user?access_token="+token).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../../assets/img/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>