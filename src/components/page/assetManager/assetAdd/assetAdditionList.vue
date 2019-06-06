<template>
    <!--表格部分的定义-->
    <el-card body-style="{width: 100%;}">
        <!--表单检索区域内容定义-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="资产编号">
                <el-input v-model="formInline.ASSET_ID" placeholder="资产编号" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产名称">
                <el-input v-model="formInline.DESCRIPTION" placeholder="资产名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="资产类别">
                <el-input v-model="formInline.ASSET_TYPE" placeholder="资产类别" clearable></el-input>
            </el-form-item>
            <!--<el-form-item label="使用人">
                <el-input v-model="formInline.user" placeholder="使用人" clearable></el-input>
            </el-form-item>-->
            <el-form-item label="资产状态">
                <el-input v-model="formInline.ASSET_STATUS" placeholder="资产状态" clearable></el-input>
            </el-form-item>
            <el-form-item label="供应商名称">
                <el-input v-model="formInline.VENDOR" placeholder="供应商名称" clearable></el-input>
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
            let tableData = {
                //url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                url: "http://10.231.132.130:8082/asset/page",
                isCheck: true,  //开启复选
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "ASSET_ID",value: "资产编号"},
                    {key: "DESCRIPTION",value: "资产名称"},
                    {key: "COST", value: "当前成本"},
                    {key: "CURRENT_UNITS",value: "资产数量"},
                    {key: "DATE_PLACED_IN_SERVICE",value: "启用日期"},
                    {key: "ASSET_TYPE", value: "资产类别"},
                    /*{key: "col7", value: "资产地点"},*/
                    {key: "USE_YEARS", value: "折旧年限"},  //折旧年限
                    {key: "USE_YEARS", value: "已使用年限"},
                    {key: "ASSET_STATUS", value: "资产状态"},
                    {key: "ASSET_ID", value: "财务资产编号"}, //财务资产编号
                    {key: "VENDOR", value: "供应商"}
                ],
                queryParam: {"ASSET_ID": "","DESCRIPTION": "","ASSET_TYPE": "","ASSET_STATUS": "", "VENDOR": ""},
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
                tableData: tableData,    //表格数据定义
                formInline: tableData.queryParam, //顶部检索表单定义
            }
        },
        created(){
            this.getDataList();
        },
        watch: {
            isSearch: function(){
                /*let a = this.$refs["assetAdditionTable"].tableData;
                this.$refs["assetAdditionTable"].tableData = data;*/
                //this.$refs["assetAdditionTable"].getDate();
                console.log(this.$refs["assetAdditionTable"]);
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
            handleShwoView() {
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 3;
                this.$refs["dialog"].isDisabled = true;
                this.$refs["dialog"].activeName = "first_ele";
            },
            //添加按钮事件定义，datas：返回复选的所有行的数据
            handleAddData(){
                //打开新标签页的形式 this.$router.push("/asset-addition-add");
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 1;
                this.$refs["dialog"].isDisabled = false;
                this.$refs["dialog"].activeName = "first_ele";
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
            handleUpdate(){
                this.$refs["dialog"].display = true;
                this.$refs["dialog"].use_type = 2;
                this.$refs["dialog"].isDisabled = false;
                this.$refs["dialog"].activeName = "first_ele";
            }
        }
    }
</script>

<style scoped>
    .box-card { width: 100%; }
</style>