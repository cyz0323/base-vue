<template>
    <div class="table">
        <!-- 基础部分 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 资产调拨查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- 顶部操作区域 -->
            <div class="handle-box">
                <el-select v-model="select_cate2" placeholder="调拨类型" class="handle-select mr10">
                    <el-option key="1" label="调出" value="调出"></el-option>
                    <el-option key="2" label="调入" value="调入"></el-option>
                </el-select>
                <el-select v-model="select_cate" placeholder="调拨范围" class="handle-select mr10">
                    <el-option key="1" label="内部调拨" value="内部调拨"></el-option>
                    <el-option key="2" label="外部调拨" value="外部调拨"></el-option>
                </el-select>
                <el-input v-model="col1" placeholder="调出账簿" class="handle-input mr10"></el-input>
                <el-input v-model="col9" placeholder="调入账簿" class="handle-input mr10"></el-input>
                <el-input v-model="col2" placeholder="资产编号" class="handle-input mr10"></el-input>
                <el-input v-model="col6" placeholder="资产类别" class="handle-input mr10"></el-input>
                <!--<el-input v-model="select_word" placeholder="地点" class="handle-input mr10"></el-input>-->
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <!-- 数据表格 -->
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="index" label="序号" sortable width="75"></el-table-column>
                <el-table-column prop="select_cate" label="调拨范围"></el-table-column>
                <el-table-column prop="select_cate2" label="调拨类型"></el-table-column>
                <el-table-column prop="col1" label="调出账簿" sortable width="120"></el-table-column>
                <el-table-column prop="col2" label="资产编码" width="120"></el-table-column>
                <el-table-column prop="col3" label="资产名称"></el-table-column>
                <el-table-column prop="col4" label="资产成本"></el-table-column>
                <el-table-column prop="col5" label="资产数量"></el-table-column>
                <el-table-column prop="col6" label="资产类别"></el-table-column>
                <el-table-column prop="col7" label="使用年限"></el-table-column>
                <el-table-column prop="col8" label="以折旧年限"></el-table-column>
                <el-table-column prop="col9" label="调入账簿"></el-table-column>
                <el-table-column prop="col10" label="调拨期间"></el-table-column>
                <el-table-column prop="col11" label="处理人"></el-table-column>
                <el-table-column prop="col12" label="处理时间"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-view" @click="handleEdit(scope.$index, scope.row)">详细详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="pageSize"></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="详细信息" :visible.sync="editVisible" width="65%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">返 回</el-button>
                <!--<el-button type="primary" @click="saveEdit">保存</el-button>-->
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'zcdbcx',
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
                delVisible: false,
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
            search() {
                this.is_search = true;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    name: item.name,
                    date: item.date,
                    address: item.address
                }
                this.editVisible = true;
            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 保存编辑
            saveEdit() {
                //this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                //this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
        width: 180px;
    }
</style>
