<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>时间日期组件</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- *********************************************时间组件********************************************** -->
                <el-tab-pane label="时间组件" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">

                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">

                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">

                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>

</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************日期组件********************************************** -->
                <el-tab-pane label="日期组件" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">

                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">

                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">

                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>

</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************时间日期组件********************************************** -->
                <el-tab-pane label="时间日期" name="second-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">

                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">

                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">

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
    export default {
        name: 'setselect',
        data(){
            return {
                activeName: 'first-ele',

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