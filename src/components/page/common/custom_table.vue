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
                            针对简单表的使用描述:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                            注：如果页面内需显示多个表格需import多次，同表单内下拉组件的定义一样
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <y-table :data="tableData"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-table :data="tableData"&gt;&lt;/y-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
import yTable from './components/y-table';
export default{
    components: {yTable},
    data(){
        return {
            title: "自定义数据表格",
            activeName: 'first-ele',
            tableData: {
                pageCount: 41,  //记录总数
                pageNo: 1,  //当前页数
                isSort: true,   //是否支持排序
                data: [],   //表格数据
                callback: {
                    currentChange: function(e){console.log(e);},                 //分页参数发生改变触发
                    prevClick: function(e){console.log("外上一页："+e);},        //分页上一页点击触发
                    nextClick: function(e){console.log("外下一页："+e); }        //分页下一页点击触发
                }
            },
        }
    }
}
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
                tableData: {
                    pageCount: 41,  //记录总数
                    pageNo: 1,  //当前页数
                    isSort: true,   //是否支持排序
                    data: [
                        {index: '1',date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
                        {index: '2',date: '2016-05-02',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
                        {index: '3',date: '2016-05-04',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
                        {index: '4',date: '2016-05-01',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
                        {index: '5',date: '2016-05-08',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
                        {index: '6',date: '2016-05-06',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
                        {index: '7',date: '2016-05-07',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
                        {index: '8',date: '2016-05-07',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
                        {index: '9',date: '2016-05-07',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
                        {index: '10',date: '2016-05-07',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333}
                    ],
                    callback: {
                        currentChange: function(e){console.log(e);},
                        prevClick: function(e){console.log("外上一页："+e);},
                        nextClick: function(e){console.log("外下一页："+e); }
                    }
                },
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