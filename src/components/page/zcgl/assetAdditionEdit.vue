<!-- 资产新增添加 yangzeng 20190531 -->
<template>
    <el-dialog title="资产新增" :visible.sync="display" width="80%" top="7vh" :before-close="handleClose">
        <!--表单内容定义-->
        <el-form :model="from" class="demo-form-inline" label-width="130px" :rules="rules">
            <!--基础部分-->
            <div class="default-box">
                <span>
                    <el-form-item label="资产账簿">
                        <el-select v-model="from.BOOK_TYPE_CODE" placeholder="请选择" clearable filterable>
                            <el-option v-for="item in selectLists.assetBookList" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="权属单位">
                        <el-select v-model="from.OWNERSHIP_UNIT" placeholder="请选择" clearable filterable>
                            <el-option v-for="item in selectLists.organizationList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用单位">
                        <el-select v-model="from.USE_UNIT" placeholder="请选择" clearable filterable>
                            <el-option v-for="item in selectLists.organizationList2" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产编号">
                        <el-input v-model="from.ASSET_ID" placeholder="资产编号" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产名称">
                        <el-input v-model="from.DESCRIPTION" placeholder="资产名称" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="财务编号">
                        <el-input v-model="from.ASSET_NUMBER" placeholder="财务编号" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="当前成本">
                        <el-input v-model="from.COST" placeholder="当前成本" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="数量">
                        <el-input v-model="from.CURRENT_UNITS" placeholder="数量" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="计量单位">
                        <el-select v-model="from.ATTRIBUTE2" placeholder="请选择" clearable filterable>
                            <el-option v-for="item in selectLists.unitList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="原始成本">
                        <el-input v-model="from.ORIGINAL_COST" placeholder="原始成本" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否研发资产">
                        <el-input v-model="from.ATTRIBUTE30" placeholder="是否研发资产" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否安全设备">
                        <el-input v-model="from.IS_SAFETY_DEVICE" placeholder="是否安全设备" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产类别">
                        <el-input v-model="from.ASSET_TYPE" placeholder="资产类别" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="关键字">
                        <el-input v-model="from.ASSET_KEY_CCID" placeholder="关键字" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="地点">
                        <el-input v-model="from.LOCATION" placeholder="地点" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="启用日期">
                        <el-input v-model="from.DATE_PLACED_IN_SERVICE" placeholder="启用日期" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="折旧/摊销起始日期">
                        <el-input v-model="from.PRORATE_DATE" placeholder="折旧/摊销起始日期" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="摊销规则">
                        <el-input v-model="from.PRORATE_RULE" placeholder="摊销规则" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用月数">
                        <el-input v-model="from.LIFE_IN_MONTHS" placeholder="使用月数" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="已使用年限">
                        <el-input v-model="from.USE_YEARS" placeholder="已使用年限" class="text"></el-input>
                    </el-form-item>
                </span>
            </div>
            <el-form-item label="当前地理位置" >
                <el-input v-model="from.GEOGRAPHIC_LOCATION" placeholder="当前地理位置" class="maxWidth"></el-input>
            </el-form-item>
            <div class="other-box">
                <span>
                    <el-form-item label="资产来源（增加方式）">
                        <el-input v-model="from.ASSET_SOURCE" placeholder="资产来源（增加方式）"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产性质">
                        <el-input v-model="from.ASSET_NATURE" placeholder="资产性质"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产状态">
                        <el-input v-model="from.ASSET_STATUS" placeholder="资产状态"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="供应商">
                        <el-input v-model="from.VENDOR" placeholder="供应商"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="制造商">
                        <el-input v-model="from.MANUFACTURER" placeholder="制造商"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="保险单编号">
                        <el-input v-model="from.INSURANCE_NUMBER" placeholder="保险单编号"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="保险单编号">
                        <el-input v-model="from.INSURANCE_NUMBER" placeholder="保险单编号"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="保险单名称">
                        <el-input v-model="from.INSURANCE_NAME" placeholder="保险单编号"></el-input>
                    </el-form-item>
                </span>
            </div>
            <div class="other-box">
                <span>
                    <el-form-item label="创建人">
                        <el-input v-model="from.CREATE_PERSON" placeholder="创建人"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改人">
                        <el-input v-model="from.LAST_MODIFIED_PERSON" placeholder="最后修改人"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="创建日期">
                        <el-input v-model="from.CREATE_DATE" placeholder="创建日期"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改日期">
                        <el-input v-model="from.LAST_MODIFIED_DATE" placeholder="最后修改日期"></el-input>
                    </el-form-item>
                </span>
            </div>

            <!--数据表格分栏管理-->
            <el-tabs v-model="activeName">
                <el-tab-pane label="简单数据表格" name="first-ele"></el-tab-pane>
                <!--<el-tab-pane label="" name="second-ele"></el-tab-pane>-->
                <el-tab-pane label="附件上传" name="thread-ele"></el-tab-pane>
            </el-tabs>
            <!-- 资产分配数据表 -->
            <el-table :data="distribution_table" border stripe tooltip-effect="dark">
                <el-table-column type="index" width="50" label="行号"></el-table-column>
                <el-table-column prop="UNITS_ASSIGNED" label="数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.UNITS_ASSIGNED" @change="handlerIsNumber"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="GCC_SEGS" label="折旧分配账户">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.GCC_SEGS"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="RESPONSIBLE_DEPARTMENT" label="责任部门">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.RESPONSIBLE_DEPARTMENT"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="ASSIGNED_TO" label="责任人">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.ASSIGNED_TO"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="USE_PERSON" label="使用人">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.USE_PERSON"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="145px">
                    <template slot-scope="scope">
                        <el-button @click="handlerdistrubutionAddClick(scope)" type="primary">添加</el-button>
                        <el-button @click="handlerdistrubutionDelClick(scope)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <!-- 表单操作按钮 -->
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handlerClickSaveBtn">保 存</el-button>
            <el-button>提交审核</el-button>
            <el-button>审核通过</el-button>
            <el-button @click="display = false">返 回</el-button>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        data(){
            let fromList = {
                BOOK_TYPE_CODE:"",//资产账簿
                OWNERSHIP_UNIT: "",  //权属单位
                USE_UNIT: "",    //使用单位
                ASSET_ID: "",   //资产编号
                DESCRIPTION: "",    //资产名称
                ASSET_NUMBER: "",   //财务编号
                COST: "",   //当前成本
                CURRENT_UNITS: "",  //数量
                ATTRIBUTE2: "", //计量单位
                ORIGINAL_COST: "",  //原始成本
                ATTRIBUTE30: "",    //是否研发资产
                IS_SAFETY_DEVICE: "",   //是否安全设备
                ASSET_TYPE: "", //资产类别
                ASSET_KEY_CCID: "", //关键字
                LOCATION: "",   //地点
                DATE_PLACED_IN_SERVICE: "", //启用日期
                PRORATE_DATE:"",    //折旧/摊销启始日期
                PRORATE_RULE: "",   //摊销规则
                LIFE_IN_MONTHS: "", //使用月数
                USE_YEARS: "",  //已使用年限
                GEOGRAPHIC_LOCATION: "",//当前地理位置
                ASSET_SOURCE: "",   //资产来源
                ASSET_NATURE: "",   //资产性质
                ASSET_STATUS: "",   //资产状态
                VENDOR: "",   //供应商
                MANUFACTURER: "",   //制造商
                INSURANCE_NUMBER: "",   //保险单编号
                INSURANCE_NAME: "", //保险单名称
                CREATE_PERSON: "",    //创建人
                CREATE_DATE: "",    //创建时间
                LAST_MODIFIED_PERSON: "",   //最后修改人
                LAST_MODIFIED_DATE: "", //最后修改时间
            };
            let relusObj = {
                UNITS_ASSIGNED: {type: 'integer'}
            };
            let selectLists = {
                assetBookList: [],  //资产账簿
                organizationList: [],   //单位
                organizationList2: [],   //单位
                unitList: [],   //计量单位
            };
            return {
                activeName: "table_tab",
                display: false,
                from: fromList,
                distribution_table: [
                    {
                        UNITS_ASSIGNED: 0,  //数量
                        GCC_SEGS: "",   //折旧分配账户
                        RESPONSIBLE_DEPARTMENT: "", //责任部门
                        ASSIGNED_TO: "",    //责任人
                        USE_PERSON: ""  //使用人
                    }
                ],    //分配表格参数
                rules: relusObj,
                selectLists: selectLists    //下拉列表数据
            }
        },
        created(){
            //下拉列表数据处理
            this.handlerLoadSelectLists();
        },
        methods:{
            //页面所有下拉列表数据的加载
            handlerLoadSelectLists(){
                let self = this;
                let data = { keys: ["assetBookList","organizationList"]};
                this.$my.post(this,this.$my.path_app+"/batch/searchList",data,function(data){
                    /* 测试环境内容 */
                    console.log(data);

                    /* 正式环境替换
                    let data = JSON.parse(data);
                    for(let i in data){
                        if(self.selectLists.hasOwnProperty(data[i].key)){
                            self.selectLists[data[i].key] = data[i].list;
                        }
                        if(data[i].key == "organizationList"){
                            self.selectLists.organizationList2 = data[i].list;
                        }
                    }
                    */
                },function(err){
                    console.log(err);
                });
            },
            onSubmit() {
                this.isSearch = true;
            },
            //Dialog关闭事件的触发
            handleClose(done) {
                this.$confirm('操作可能未完成，确认直接关闭当前弹层吗？').then(_ => {
                    done();
                }).catch(_ => {});
            },
            //表单确认按钮的触发
            handlerClickSaveBtn(){
                this.$my.post(this,this.$my.path_app+"/asset/add",this.from,function(data){
                    console.log(data);
                });
            },
            //分配表格添加数据
            handlerdistrubutionAddClick(e){
                this.distribution_table.push({
                    UNITS_ASSIGNED: 0,  //数量
                    GCC_SEGS: "",   //折旧分配账户
                    RESPONSIBLE_DEPARTMENT: "", //责任部门
                    ASSIGNED_TO: "",    //责任人
                    USE_PERSON: ""  //使用人
                });
            },
            //分配数据删除操作
            handlerdistrubutionDelClick(e){
                let _data = this.distribution_table;
                if(_data.length <= 1) this.$message({type: "warning",message: "请至少保留一行！"});
                else{
                    let new_data = [],_index = e.$index;
                    for(let i in _data){
                        if((i*1) == _index) continue;
                        new_data.push(_data[i]);
                    }
                    this.distribution_table = new_data;
                }
            },
            //是否为数字的验证
            handlerIsNumber(){
                let _data = this.distribution_table;
                for(let i in _data)
                    if(typeof _data[i].UNITS_ASSIGNED == "string") _data[i].UNITS_ASSIGNED = 0;
            },
        }
    }
</script>

<style scoped>
    .default-box{width: 100%;padding: 10px;}
    .default-box>span{width: 32%;display: inline-block;}
    .demo-form-inline{padding: 20px;}
    .text{width: 210px;}
    .maxWidth{width: 80%;}
    .other-box>span{width: 45%;display: inline-block;}
</style>