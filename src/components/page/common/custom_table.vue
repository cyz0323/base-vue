<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>数据表格</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- *********************************************简单数据表格********************************************** -->
                <el-tab-pane label="简单数据表格" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            ------
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <y-table name="table1" :data="tableData"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                -----
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>

</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************复杂表头数据表格********************************************** -->
                <el-tab-pane label="复杂表头格式" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            --------
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            -------
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                ------
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************复合数据表格********************************************** -->
                <el-tab-pane label="复杂表头格式" name="thread-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            --------
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            -------
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                ------
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>
</template>

<script>
    import yTable from './components/y-table';
    export default{
        name: 'customTable',
        components: {yTable},
        data(){
            return {
                title: "自定义数据表格",
                activeName: 'first-ele',
                tableCounts: 40,
                pageNo: 1,
                tableData: {
                    pageCount: 40,
                    pageSize: 10,
                    pageNo: 1,
                    data: [
                        {
                            index: '1',
                            date: '2016-05-03',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        },{
                            index: '2',
                            date: '2016-05-02',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }, {
                            index: '3',
                            date: '2016-05-04',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }, {
                            index: '4',
                            date: '2016-05-01',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }, {
                            index: '5',
                            date: '2016-05-08',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }, {
                            index: '6',
                            date: '2016-05-06',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }, {
                            index: '7',
                            date: '2016-05-07',
                            name: '王小虎',
                            province: '上海',
                            city: '普陀区',
                            address: '上海市普陀区金沙江路 1518 弄',
                            zip: 200333
                        }
                    ]
                }
            }
        },
        created(){
            ////console.log(this.$my.hasUser());

        },
        methods:{
            handleClick(tab, event) {
                //console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .text {font-size: 14px;}
    .item {margin-bottom: 18px; }
    .clearfix:after {display: table;content: "";}
    .clearfix:after {clear: both}
    .box-card { width: 100%; }
    .demoModel{width: 98%;margin: 0 auto;}
    .title{/*text-indent: 1em;*/ padding-left: 10px;background: #efefef;color: #666;margin-bottom: 10px;padding: 10px;border-radius: 5px;box-shadow: 5px 5px 5px #eee;}
    .head-title{font-size: 14px;font-weight: bold;color: #555;display: block;margin-top: 10px;margin-bottom: 10px;}
    .code{padding: 10px; }
    .code-msg{float: right;margin-right: 10px;margin-top: 10px;color: #333;}
    .code-main{width: 98%;background: #f8f8f8;margin-bottom: 20px;border-raidus: 5px;box-shadow: 0 0 5px #eee;padding: 20px;padding-top: 30px;}
</style>