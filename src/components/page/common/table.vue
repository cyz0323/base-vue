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
                            1、利用import 对组件进行引入<br/>
                            2、在&lt;script&gt;中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
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
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col6", value: "邮编",display: false}
                ],
                data: [     //表格数据
                    {col1: 111,col2: 112,col3: 113,col4:114, col5: 115, col6: 116},
                    {col1: 121,col2: 122,col3: 123,col4:124, col5: 125, col6: 126},
                    {col1: 131,col2: 132,col3: 133,col4:134, col5: 135, col6: 136},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146}
                ],
                callback: {     //回调函数定义
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
                            1、利用import 对组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                            2、pagination：指定分页是否显示<br/>
                            3、针对数据参数分为两种格式：一种为传入请求地址进行内部调用，二位传入数据直接做数据渲染（二优先级高于一）<br/>
                            4、操作按钮的颜色显示参考按钮组的样式定义，指定type类型即可，参数如：defalut（默认），primary（主要按钮）、success（成功按钮）、info（信息按钮）、warning（警告按钮）、danger（危险按钮）
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-table :data="tableData2" :pagination="showPagination"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-table :data="tableData2" :pagination="showPagination""&gt;&lt;/y-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            showPagination: true,   //分页显示与否默认显示
            tableData2: {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                isSort: true,   //是否支持排序
                isCheck: true,  //是否存在checkbox
                pageSize: 10,   //每页显示记录条数
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col5", value: "邮编",display: false}
                ],
                rowBtns: [      //局部按钮
                    {name: "编辑", fn: this.handleEdit,type: "default"},
                    {name: "删除", fn: this.handleDelete, type:"danger"}
                ],
                externalBtns: [     //全局按钮
                    {name: "全部删除", fn: this.handleDeleteAll, type: "primary"}
                ]
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
                            1、利用import 对组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-table :data="tableData3"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-table :data="tableData2"&gt;&lt;/y-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            showPagination: true,   //分页显示与否默认显示
            tableData3: {
                openConent: true,
                header: [
                    {key: "id",value: "商品id",isShow: true},
                    {key: "name",value: "名称",isShow: true},
                    {key: "category",value: "描述",isShow: false},
                    {key: "desc",value: "产地",isShow: false},
                    {key: "address", value: "地址",isShow: true},
                    {key: "shop",value: "店名",isShow: true},
                    {key: "shopId",value: "商品编号",isShow: false},
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
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************表格参数属性描述********************************************** -->
                <el-tab-pane label="自定义表格参数说明" name="four-code">
                    <div class="demoModel">
                        <span class="head-title">详细参数描述</span>
                        <p class="title">
                            针对自定义表格的参数进行详细的描述:
                            1、data：标签属性，定义表格的表头、数据、样式等信息，详情如下data表格参数描述
                            2、pagination：分页的指定，用于分页的开启和关闭，参数不给定默认分页不现实，参数 true / false
                        </p>
                        <span class="head-title">data参数描述：</span>
                        <div class="ele">
                            <y-table :data="tableData4"></y-table>
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
                showPagination: true,   //分页显示与否默认显示
                tableData: {
                    header: [       //表头定义
                        {key: "col1",value: "日期"},
                        {key: "col2",value: "姓名"},
                        {key: "col3", value: "省份"},
                        {key: "col4",value: "时区"},
                        {key: "col5",value: "地址"},
                        {key: "col6", value: "邮编",display: false}
                    ],
                    data: [
                        {col1: 111,col2: 112,col3: 113,col4:114, col5: 115, col6: 116},
                        {col1: 121,col2: 122,col3: 123,col4:124, col5: 125, col6: 126},
                        {col1: 131,col2: 132,col3: 133,col4:134, col5: 135, col6: 136},
                        {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                        {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                        {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146}
                    ],
                    rowCallback: this.handlerClickRows
                },
                tableData2: {
                    url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                    isSort: true,   //是否支持排序
                    isCheck: true,  //是否存在checkbox
                    header: [       //表头定义
                        {key: "col1",value: "日期"},
                        {key: "col2",value: "姓名"},
                        {key: "col3", value: "省份"},
                        {key: "col4",value: "时区"},
                        {key: "col5",value: "地址"},
                        {key: "col5", value: "邮编",display: false}
                    ],
                    rowBtns: [      //局部按钮
                        {name: "编辑", fn: this.handleEdit,type: "default"},
                        {name: "删除", fn: this.handleDelete, type:"danger"}
                    ],
                    externalBtns: [     //全局按钮
                        {name: "全部删除", fn: this.handleDeleteAll, type: "primary"}
                    ]
                },
                tableData3: {
                    openConent: true,
                    header: [
                        {key: "id",value: "商品id",isShow: true},
                        {key: "name",value: "名称",isShow: true},
                        {key: "category",value: "描述",isShow: false},
                        {key: "desc",value: "产地",isShow: false},
                        {key: "address", value: "地址",isShow: true},
                        {key: "shop",value: "店名",isShow: true},
                        {key: "shopId",value: "商品编号",isShow: false},
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
                },
                tableData4: {
                    pageSize: 100,
                    header: [
                        {key: "properties",value: "属性"},
                        {key: "type", value: "类型"},
                        {key: "paramter",value: "例子"},
                        {key: "description",value: "说明"},
                    ],
                    data: [
                        {properties: "header",type: "[]", paramter: "[{key: 'name', value: '姓名' },{key: 'age', value: '年龄'} ...]",description: "对应表格的表头的定义,分为两种形式，一种为自定义参数，即在参数列表中" +
                                "自己定义header 的内容，若通过后台传递了header的参数则可以不进行定义（服务端传参时数据格式必须为： { message: { count: 20, list: [], " +
                                "pageCurrent: 1, pageSize: 10 ,tableHeader: []}, status: 0 }）" },
                        {properties: "data", type: "[]", paramter: "[{name: 'zhangsan', age: 11 },{name: 'lisi', age: 12},....]", description: "表格数据，表格渲染后显示的内容，若同url 参数一起出现则，以data属性为准，不进行数据请求的操作"},
                        {properties: "rowCallback", type: "function", paramter: "this.handlerRowClick", description: "表格行的点击事件，当定义当前属性时，给表格每行绑定click事件，" +
                                "this.handlerRowClick为当前上下环境中methods中定义的方法，但行点击的事件仅仅适用与简单的表格，若存在行内按钮组（rowBtns）则当前点击事件失效。"},
                        {properties: "paginationClickEvnent", type: "function", paramter: "this.paginationClickEvnent", description: "分页的点击事件的回调，仅仅适用与自定义data数据时，打开分页时针对分页的操作，" +
                                "若不指定data 参数而是通过url的方式进行请求数据，则当前参数可以不使用，paginationClickEvnent在methods中进行定义"},
                        {properties: "url", type: "string", paramter: "http://localhost8080/", description: "当前数据的请求路径的指定，若使用当前内容时则不能对data属性进行定义，否则当前属性无效。" +
                                " 需注意：请求的参数格式必须为如下：{ message: { count: 20, list: [], pageCurrent: 1, pageSize: 10 }, status: 0 }）"},
                        {properties: "pageNo", type: "number", paramter: "1", description: "当前页标，若以指定url请求则不需设置"},
                        {properties: "count", type: "number", paramter: "100", description: "数据总长度，若以指定url格式渲染则不需设置"},
                        {properties: "pageSize", type: "number", paramter: "10", description: "页长参数，若以指定url格式渲染则不需要设置"},
                        {properties: "isSort", type: "boolean", paramter: "true / false", description: "是否开启排序功能"},
                        {properties: "isCheck", type: "boolean", paramter: "true / false", description: "是否启用复选功能"},
                        {properties: "rowBtns", type: "[]", paramter: "[" +
                                "                    {name: '编辑‘, fn: this.handleEdit,type: 'default'}," +
                                "                    {name: '删除', fn: this.handleDelete, type:'danger'}" +
                                "                ]", description: "表格行操作按钮，若指定当前参数则，rowCallback 属性失效 ( 暂时未处理事件冒泡 )"},
                        {properties: "externalBtns", type: "[]", paramter: "10", description: "表格全局操作按钮，若指定当前参数，则默认会打开isCheck 属性"},
                        {properties: "openConent", type: "boolean", paramter: "true/false", description: "是否开启表格行折叠功能"},
                    ]
                }
            }
        },
        methods: {
            handlerClickRows(row, column, event){
                this.$message("第"+row._index.toString()+"行，行数据为："+row)
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
            },
            //自定义分页事件
            handlerClickPagination(e,obj){
                obj.pageNo = e;
                obj.tableData = [{col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},];
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