<template>
    <el-dialog title="资产新增" :visible.sync="display" width="80%" top="7vh" :before-close="handleClose">
        <!--表单内容定义-->
        <el-form :model="from" class="demo-form-inline" label-width="130px">
            <!--基础部分-->
            <div class="default-box">
                <span>
                    <el-form-item label="资产账簿">
                        <el-input v-model="from.col1" placeholder="资产账簿" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="权属单位">
                        <el-input v-model="from.col1" placeholder="权属单位" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用单位">
                        <el-input v-model="from.col1" placeholder="使用单位" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产编号">
                        <el-input v-model="from.col1" placeholder="资产编号" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产名称">
                        <el-input v-model="from.col1" placeholder="资产名称" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="财务编号">
                        <el-input v-model="from.col1" placeholder="财务编号" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="当前成本">
                        <el-input v-model="from.col1" placeholder="当前成本" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="数量">
                        <el-input v-model="from.col1" placeholder="数量" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="计量单位">
                        <el-input v-model="from.col1" placeholder="计量单位" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="原始成本">
                        <el-input v-model="from.col1" placeholder="原始成本" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否研发资产">
                        <el-input v-model="from.col1" placeholder="是否研发资产" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="是否安全设备">
                        <el-input v-model="from.col1" placeholder="是否安全设备" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产类别">
                        <el-input v-model="from.col1" placeholder="资产类别" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="关键字">
                        <el-input v-model="from.col1" placeholder="关键字" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="地点">
                        <el-input v-model="from.col1" placeholder="地点" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="启用日期">
                        <el-input v-model="from.col1" placeholder="启用日期" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="折旧/摊销起始日期">
                        <el-input v-model="from.col1" placeholder="折旧/摊销起始日期" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="摊销规则">
                        <el-input v-model="from.col1" placeholder="摊销规则" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="使用月数">
                        <el-input v-model="from.col1" placeholder="使用月数" class="text"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="已使用年限">
                        <el-input v-model="from.col1" placeholder="已使用年限" class="text"></el-input>
                    </el-form-item>
                </span>
            </div>
            <el-form-item label="当前地理位置" >
                <el-input v-model="from.col1" placeholder="当前地理位置" class="maxWidth"></el-input>
            </el-form-item>
            <div class="other-box">
                <span>
                    <el-form-item label="资产来源（增加方式）">
                        <el-input v-model="from.col1" placeholder="资产来源（增加方式）"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产性质">
                        <el-input v-model="from.col1" placeholder="资产性质"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="资产状态">
                        <el-input v-model="from.col1" placeholder="资产状态"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="供应商">
                        <el-input v-model="from.col1" placeholder="供应商"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="制造商">
                        <el-input v-model="from.col1" placeholder="制造商"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="保险单编号">
                        <el-input v-model="from.col1" placeholder="保险单编号"></el-input>
                    </el-form-item>
                </span>
            </div>
            <div class="other-box">
                <span>
                    <el-form-item label="创建人">
                        <el-input v-model="from.col1" placeholder="创建人"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改人">
                        <el-input v-model="from.col1" placeholder="最后修改人"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="创建日期">
                        <el-input v-model="from.col1" placeholder="创建日期"></el-input>
                    </el-form-item>
                </span>
                <span>
                    <el-form-item label="最后修改日期">
                        <el-input v-model="from.col1" placeholder="最后修改日期"></el-input>
                    </el-form-item>
                </span>
            </div>
            <!-- 资产分配数据表 -->
            <el-table :data="tableData" class="tForm">
                <el-table-column type="index" width="50" label="行号"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="year" label="数量" width="180"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="name" label="拆旧分配账户" width="200"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="address" label="责任部门"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="address" label="责任人"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="address" label="使用人"><el-input v-model="from.col1" placeholder="创建日期"></el-input></el-table-column>
                <el-table-column property="address" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="">添加</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <!-- 表单操作按钮 -->
        <span slot="footer" class="dialog-footer">
            <el-button @click="display = false">取 消</el-button>
            <el-button type="primary" @click="handlerClickSaveBtn">保 存</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        data(){
            let fromList = {user: '',col1: "",col2: "",col6: "",col7: "",col9: "",col12: ""
                
            };
            return {
                parentObj: this.parent,
                display: false,
                from: fromList,
                tableData: []
            }
        },
        created(){

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
            //表单确认按钮的触发
            handlerClickSaveBtn(){
                this.$message("确认按钮点击触发");
            }
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