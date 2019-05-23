<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>复杂选择组件</span>
        </div>
        <div class="text item">
            <div class="demoModel">
                <span class="head-title">描述：</span>
                <p class="title">
                    针对简单的下拉选择框，只需按照固定的格式进行调用即操作如下描述:<br/>
                    1、利用import 对下拉组件进行引入<br/>
                    2、在script 中对引入的组件进行定义<br/>
                    3、在需要使用下拉的地方引入定义的标签<br/>
                    参数说明：<br/>

                </p>
                <span class="head-title">样例：</span>
                <div class="ele" style="padding-left: 30px;">
                    <y-check-select></y-check-select>
                </div>
                <span class="head-title">代码：</span>
                <div class="code">
                    <span class="code-msg">html</span>
                    <div class="code-main">
                        aaa
                    </div>
                    <span class="code-msg">script</span>
                    <div class="code-main">
<pre>
    import yselect from 'src/components/page/common/components/y-check-select';
    export default {
        components: {   //定义组件
            yselect
        },
        data(){
            return {
                refOptions: [       //下拉组件数据
                    {key: "col1", value: "列1"},
                    {key: "col2", value: "列2"},
                    {key: "col3", value: "列3"}
                ],
                enableValue: "col1"     //下拉默认参数指定
            }
        }
    }
</pre>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
    import yCheckSelect from './components/y-check-select';
    export default {
        name: 'setselect',
        components: {
            yCheckSelect
        },
        data(){
            return {
                activeName: 'first-ele',

            }
        },
        methods:{

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