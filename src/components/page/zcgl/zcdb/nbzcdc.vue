<template>
    <div class="table">
        <!-- 基础部分 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 内部祖产调出</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- 顶部操作区域 -->
            <div class="handle-box">
                <el-input v-model="col1" placeholder="资产编号" class="handle-input mr10"></el-input>
                <el-input v-model="col9" placeholder="资产类别" class="handle-input mr10"></el-input>
                <el-input v-model="col2" placeholder="地点" class="handle-input mr10"></el-input>
                <el-input v-model="col6" placeholder="责任部门" class="handle-input mr10"></el-input>
                <el-input v-model="col6" placeholder="责任人" class="handle-input mr10"></el-input>
                <el-input v-model="col6" placeholder="使用人" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <!-- 数据表格 -->
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="index" label="序号" sortable width="75"></el-table-column>
                <el-table-column prop="col1" label="资产账簿" sortable width="120"></el-table-column>
                <el-table-column prop="col2" label="资产编码" width="120"></el-table-column>
                <el-table-column prop="col3" label="资产名称"></el-table-column>
                <el-table-column prop="col4" label="资产成本"></el-table-column>
                <el-table-column prop="col5" label="资产数量"></el-table-column>
                <el-table-column prop="col6" label="资产类别"></el-table-column>
                <el-table-column prop="col7" label="使用年限"></el-table-column>
                <el-table-column prop="col8" label="已折旧年限"></el-table-column>
                <el-table-column prop="col10" label="调拨期间"></el-table-column>
                <el-table-column prop="col11" label="处理人"></el-table-column>
                <el-table-column prop="col12" label="处理时间" width="160"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-view" @click="handleEdit(scope.$index)">详细详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页相关-->
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="pageSize"></el-pagination>
            </div>
            <!--操作补充-->
            <div>
                <el-button-group>
                    <el-button type="primary" @click="isShowDbView = true;dbVisabled = true">调拨</el-button>
                    <el-button type="primary" @click="$message.success('提交成功！')">提交财务审核</el-button>
                    <div style="margin-left: 280px;">
                        调拨数量： <el-input placeholder="调拨数量" class="handle-input mr10" ></el-input>
                    </div>
                </el-button-group>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="详细信息" :visible.sync="editVisible" width="65%">
            <div>
                <zctjedit></zctjedit>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">返 回</el-button>
            </span>
        </el-dialog>
        <!-- 调拨操作 -->
        <el-dialog title="调拨操作" :visible.sync="dbVisabled" width="65%" center>
            <div>
                <zcdbedit v-if="isShowDbView" :entitys="multipleSelection"></zcdbedit>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dbSave(-1)">取 消</el-button>
                <el-button type="primary" @click="dbSave">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import zctjedit from '../zctjedit'
    import zcdbedit from './zcdbedit';
    export default {
        name: 'zcdbcx',
        components: {zcdbedit,zctjedit},
        data() {
            return {
                url: 'http://localhost:8888/zcgl/xc',            //请求地址
                tableData: [],      //表格数据
                cur_page: 1,        //页标
                pageSize: 0,        //数据总长度
                showSize: 10,       //页数据长度
                multipleSelection: [],
                select_cate: '',        //调拨范围
                select_cate2: '',       //调拨类型
                col1: '',               //调出账簿
                col9: '',               //调入账簿
                col2: '',               //资产编号
                col6: '',               //资产类别
                del_list: [],
                is_search: false,
                editVisible: false,
                dbVisabled: false,
                dbEntity: null,
                isShowDbView: false,
                form: {                     //编辑框表单设置
                    index: '',
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                //初始化表格数据
                return this.tableData.filter((d) => {
                    //判断参数是否存在
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.index === this.del_list[i].index) {
                            is_del = true;
                            break;
                        }
                    }
                    //针对验证的设置
                    if (!is_del) {
                        if (d.col1.indexOf(this.col1) > -1 && d.col2.indexOf(this.col2) > -1 && d.col6.indexOf(this.col6) > -1 &&
                            d.col9.indexOf(this.col9) > -1 && d.select_cate.indexOf(this.select_cate) > -1 && d.select_cate2.indexOf(this.select_cate2) > -1 ) {
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            // 表格数据获取
            getData() {
                this.$axios.post(this.url,{showSize: this.showSize,pageTo: this.cur_page}).then((res) => {
                    let _index = 0;
                    if(res.data.code == 1){
                        this.tableData = res.data.data;
                        _index = res.data.pageSize;
                    }else{
                        this.$message('检索异常！');
                    }
                    this.pageSize = _index;
                })
            },
            search() {  //顶部检索按钮事件
                this.is_search = true;
            },
            handleEdit(index) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    name: item.name,
                    date: item.date,
                    address: item.address
                }
                this.editVisible = true;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            dbSave(e){   //调拨数据的保存
                if(e != -1){
                    this.$message.success("操作成功！");
                }
                this.dbVisabled = false;
                this.isShowDbView = false;
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .mr10{
        margin-right: 10px;
        width: 180px;
    }
</style>
