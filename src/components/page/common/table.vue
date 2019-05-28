<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>数据表格</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
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
export default{
    data(){
        return {
            tableData: {
                url: "http://localhost:8888/zcgl/xc",       //数据请求地址
                pageSize: 10,   //行数设置
                isSort: true,   //是否支持排序
                //表头定义
                header: [
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col5", value: "邮编"}
                ],
                data: [],       //表格数据对象
                //回调方法的定义
                callback: {
                    //当前行的点击回调
                    rowClick: this.handlerClickRows
                }
            },
        }
    },
    methods: {
        //表格点击回调方法的定义
        handlerClickRows(row, column, event){
            this.$message(column.toString())
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************带操作按钮的表格********************************************** -->
                <el-tab-pane label="带操作按钮的表格" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            针对简单表的使用描述:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                            2、操作按钮的颜色显示参考按钮组的样式定义，指定type类型即可，参数如：defalut（默认），primary（主要按钮）、success（成功按钮）、info（信息按钮）、warning（警告按钮）、danger（危险按钮）
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-btns-table :data="tableData2"></y-btns-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-btns-table :data="tableData2"&gt;&lt;/y-btns-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            tableData2: {
                url: "http://localhost:8888/zcgl/xc",       //数据请求地址
                pageSize: 10,   //每页条数
                isSort: true,   //是否支持排序
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col5", value: "邮编"}
                ],
                rowBtns: [      //当前行的操作按钮定义
                    {name: "编辑", fn: this.handleEdit,type: "default"},
                    {name: "删除", fn: this.handleDelete, type:"danger"}
                ],
                externalBtns: [     //表格全局操作按钮的定义
                    {name: "全部删除", fn: this.handleDeleteAll, type: "danger"}
                ],
                callback: {
                    rowClick: this.handlerClickRows
                }
            }
        }
    },
    methods: {
        //单行编辑按钮的触发，index：当前行下标以0开始，row：当前行的数据
        handleEdit(index, row) {
            console.log(row);
        },
        //单行删除按钮的触发，index：当前行的下标以0开始，row：当前行的数据
        handleDelete(index, row) {
            console.log(row);
        },
        //全部删除按钮事件定义，datas：返回复选的所有行的数据
        handleDeleteAll(datas){
            console.log(datas);
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************展开行的表格********************************************** -->
                <el-tab-pane label="展开行表格" name="thread-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            针对简单表的使用描述:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-tabledata :data="tableData3"></y-tabledata>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-tabledata :data="tableData2"&gt;&lt;/y-tabledata&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            tableData3: {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                pageSize: 10,
                isSort: true,   //是否支持排序
                header: [
                    {key: "id",value: "商品id",isShow: true},
                    {key: "name",value: "名称",isShow: true},
                    {key: "category",value: "描述",isShow: false},
                    {key: "desc",value: "产地",isShow: false},
                    {key: "address", value: "地址",isShow: true},
                    {key: "shop",value: "店名",isShow: true},
                    {key: "shopId",value: "商品编号",isShow: false},
                ],
                rowBtns: [
                    {name: "编辑", fn: this.handleEdit,type: "default"},
                    {name: "删除", fn: this.handleDelete, type:"danger"}
                ],
                data: [
                    {id: '12987122',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987123',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987125',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987126',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }
                ]
            }
        }
    },
    methods: {
        //单行编辑按钮的触发，index：当前行下表以0开始，row：当前行的数据
        handleEdit(index, row) {
            console.log(row);
        },
        //单行删除按钮的触发，index：当前行的下表以0开始，row：当前行的数据
        handleDelete(index, row) {
            console.log(row);
        }
    }
}
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
    export default{
        name: 'customTable',
        data(){
            return {
                title: "自定义数据表格",
                activeName: 'first-ele',
                tableData: {
                    url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                    pageSize: 10,
                    isSort: true,   //是否支持排序
                    header: [
                        {key: "col1",value: "日期"},
                        {key: "col2",value: "姓名"},
                        {key: "col3", value: "省份"},
                        {key: "col4",value: "时区"},
                        {key: "col5",value: "地址"},
                        {key: "col5", value: "邮编"}
                    ],
                    callback: {
                        rowClick: this.handlerClickRows
                    }
                },
                tableData2: {
                    url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                    pageSize: 10,
                    isSort: true,   //是否支持排序
                    header: [
                        {key: "col1",value: "日期"},
                        {key: "col2",value: "姓名"},
                        {key: "col3", value: "省份"},
                        {key: "col4",value: "时区"},
                        {key: "col5",value: "地址"},
                        {key: "col5", value: "邮编"}
                    ],
                    rowBtns: [
                        {name: "编辑", fn: this.handleEdit,type: "default"},
                        {name: "删除", fn: this.handleDelete, type:"danger"}
                    ],
                    externalBtns: [
                        {name: "全部删除", fn: this.handleDeleteAll, type: "danger"}
                    ],
                    callback: {
                        rowClick: this.handlerClickRows
                    }
                },
                tableData3: {
                    url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                    pageSize: 10,
                    isSort: true,   //是否支持排序
                    header: [
                        {key: "id",value: "商品id",isShow: true},
                        {key: "name",value: "名称",isShow: true},
                        {key: "category",value: "描述",isShow: false},
                        {key: "desc",value: "产地",isShow: false},
                        {key: "address", value: "地址",isShow: true},
                        {key: "shop",value: "店名",isShow: true},
                        {key: "shopId",value: "商品编号",isShow: false},
                    ],
                    rowBtns: [
                        {name: "编辑", fn: this.handleEdit,type: "default"},
                        {name: "删除", fn: this.handleDelete, type:"danger"}
                    ],
                    data: [
                        {id: '12987122',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                            address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                        }, {
                            id: '12987123',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                            address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                        }, {
                            id: '12987125',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                            address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                        }, {
                            id: '12987126',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                            address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                        }
                    ],
                    callback: {
                        rowClick: this.handlerClickRows
                    }
                }
            }
        },
        methods: {
            handlerClickRows(row, column, event){
                console.log(column);
                console.log(row);
                console.log(event);
            },
            //单行编辑按钮的触发，index：当前行下表以0开始，row：当前行的数据
            handleEdit(index, row) {
                console.log(row);
            },
            //单行删除按钮的触发，index：当前行的下表以0开始，row：当前行的数据
            handleDelete(index, row) {
                console.log(row);
            },
            //全部删除按钮事件定义，datas：返回复选的所有行的数据
            handleDeleteAll(datas){
                console.log(datas);
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