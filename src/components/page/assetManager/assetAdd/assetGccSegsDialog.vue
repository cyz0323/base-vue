<template>
    <div>
        <el-dialog width="30%" title="内层 Dialog" :visible.sync="display" append-to-body>
            <el-form-item label="公司段">
                <el-select v-model="selectValue.segOrganization" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="(query=>{remoteMethod(query, selectType[0])})" :loading="loading">
                    <el-option v-for="item in dataList.segOrganizationPage" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="部门">
                <el-select v-model="selectValue.segDepartment" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="(query=>{remoteMethod(query, selectType[1])})" :loading="loading">
                    <el-option v-for="item in dataList.segDepartmentPage" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="科目">
                <el-select v-model="selectValue.segSubject" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="(query=>{remoteMethod(query, selectType[2])})" :loading="loading">
                    <el-option v-for="item in dataList.segSubjectPage" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="子目">
                <el-select v-model="selectValue.segSubSubject" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="(query=>{remoteMethod(query, selectType[3])})" :loading="loading">
                    <el-option v-for="item in dataList.segSubSubjectPage" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目">
                <el-select v-model="selectValue.segProject" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="(query=>{remoteMethod(query, selectType[4])})" :loading="loading">
                    <el-option v-for="item in dataList.segProjectPage" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="往来">
                <el-input v-model="selectValue.input1" placeholder="请输入内容" class="text" readonly></el-input>
            </el-form-item>
            <el-form-item label="板块">
                <el-input v-model="selectValue.input2" placeholder="请输入内容" class="text" readonly></el-input>
            </el-form-item>
            <el-form-item label="备用">
                <el-input v-model="selectValue.input3" placeholder="请输入内容" class="text" readonly></el-input>
            </el-form-item>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleChildDialogSaveBtn">保 存</el-button>
                <el-button @click="display = false">返 回</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: [],
        data(){
            return {
                display: false, //弹层是否显示
                loading: false, //loading: 加载
                index: 0,
                element: null,
                selectType: ["segOrganizationPage","segDepartmentPage","segSubjectPage","segSubSubjectPage","segProjectPage"],
                dataList: {
                    segOrganizationPage: [],
                    segDepartmentPage: [],
                    segSubjectPage: [],
                    segSubSubjectPage: [],
                    segProjectPage: []
                },
                selectValue: {
                    segOrganization: "",
                    segDepartment: "",
                    segSubject: "",
                    segSubSubject: "",
                    segProject: "",
                    input1: 0,
                    input2: 0,
                    input3: 0
                },
                returnParam: ""
            }
        },
        mounted() {},
        methods: {
            remoteMethod(query,queryType) {
                let self = this;
                if (query !== '') {
                    self.loading = true;
                    let url = this.handleGetUrl(queryType);
                    let data = {searchKey: query};
                    this.$my.post(this,url,data,function(data){
                        data = JSON.parse(data);
                        if(data.list.length == 0){
                            self.dataList[queryType] = [{id: 0, name: "检索参数不存在！"}];
                        }else{
                            self.loading = false;
                            self.dataList[queryType] = data.list;
                        }
                    },function(err){
                        self.$message({type: "warning", message: "请求数据失败！"});
                    })
                }
            },
            //弹层保存按钮
            handleChildDialogSaveBtn(){
                this.returnParam = this.selectValue.segOrganization+"."+this.selectValue.segDepartment+"."+this.selectValue.segSubject+"."+this.selectValue.segSubSubject+
                    "."+this.selectValue.segProject+"."+this.selectValue.input1+"."+this.selectValue.input2+"."+this.selectValue.input3;
                this.element[0].value = this.returnParam;
                this.display = false;
            },
            handleGetUrl(selectType){
                return this.$my.path+"/ams/data/"+selectType;
            }
        }
    }
</script>
<style scoped>
    .text{width: 215px;}
</style>
