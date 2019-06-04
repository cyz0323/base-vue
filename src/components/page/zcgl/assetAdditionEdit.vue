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
                        <!--<el-input v-model="from.ATTRIBUTE30" placeholder="是否研发资产" class="text"></el-input>-->
                        <el-select v-model="from.ATTRIBUTE30" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.attribute30" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否安全设备">
                        <!--<el-input v-model="from.IS_SAFETY_DEVICE" placeholder="是否安全设备" class="text"></el-input>-->
                        <el-select v-model="from.IS_SAFETY_DEVICE" placeholder="请选择" clearable filterable :disabled="isDisabled">
                            <el-option v-for="item in selectLists.is_safety_device" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产类别">
                        <!--<el-input v-model="from.ASSET_TYPE" placeholder="资产类别" class="text"></el-input>-->
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
                        <el-input v-model="from.DATE_PLACED_IN_SERVICE" placeholder="启用日期" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="折旧/摊销起始日期">
                        <el-input v-model="from.PRORATE_DATE" placeholder="折旧/摊销起始日期" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="摊销规则">
                        <el-input v-model="from.PRORATE_RULE" placeholder="摊销规则" class="text" :disabled="isDisabled" readonly></el-input>
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
                        <el-input v-model="from.USE_YEARS" placeholder="残值" class="text" :disabled="isDisabled"></el-input>
                    </el-form-item>
                </span>
            </div>
            <el-form-item label="当前地理位置" >
                <el-input v-model="from.GEOGRAPHIC_LOCATION" placeholder="当前地理位置" class="maxWidth" :disabled="isDisabled"></el-input>
            </el-form-item>
            <div class="other-box">
                <span>
                    <el-form-item label="资产来源（增加方式）">
                        <!--<el-input v-model="from.ASSET_SOURCE" placeholder="资产来源（增加方式）"></el-input>-->
                        <el-select v-model="from.ASSET_SOURCE" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.assetSourceList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产性质">
                        <!--<el-input v-model="from.ASSET_NATURE" placeholder="资产性质"></el-input>-->
                        <el-select v-model="from.ASSET_NATURE" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.assetNatureList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产状态">
                        <!--<el-input v-model="from.ASSET_STATUS" placeholder="资产状态"></el-input>-->
                        <el-select v-model="from.ASSET_STATUS" placeholder="请选择" clearable filterable class="select" :disabled="isDisabled">
                            <el-option v-for="item in selectLists.asset_status" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
                    <el-collapse-item title="资产类别详情设置" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                    <el-table :data="from.distribution_table" border stripe tooltip-effect="dark">
                        <el-table-column type="index" width="50" label="行号"></el-table-column>
                        <el-table-column prop="UNITS_ASSIGNED" label="数量百分比">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.UNITS_ASSIGNED" @change="handlerIsNumber"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="GCC_SEGS" label="折旧分配账户">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.GCC_SEGS"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="RESPONSIBLE_DEPARTMENT" label="使用部门">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.USE_DEPT"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="USE_PERSON" label="使用人">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.USE_PERSON"></el-input>
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
                                <el-button @click="handlerdistrubutionAddClick(scope)" type="primary">添加</el-button>
                                <el-button @click="handlerdistrubutionDelClick(scope)" type="danger">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <template v-if="use_type > 1">
                    <el-tab-pane label="发票" name="second_ele">
                        <el-table :data="from.distribution_table" border stripe tooltip-effect="dark">
                            <el-table-column type="index" width="50" label="行号"></el-table-column>
                            <el-table-column prop="UNITS_ASSIGNED" label="发票编号">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.UNITS_ASSIGNED" @change="handlerIsNumber"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="GCC_SEGS" label="发票日期">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.GCC_SEGS"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="RESPONSIBLE_DEPARTMENT" label="发票金额">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.USE_DEPT"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="USE_PERSON" label="说明">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.USE_PERSON"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="USE_PERSON" label="创建人"></el-table-column>
                            <el-table-column prop="USE_PERSON" label="创建日期"></el-table-column>
                            <template v-if="use_type > 2">
                                <el-table-column prop="USE_PERSON" label="最后修改人"></el-table-column>
                                <el-table-column prop="USE_PERSON" label="最后修改日期"></el-table-column>
                            </template>
                            <el-table-column label="操作" width="145px">
                                <template slot-scope="scope">
                                    <el-button @click="handlerdistrubutionAddClick(scope)" type="primary">添加</el-button>
                                    <el-button @click="handlerdistrubutionDelClick(scope)" type="danger">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </template>
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
                                <el-select v-model="scope.row.file_type" placeholder="请选择" clearable @change="((val)=>{handleFileSelectChange(val,scope)})">
                                    <el-option v-for="item in fileupload_type" :key="item.code" :label="item.name" :value="item.code"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column prop="file_id" label="资源浏览">
                            <template slot-scope="scope">
                                <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-success="handleUpload" :on-change="handleChange"
                                           :file-list="scope.row.fileList" :list-type="scope.row.listType">
                                    <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </template>
                        </el-table-column>
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
    export default {
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
                //分配表格区域内容
                distribution_table: [
                    {
                        UNITS_ASSIGNED: 0,  //数量
                        GCC_SEGS: "",   //折旧分配账户
                        /*RESPONSIBLE_DEPARTMENT: "", //责任部门
                        ASSIGNED_TO: "",    //责任人*/
                        USE_PERSON: "",  //使用人
                        USE_DEPT: "",  //使用部门
                        CREATE_PERSON: "",  //创建人
                        CREATE_DATE: "",    //创建日期
                        LAST_MODIFIED_PERSON: "",   //最后一次修改人
                        LAST_MODIFIED_DATE: ""      //最后一次修改日期
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
                {value: 'zhinan',label: '指南',children: [
                    {value: 'shejiyuanze',label: '设计原则',children: [
                        {value: 'yizhi',label: '一致'},
                        {value: 'fankui',label: '反馈'},
                        {value: 'xiaolv',label: '效率'},
                        {value: 'kekong',label: '可控'}
                    ]},
                    {value: 'daohang',label: '导航',children: [
                        {value: 'cexiangdaohang',label: '侧向导航'},
                        {value: 'dingbudaohang',label: '顶部导航'}
                    ]}
                ]},
                {value: 'zujian',label: '组件',children: [
                    {value: 'basic',label: 'Basic',children: [
                        {value: 'layout',label: 'Layout 布局'},
                        {value: 'color',label: 'Color 色彩'},
                        {value: 'typography',label: 'Typography 字体'},
                        {value: 'icon',label: 'Icon 图标'},
                        {value: 'button',label: 'Button 按钮'}
                    ]},
                    {value: 'form',label: 'Form',children: [
                        {value: 'radio',label: 'Radio 单选框'},
                        {value: 'checkbox',label: 'Checkbox 多选框'},
                        {value: 'input',label: 'Input 输入框'},
                        {value: 'input-number',label: 'InputNumber 计数器'},
                        {value: 'select',label: 'Select 选择器'},
                        {value: 'cascader',label: 'Cascader 级联选择器'},
                        {value: 'switch',label: 'Switch 开关'},
                        {value: 'slider',label: 'Slider 滑块'},
                        {value: 'time-picker',label: 'TimePicker 时间选择器'},
                        {value: 'date-picker',label: 'DatePicker 日期选择器'},
                        {value: 'datetime-picker',label: 'DateTimePicker 日期时间选择器'},
                        {value: 'upload',label: 'Upload 上传'},
                        {value: 'rate',label: 'Rate 评分'},
                        {value: 'form',label: 'Form 表单'}
                    ]},
                    {value: 'data',label: 'Data',children: [
                        {value: 'table',label: 'Table 表格'},
                        {value: 'tag',label: 'Tag 标签'},
                        {value: 'progress',label: 'Progress 进度条'},
                        {value: 'tree',label: 'Tree 树形控件'},
                        {value: 'pagination',label: 'Pagination 分页'},
                        {value: 'badge',label: 'Badge 标记'}
                    ]},
                    {value: 'notice',label: 'Notice',children: [
                        {value: 'alert',label: 'Alert 警告'},
                        {value: 'loading',label: 'Loading 加载'},
                        {value: 'message',label: 'Message 消息提示'},
                        {value: 'message-box',label: 'MessageBox 弹框'},
                        {value: 'notification',label: 'Notification 通知'}
                    ]},
                    {value: 'navigation',label: 'Navigation',children: [
                        {value: 'menu',label: 'NavMenu 导航菜单'},
                        {value: 'tabs',label: 'Tabs 标签页'},
                        {value: 'breadcrumb',label: 'Breadcrumb 面包屑'},
                        {value: 'dropdown',label: 'Dropdown 下拉菜单'},
                        {value: 'steps',label: 'Steps 步骤条'}
                    ]},
                    {value: 'others',label: 'Others',children: [
                        {value: 'dialog',label: 'Dialog 对话框'},
                        {value: 'tooltip',label: 'Tooltip 文字提示'},
                        {value: 'popover',label: 'Popover 弹出框'},
                        {value: 'card',label: 'Card 卡片'},
                        {value: 'carousel',label: 'Carousel 走马灯'},
                        {value: 'collapse',label: 'Collapse 折叠面板'}
                    ]}
                ]},
                {value: 'ziyuan',label: '资源',children: [
                    {value: 'axure',label: 'Axure Components'},
                    {value: 'sketch',label: 'Sketch Templates'},
                    {value: 'jiaohu',label: '组件交互文档'}
                ]}
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
            //租赁表格数据
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
            };//租赁表格数据
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
            //发票表格参数
            let invoiceTable = [
                {INVOICE_CODE: "123", INVOICE_DATE: "2019-06-04", INVOICE_AMOUNT: "123"},
            ];
            return {
                activeName: "first_ele",
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
                invoice_table: invoiceTable,        //发票表格参数
                fileupload_table: fileuploadTable,//文件上传区域设定
                fileupload_type: fileuploadType,      //文件上传上传类型的指定
                options: optionsList
            }
        },
        created(){
            //下拉列表数据处理
            this.handlerLoadSelectLists();
            //创建人，创建日期赋值

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
                let data = { keys: ["assetBookList","organizationList"]};
                /*this.$my.post(this,this.$my.path_app+"/batch/searchList",data,function(data){
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
                });*/

            },
            //表单确认按钮的触发
            handlerClickSaveBtn(){
                console.log(this.from);
                /*this.$my.post(this,this.$my.path_app+"/asset/add",this.from,function(data){
                    console.log(data);
                });*/
            },
            //分配表格添加数据
            handlerdistrubutionAddClick(e){
                this.from.distribution_table.push({
                    UNITS_ASSIGNED: 0,  //数量
                    GCC_SEGS: "",   //折旧分配账户
                    RESPONSIBLE_DEPARTMENT: "", //责任部门
                    ASSIGNED_TO: "",    //责任人
                    USE_PERSON: ""  //使用人
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
            handleUpload(response, file, fileList){
                console.log(response);
                console.log(file);
                console.log(fileList);
            },
            handleFileSelectChange(e,scope){
                let data = this.fileupload_table,_index = scope.$index;
                if(e == "004")  this.fileupload_table[scope.$index].listType = "picture-card";
                else this.fileupload_table[scope.$index].listType = "text";
            },
            //级联选择器的change事件的绑定
            handleCascaderEvent(val){
                this.$message(val.toString());
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
    .upload-demo{width: 100px; height: 35px;}
    .select{width: 320px;}
</style>