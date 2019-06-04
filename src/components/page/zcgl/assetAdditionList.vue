<template>
    <!--表格部分的定义-->
    <el-card body-style="{width: 100%;}">
        <!--表单检索区域内容定义-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="资产编号">
                <el-input v-model="formInline.col1" placeholder="资产编号" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产名称">
                <el-input v-model="formInline.col2" placeholder="资产名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产类别">
                <el-input v-model="formInline.col6" placeholder="资产类别" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产地点">
                <el-input v-model="formInline.col7" placeholder="资产地点" clearable></el-input>
            </el-form-item>
            <el-form-item label="使用人">
                <el-input v-model="formInline.user" placeholder="使用人" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产状态">
                <el-input v-model="formInline.col9" placeholder="资产状态" clearable></el-input>
            </el-form-item>
            <el-form-item label="供应商名称">
                <el-input v-model="formInline.col12" placeholder="供应商名称" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <!--表格区域内容定义-->
        <y-table :data="tableData" ref="assetAdditionTable" :pagination="showPagination"></y-table>
        <!--编辑窗口的定义 -->
        <asset-addition-edit ref="dialog"></asset-addition-edit>
    </el-card>
</template>

<script>
    import assetAdditionEdit from "./assetAdditionEdit"
    export default{
        components: {assetAdditionEdit},
        data(){
            let formInline = {user: '',col1: "",col2: "",col6: "",col7: "",col9: "",col12: "" };
            let tableData = {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                isCheck: true,  //开启复选
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "资产编号"},
                    {key: "col2",value: "资产名称"},
                    {key: "col3", value: "当前成本"},
                    {key: "col4",value: "资产数量"},
                    {key: "col5",value: "启用日期"},
                    {key: "col6", value: "资产类别"},
                    {key: "col7", value: "资产地点"},
                    {key: "col8", value: "折旧年限"},
                    {key: "col9", value: "已使用年限"},
                    {key: "col9", value: "资产状态"},
                    {key: "col11", value: "财务资产编号"},
                    {key: "col12", value: "供应商"}
                ],
                rowBtns: [      //局部按钮
                    {name: "详情", fn: this.handleShwoView,type: "primary", icon: "el-icon-view"},
                    {name: "修改", fn: this.handleUpdate, type: "primary",icon: "el-icon-edit"}
                ],
                externalBtns: [     //全局按钮
                    {name: "新增", fn: this.handleAddData, type: "primary"},
                    {name: "删除", fn: this.handleDelData, type: "danger"}
                ]
            };
            return {
                isSearch: false,        //对数据表格检索的控制
                showPagination: true,   //分页显示与否默认显示
                formInline: formInline, //顶部检索表单定义
                tableData: tableData,    //表格数据定义
            }
        },
        created(){
            this.getDataList();
        },
        watch: {
            isSearch: function(){
                let a = this.$refs["assetAdditionTable"].tableData;
                let index = 0;
                let data = [];
                for(let i in a){
                    index = i*1+1;
                    if(index > 5) break;
                    data.push(a[i]);
                }
                this.$refs["assetAdditionTable"].tableData = data;
            }
        },
        methods: {
            //列表数据请求
            getDataList(){

            },
            onSubmit() {
                this.isSearch = true;
            },
            //详情查看
            handleShwoView(index, row) {
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 3;
                this.$refs["dialog"].isDisabled = true;
            },
            //添加按钮事件定义，datas：返回复选的所有行的数据
            handleAddData(){
                //打开新标签页的形式 this.$router.push("/asset-addition-add");
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 1;
                this.$refs["dialog"].isDisabled = false;
            },
            //数据删除操作
            handleDelData(data){
                if(data instanceof Array && data.length > 0){
                    this.$message("确认需要删除数据吗？");
                }else  this.$message({
                    message: "请选择需要删除的数据！",
                    type: "warning",
                    duration: 2000
                });
            },
            //表格数据修改
            handleUpdate(data){
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 2;
                this.$refs["dialog"].isDisabled = false;
            }
        }
    }
</script>

<style scoped>
    .box-card { width: 100%; }
</style>