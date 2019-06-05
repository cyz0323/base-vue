<!-- 资产新增添加 yangzeng 20190531 -->
<template>
    <el-dialog title="资产新增" :visible.sync="display" width="80%" top="7vh" :before-close="handleClose">
        <!--表单内容定义-->
        <el-form :model="from" class="demo-form-inline" label-width="130px" :rules="rules">
            <!--基础部分-->
            <div class="default-box">
                <span>
                    <el-form-item label="资产账簿">
                        <el-select v-model="from.BOOK_TYPE_CODE" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.assetBookList" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="权属单位">
                        <el-select v-model="from.OWNERSHIP_DEPT" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.organizationList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用单位">
                        <el-select v-model="from.USE_DEPT" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.organizationList2" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产编号">
                        <el-input v-model="from.ASSET_ID" placeholder="资产编号" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产名称">
                        <el-input v-model="from.DESCRIPTION" placeholder="资产名称" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="财务编号">
                        <el-input v-model="from.ASSET_NUMBER" placeholder="财务编号" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="当前成本">
                        <el-input v-model="from.COST" placeholder="当前成本" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="数量">
                        <el-input v-model="from.CURRENT_UNITS" placeholder="数量" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="计量单位">
                        <el-select v-model="from.ATTRIBUTE2" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.unitList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="原始成本">
                        <el-input v-model="from.ORIGINAL_COST" placeholder="原始成本" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否研发资产">
                        <el-select v-model="from.ATTRIBUTE30" placeholder="请选择" clearable filterable :disabled="isDisabled" @change="handleSetATTRIBUTE30">
                            <el-option v-for="item in selectLists.attribute30" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否安全设备">
                        <el-select v-model="from.IS_SAFETY_DEVICE" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.is_safety_device" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产类别">
                        <el-cascader placeholder="输入检索内容" :options="options" filterable clearable @change="handleCascaderEvent" :disabled="isDisabled"></el-cascader>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="关键字">
                        <el-input v-model="from.ASSET_KEY_CCID" placeholder="关键字" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="地点">
                        <el-input v-model="from.LOCATION" placeholder="地点" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="启用日期">
                        <el-date-picker v-model="from.DATE_PLACED_IN_SERVICE" type="date" placeholder="选择日期"class="text" :disabled="isDisabled"></el-date-picker>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="折旧/摊销起始日期">
                        <el-input v-model="from.PRORATE_DATE" placeholder="折旧/摊销起始日期" readonly class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="摊销规则">
                        <el-input v-model="from.PRORATE_RULE" placeholder="摊销规则" readonly class="text" :disabled="isDisabled" readonly></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用月数">
                        <el-input v-model="from.LIFE_IN_MONTHS" placeholder="使用月数" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="已使用年限">
                        <el-input v-model="from.USE_YEARS" placeholder="已使用年限" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="残值">
                        <el-input v-model="from.RESIDAUL_VALUE" placeholder="残值" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
            </div>
            <el-form-item label="当前地理位置" >
                <el-input v-model="from.GEOGRAPHIC_LOCATION" placeholder="当前地理位置" class="maxWidth" :disabled="isDisabled"></el-input>
            </el-form-item>
            <div class="other-box">
                <span>
                    <el-form-item label="资产来源（增加方式）">
                        <el-select v-model="from.ASSET_SOURCE" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.assetSourceList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产性质">
                        <el-select v-model="from.ASSET_NATURE" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.assetNatureList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产状态">
                        <el-select v-model="from.ASSET_STATUS" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.asset_status" :key="item.code" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="供应商">
                        <el-input v-model="from.VENDOR" placeholder="供应商" class="select" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="制造商">
                        <el-input v-model="from.MANUFACTURER" placeholder="制造商" class="select" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
               <span>
                    <el-form-item label="责任部门">
                        <el-input v-model="from.INSURANCE_NUMBER" placeholder="责任部门" class="select" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="责任人">
                        <el-input v-model="from.INSURANCE_NAME" placeholder="责任人" class="select" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <!--资产详情设置-->
                <el-collapse v-model="activeName2" accordion style="width: 90%;margin-left: 40px;">
                    <el-collapse-item title="资产类别配置参数" name="1">
                        <!-- 资产类别对应的参数子页面 -->
                        <asset-type-cascader ref="assetTypeFrom"></asset-type-cascader>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="other-box" v-if="use_type == 3">
                <span>
                    <el-form-item label="创建人">
                        <el-input v-model="from.CREATE_PERSON" placeholder="创建人" disabled class="select"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改人">
                        <el-input v-model="from.LAST_MODIFIED_PERSON" placeholder="最后修改人" disabled class="select"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="创建日期">
                        <el-input v-model="from.CREATE_DATE" placeholder="创建日期" disabled class="select"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改日期">
                        <el-input v-model="from.LAST_MODIFIED_DATE" placeholder="最后修改日期" disabled class="select"></el-input>
                    </el-form-item>
                </span>
            </div>

            <!--数据表格分栏管理-->
            <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="分配" name="first_ele">
                    <!-- 资产分配数据表 -->
                    <el-table :data="from.distribution_table" border stripe tooltip-effect="dark" @cell-click="((row, column, cell, event)=>{handleColumnClick(row, column, cell, event,this.from.distribution_table)})">
                        <el-table-column type="index" width="50" label="行号"></el-table-column>
                        <el-table-column prop="UNITS_ASSIGNED.value" label="数量百分比">
                           <template slot-scope="scope">
                                <el-input v-if="scope.row.UNITS_ASSIGNED.isEdit"  v-model="scope.row.UNITS_ASSIGNED.value" @change="handlerIsNumber" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.UNITS_ASSIGNED.value}}</span>
                           </template>
                        </el-table-column>
                        <el-table-column prop="GCC_SEGS.value" label="折旧分配账户">
                            <template slot-scope="scope">
                                <el-input v-if="scope.row.GCC_SEGS.isEdit" v-model="scope.row.GCC_SEGS.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.GCC_SEGS.value}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="USE_DEPT.value" label="使用部门">
                            <template slot-scope="scope">
                                <el-input v-if="scope.row.USE_DEPT.isEdit" v-model="scope.row.USE_DEPT.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.USE_DEPT.value}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="USE_PERSON.value" label="使用人">
                            <template slot-scope="scope">
                                <el-input  v-if="scope.row.USE_PERSON.isEdit" v-model="scope.row.USE_PERSON.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.USE_PERSON.value}}</span>
                            </template>
                        </el-table-column>
                        <template v-if="use_type > 1">
                            <el-table-column prop="CREATE_PERSON" label="创建人"></el-table-column>
                            <el-table-column prop="CREATE_DATE" label="创建日期"></el-table-column>
                            <template v-if="use_type > 2">
                                <el-table-column prop="LAST_MODIFIED_PERSON" label="最后修改人"></el-table-column>
                                <el-table-column prop="LAST_MODIFIED_DATE" label="最后修改日期"></el-table-column>
                            </template>
                        </template>
                        <el-table-column label="操作" width="145px">
                            <template slot-scope="scope">
                                <el-button @click="handlerdistrubutionAddClick(scope)" type="primary">添加</el-button>
                                <el-button @click="handlerdistrubutionDelClick(scope)" type="danger">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <!--发票表格-->
                <el-tab-pane label="发票" name="second_ele">
                    <el-table :data="invoice_table" border stripe tooltip-effect="dark" @cell-click="((row, column, cell, event)=>{handleColumnClick(row, column, cell, event,this.invoice_table)})">
                        <el-table-column type="index" width="50" label="行号"></el-table-column>
                        <el-table-column prop="INVOICE_CODE.value" label="发票编号">
                            <template slot-scope="scope">
                                <el-input v-if="scope.row.INVOICE_CODE.isEdit"  v-model="scope.row.INVOICE_CODE.value" @change="handlerIsNumber" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.INVOICE_CODE.value}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="INVOICE_DATE.value" label="发票日期">
                            <template slot-scope="scope">
                                <el-input v-if="scope.row.INVOICE_DATE.isEdit" v-model="scope.row.INVOICE_DATE.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.INVOICE_DATE.value}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="INVOICE_AMOUNT.value" label="发票金额">
                            <template slot-scope="scope">
                                <el-input v-if="scope.row.INVOICE_AMOUNT.isEdit" v-model="scope.row.INVOICE_AMOUNT.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.INVOICE_AMOUNT.value}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="INVOICE_DESP.value" label="说明">
                            <template slot-scope="scope">
                                <el-input  v-if="scope.row.INVOICE_DESP.isEdit" v-model="scope.row.INVOICE_DESP.value" :disabled="isDisabled"></el-input>
                                <span v-else>{{scope.row.INVOICE_DESP.value}}</span>
                            </template>
                        </el-table-column>
                        <template v-if="use_type > 1">
                            <el-table-column prop="CREATE_PERSON" label="创建人"></el-table-column>
                            <el-table-column prop="CREATE_DATE" label="创建日期"></el-table-column>
                            <template v-if="use_type > 2">
                                <el-table-column prop="LAST_MODIFIED_PERSON" label="最后修改人"></el-table-column>
                                <el-table-column prop="LAST_MODIFIED_DATE" label="最后修改日期"></el-table-column>
                            </template>
                        </template>
                        <el-table-column label="操作" width="145px">
                            <template slot-scope="scope">
                                <el-button @click="handlerdistrubutionAddClick(scope)" type="primary">添加</el-button>
                                <el-button @click="handlerdistrubutionDelClick(scope)" type="danger">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <template v-if="use_type > 2">
                    <el-tab-pane label="保险" name="thread_ele">
                        <y-table :data="insurance_table" :pagination="showPagination"></y-table>
                    </el-tab-pane>
                    <el-tab-pane label="租赁" name="four_ele">
                        <y-table :data="lease_table" :pagination="showPagination"></y-table>
                    </el-tab-pane>
                    <el-tab-pane label="维修" name="five_ele">
                        <y-table :data="maintenance_table" :pagination="showPagination"></y-table>
                    </el-tab-pane>
                    <el-tab-pane label="优化" name="six_ele">
                        <y-table :data="optimize_table" :pagination="showPagination"></y-table>
                    </el-tab-pane>
                </template>
                <el-tab-pane label="附件" name="seven_ele">
                    <!-- 资产分配数据表 -->
                    <el-table :data="fileupload_table" border stripe tooltip-effect="dark">
                        <el-table-column type="index" width="50" label="行号"></el-table-column>
                        <el-table-column prop="file_type" label="类型" width="260px">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.file_type" placeholder="请选择" clearable @change="((val)=>{handleFileSelectChange(val,scope)})" :disabled="isDisabled">
                                    <el-option v-for="item in fileupload_type" :key="item.code" :label="item.name" :value="item.code"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column prop="file_id" label="资源浏览">
                            <template slot-scope="scope">
                                <el-upload :action="file_path" :on-success="handleUpload" :on-change="handleChange"
                                           :file-list="scope.row.fileList" :list-type="scope.row.listType" :disabled="isDisabled">
                                </el-upload>
                            </template>
                        </el-table-column>
                        <template v-if="use_type > 1">
                            <el-table-column prop="USE_PERSON" label="创建人"></el-table-column>
                            <el-table-column prop="USE_PERSON" label="创建日期"></el-table-column>
                            <template v-if="use_type > 2">
                                <el-table-column prop="USE_PERSON" label="最后修改人"></el-table-column>
                                <el-table-column prop="USE_PERSON" label="最后修改日期"></el-table-column>
                            </template>
                        </template>
                        <el-table-column label="操作" width="145px">
                            <template slot-scope="scope">
                                <el-button @click="handlerFileTableAddClick(scope)" type="primary">添加</el-button>
                                <el-button @click="handlerFileTableDelClick(scope)" type="danger">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>

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
    import assetTypeCascader from "./assetTypeCascader";
    export default {
        components: {assetTypeCascader},
        data(){
            let fromList = {
                BOOK_TYPE_CODE:"",//资产账簿
                OWNERSHIP_DEPT: "",  //权属单位
                USE_DEPT: "",    //使用单位
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
                RESIDAUL_VALUE: "", //残值
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
                //资产类型联动输入内容
                fieIds1: [], //资产配置1-根据资产类型进行变化
                fieIds2: [],    //资产配置2-根据资产账簿和资产类型进行变化
                //分配表格区域内容
                distribution_table: [
                    {
                        UNITS_ASSIGNED: {value: 0, isEdit: false},  //数量
                        GCC_SEGS: {value: "", isEdit: false},   //折旧分配账户
                        /*RESPONSIBLE_DEPARTMENT: "", //责任部门
                        ASSIGNED_TO: "",    //责任人*/
                        USE_PERSON: {value: "", isEdit: false},  //使用人
                        USE_DEPT: {value: "", isEdit: false},  //使用部门
                        CREATE_PERSON: "",  //创建人
                        CREATE_DATE: "",    //创建日期
                        LAST_MODIFIED_PERSON: "",   //最后一次修改人
                        LAST_MODIFIED_DATE: "",      //最后一次修改日期
                    }
                ],
                fileupload: []  //文件上传相关参数
            };
            //表单验证区域
            let relusObj = {
                UNITS_ASSIGNED: {type: 'integer'}
            };
            //文件上传上传类型的指定
            let fileuploadType = [
                {code: "001", name: "发票"},
                {code: "002", name: "资产购置单"},
                {code: "003", name: "内请批复"},
                {code: "004", name: "照片"},
                {code: "005", name: "合同"},
                {code: "006", name: "房产证"},
                {code: "007", name: "登记证"},
                {code: "008", name: "交车证"},
                {code: "009", name: "行驶证"},
                {code: "010", name: "土地证"}
            ];
            //下拉框数据集合
            let selectLists = {
                assetBookList: [],  //资产账簿
                organizationList: [],   //单位
                organizationList2: [],   //单位
                unitList: [],   //计量单位
                assetSourceList: [],    //资产来源
                assetNatureList: [],    //资产性质
                attachmentTypeList: [], //资源上传类型
                attribute30: [{code: "Y", name: "是"},{code: "N",name: "否"}],        //是否研发资产
                is_safety_device: [{code: "Y", name: "是"},{code: "N",name: "否"}],   //是否安全设备
                asset_status: [
                    {code: "use", name: "再用"},
                    {code: "idle", name: "闲置"},
                    {code: "scrap", name: "报废"},
                    {code: "disable", name: "停用"},
                    {code: "rent", name: "出租"}
                ]
            };
            //文件上传表格参数定义
            let fileuploadTable = [
                {file_type: "",file_id: "",file: "", listType: "text",fileList: []}
            ];
            //资产参数列表
            let optionsList = [      //资产状态 级联操作参数
                {value: '房屋建筑物',label: '房屋建筑物',children: [
                    {value: '生产用房',label: '生产用房'},
                    {value: '仓储房',label: '仓储房'},
                    {value: '办公用房',label: '办公用房'},
                    {value: '生活及服务设施用房',label: '生活及服务设施用房'},
                    {value: '油库及储油池（罐）',label: '油库及储油池（罐）'},
                    {value: '简易或易受腐蚀建筑物',label: '简易或易受腐蚀建筑物'},
                    {value: '临时性建筑物',label: '临时性建筑物'}
                ]},
                {value: '建筑物',label: '建筑物',children: [
                    {value: '码头',label: '码头'},
                    {value: '堆场',label: '堆场'},
                    {value: '道路',label: '道路'}
                ]},
                {value: '机械设备',label: '机械设备',children: [
                    {value: "动力及起重设备", label: "动力及起重设备"},
                    {value: "拖头托板", label: "拖头托板"},
                    {value: "普通机械设备", label: "普通机械设备"},
                    {value: "专用设备", label: "专用设备"}
                ]},
                {value: '集装箱、货架及托盘',label: '集装箱、货架及托盘',children: [
                    {value: "集装箱", label: "集装箱"},
                    {value: "集装箱", label: "集装箱"},
                    {value: "货架", label: "货架"}
                ]},
                {value: '运输工具',label: '运输工具',children: [
                    {value: "船舶", label: "船舶"},
                    {value: "车辆", label: "车辆"}
                ]},
                {value: '办公设备及家具',label: '办公设备及家具',children: [
                    {value: "办公家具", label: "办公家具"},
                    {value: "办公电器", label: "办公电器"},
                    {value: "信息化设备", label: "信息化设备"}
                ]},
                {value: '土地使用权',label: '土地使用权',children: [
                    {value: "生产操作用地", label: "生产操作用地"},
                    {value: "道路交通用地", label: "道路交通用地"},
                    {value: "办公场所用地", label: "办公场所用地"},
                    {value: "生活及服务设施用地", label: "生活及服务设施用地"}
                ]},
                {value: '无形资产',label: '无形资产',children: [
                    {value: "软件", label: "软件"},
                    {value: "专利权", label: "专利权"},
                    {value: "非专利技术", label: "非专利技术"},
                    {value: "商标权", label: "商标权"},
                    {value: "著作权", label: "著作权"},
                    {value: "特许权", label: "特许权"}
                ]},
                {value: '投资性房地产',label: '投资性房地产',children: [
                    {value: "投资性房产", label: "投资性房产"},
                    {value: "投资性地产", label: "投资性地产"},
                ]},
            ];
            //保险表格参数
            let insuranceTable = {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "保险单号"},
                    {key: "col2",value: "保险生效日期"},
                    {key: "col3", value: "保险结束日期"},
                    {key: "col4",value: "投保年限"},
                    {key: "col5",value: "投保金额"},
                    {key: "col5", value: "保单金额"},
                    {key: "col5", value: "创建人"},
                    {key: "col5", value: "创建日期"},
                    {key: "col5", value: "最后修改人"},
                    {key: "col5", value: "更新日期"},
                ]
            };
            //租赁表格数据
            let leaseTable = {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "租赁合同号"},
                    {key: "col2",value: "租赁开始日期"},
                    {key: "col3", value: "租赁结束日期"},
                    {key: "col4",value: "租赁年限"},
                    {key: "col5",value: "租赁金额"},
                    {key: "col5", value: "租赁性质"},
                    {key: "col5", value: "创建人"},
                    {key: "col5", value: "创建日期"},
                    {key: "col5", value: "最后修改人"},
                    {key: "col5", value: "更新日期"},
                ]
            };
            //维修/保养表格数据
            let maintenanceTable = {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "维修/保养合同编号"},
                    {key: "col2",value: "维修/保养开始日期"},
                    {key: "col3", value: "维修/保养结束日期"},
                    {key: "col4",value: "合同年限"},
                    {key: "col5",value: "维修/保养金额"},
                    {key: "col5", value: "内容"},
                    {key: "col5", value: "创建人"},
                    {key: "col5", value: "创建日期"},
                    {key: "col5", value: "最后修改人"},
                    {key: "col5", value: "更新日期"},
                ]
            };
            //优化表格数据
            let optimizeTable = {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "优化编号"},
                    {key: "col2",value: "优化原因"},
                    {key: "col3", value: "优化方式"},
                    {key: "col4",value: "优化批次"},
                    {key: "col5", value: "创建人"},
                    {key: "col5", value: "创建日期"},
                    {key: "col5", value: "最后修改人"},
                    {key: "col5", value: "更新日期"},
                ]
            };
            return {
                activeName: "first_ele",
                file_path: "",
                activeName2: 1, //折叠面板操作绑定
                showPagination: true,   //是否具有分页
                isDisabled: false,  //是否禁之操作
                display: false,     //控制弹层是否显示
                use_type:  0,       //判断当前进入的操作按钮是那种：添加（1）、编辑（2）、查看（3）、只有在查看状态下创建人和修改人可见
                from: fromList,     //表单参数定义
                rules: relusObj,    //表单验证的处理
                selectLists: selectLists,   //下拉列表数据
                insurance_table: insuranceTable,    //保险表格参数
                lease_table: leaseTable,        //租赁表格参数
                maintenance_table: maintenanceTable,  //维修表格参数
                optimize_table: optimizeTable,     //优化表格参数
                invoice_table: [
                    {
                        INVOICE_CODE: { value: "1", isEdit: false},
                        INVOICE_DATE: {value: "2", isEdit: false},
                        INVOICE_AMOUNT: {value: "3", isEdit: false},
                        INVOICE_DESP: {value: "4", isEdit: false},
                        CREATE_PERSON: "",  //创建人
                        CREATE_DATE: "",    //创建日期
                        LAST_MODIFIED_PERSON: "",   //最后一次修改人
                        LAST_MODIFIED_DATE: "",      //最后一次修改日期
                    }
                ],  //发票表格参数
                fileupload_table: fileuploadTable,//文件上传区域设定
                fileupload_type: fileuploadType,      //文件上传上传类型的指定
                options: optionsList,            //资产类型级联列表数据
            }
        },
        created(){
            //下拉列表数据处理
            this.handlerLoadSelectLists();
            //创建人，创建日期赋值
            this.access_token = window.localStorage.getItem("user_token");

            //文件上传
            this.file_path = "http://10.231.128.189:1111/upload/test?access_token=30ff6ecf-437b-4b89-9b12-a1eeac2e2ba4";
        },
        methods:{
            onSubmit() {
                this.isSearch = true;
            },
            //Dialog关闭事件的触发
            handleClose(done) {
                this.$confirm('操作可能未完成，确认直接关闭当前弹层吗？').then(_ => {
                    done();
                }).catch(_ => {});
            },
            //是否为数字的验证
            handlerIsNumber(){
                let _data = this.from.distribution_table;
                for(let i in _data)
                    if(typeof _data[i].UNITS_ASSIGNED == "string") _data[i].UNITS_ASSIGNED = 0;
            },
            //页面所有下拉列表数据的加载
            handlerLoadSelectLists(){
                let self = this;
                let data = { keys: ["assetBookList","organizationList","unitList","assetSourceList","assetNatureList","attachmentTypeList"]};
                this.$my.post(this,this.$my.path_app+"/batch/searchList",data,function(data){
                    data = JSON.parse(data);
                    for(let i in data){
                        if(self.selectLists.hasOwnProperty(data[i].key)){
                            self.selectLists[data[i].key] = data[i].list;
                        }
                        if(data[i].key == "organizationList"){
                            self.selectLists.organizationList2 = data[i].list;
                        }
                    }
                },function(err){
                    console.log(err);
                });

            },
            //表单保存按钮的触发
            handlerClickSaveBtn(){
                console.log(this.$refs["assetTypeFrom"].request_data);
                /*this.$my.post(this,this.$my.path_app+"/asset/add",this.from,function(data){
                    console.log(data);
                });*/
            },
            //分配表格添加数据
            handlerdistrubutionAddClick(e){
                this.from.distribution_table.push({
                    UNITS_ASSIGNED: {value: 0, isEdit: false},  //数量
                    GCC_SEGS: {value: "", isEdit: false},   //折旧分配账户
                    USE_PERSON: {value: "", isEdit: false},  //使用人
                    USE_DEPT: {value: "", isEdit: false},  //使用部门
                    CREATE_PERSON: "",  //创建人
                    CREATE_DATE: "",    //创建日期
                    LAST_MODIFIED_PERSON: "",   //最后一次修改人
                    LAST_MODIFIED_DATE: "",      //最后一次修改日期
                });
            },
            //分配数据删除操作
            handlerdistrubutionDelClick(e){
                let _data = this.from.distribution_table;
                if(_data.length <= 1) this.$message({type: "warning",message: "请至少保留一行！"});
                else{
                    let new_data = [],_index = e.$index;
                    for(let i in _data){
                        if((i*1) == _index) continue;
                        new_data.push(_data[i]);
                    }
                    this.from.distribution_table = new_data;
                }
            },
            //分配单元格点击事件
            handleColumnClick(row, column, cell, event,tableList){
                let _lists = tableList,_data;
                //关闭全部编辑状态
                for(let i in _lists){
                    _data = _lists[i];
                    for(let j in _data){
                        if(typeof _data[j] == "object")  _data[j].isEdit = false;
                    }
                }
                //仅仅打开当前点击列的编辑状态
                if(!!column.property){
                    let key = column.property.split(".")[0];
                    if(typeof row[key] == "object")
                        row[key].isEdit = true;
                }
            },
            //资源表格添加数据
            handlerFileTableAddClick(){
                this.fileupload_table.push({file_type: "",file_id: "",file: ""});
            },
            //资源表格删除事件
            handlerFileTableDelClick(e){
                let _data = this.fileupload_table;
                if(_data.length <= 1) this.$message({type: "warning",message: "请至少保留一行！"});
                else{
                    let new_data = [],_index = e.$index;
                    for(let i in _data){
                        if((i*1) == _index) continue;
                        new_data.push(_data[i]);
                    }
                    this.fileupload_table = new_data;
                }
            },
            //文件上传
            handleChange(file, fileList) {
                this.fileList = fileList.slice(-3);
            },
            //对上传后的文件参数进行处理
            handleUpload(response, file, fileList){
                if(response.status == 0){
                    let data = response.message;

                }
            },
            //对文件类型选择后的上传样式进行改变
            handleFileSelectChange(e,scope){
                let data = this.fileupload_table,_index = scope.$index;
                if(e == "004")  this.fileupload_table[scope.$index].listType = "picture-card";
                else this.fileupload_table[scope.$index].listType = "text";
            },
            //级联选择器的change事件的绑定
            handleCascaderEvent(val){
                this.$refs["assetTypeFrom"].url=this.$my.path_app+"/data/fieldConfigList?assetTypeCode="+val[val.length - 1];
                this.$refs["assetTypeFrom"].handeGetData();
            },
            //设置是否研发资产参数
            handleSetATTRIBUTE30(val){
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    .default-box{width: 100%;padding: 10px;}
    .default-box>span{width: 32%;display: inline-block;}
    .demo-form-inline{padding: 20px;}
    .text{width: 215px;}
    .maxWidth{width: 80%;}
    .other-box>span{width: 45%;display: inline-block;}
    .select{width: 320px;}
</style>