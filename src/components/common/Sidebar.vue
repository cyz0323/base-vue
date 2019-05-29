<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <!--<template v-if="item.display">-->
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                            </template>
                            <template v-for="subItem in item.subs">
                                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                    <template slot="title">{{ subItem.title }}</template>
                                    <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.index">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                <!--</template>-->
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            var userinfo = JSON.parse(localStorage.getItem("userinfo"));
            var _fl = userinfo?userinfo.currentDuty.functionList : [];

            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页',
                        display: _fl.indexOf('dashboard')> -1
                    },
                    {
                        icon: "el-icon-lx-cascades",
                        index: "zcgl",
                        title: "资产管理",
                        display: _fl.indexOf('zcgl')> -1,
                        subs: [
                            {index: "zctj", title: "资产添加",display: _fl.indexOf('zctj') > -1},
                            {index: "zcdb",title: "资产调拨",display: _fl.indexOf('zcdb') > -1,subs:[
                                    {index: "zcdbcx",title: "资产调拨查询",display: _fl.indexOf('zcdbcx')> -1},
                                    {index: 'nbzcdc',title: "内部资产调出",display: _fl.indexOf('nbzcdc')> -1},
                                    {index: 'nbzcdr',title: "内部资产调入",display: _fl.indexOf('nbzcdr')> -1},
                                    {index: 'wbzcdc',title: "外部资产调出",display: _fl.indexOf('wbzcdc')> -1},
                                    {index: "wbzcdr",title: "外部资产调入",display: _fl.indexOf('wbzcdr')> -1}
                                ]
                            },

                        ]
                    },
                    {
                        icon: "el-icon-lx-copy",
                        index: 'api',
                        title: "Element API",
                        subs: [
                            {index: 'table',title: '基础表格'},
                            {index: 'tabs',title: 'tab选项卡'},
                            {index: 'icon',title: '自定义图标'},
                            {index: 'charts',title: 'schart图表'},
                            {index: '6',title: '拖拽组件',
                                subs: [
                                    {index: 'drag',title: '拖拽列表',},
                                    {index: 'dialog', title: '拖拽弹框',}
                                ]
                            },
                            {index: '3',title: '表单相关',
                                subs: [
                                    {index: 'form',title: '基本表单'},
                                    {index: 'editor',title: '富文本编辑器'},
                                    {index: 'markdown',title: 'markdown编辑器'},
                                    {index: 'upload',title: '文件上传'}
                                ]
                            },
                            {index: '7',title: '错误处理',
                                subs: [
                                    {index: 'permission',title: '权限测试'},
                                    {index: '404',title: '404页面'}
                                ]
                            }
                        ]
                    },
                    {
                        icon: "el-icon-s-grid",
                        index: "custom",
                        title: "Custom Component",
                        subs: [
                            {index: "from", title: "表单相关",
                                subs: [
                                    {index: 'input',title: '输入框'},
                                    {index: 'select',title: '定义下拉组件'},
                                    {index: "dateTimePicker",title: "时间日期组件"},
                                    {index: "cascader ",title: "级联选择器"},
                                    {index: "fileUpload", title: "资源上传"},
                                ]
                            },
                            {index: 'tree',title: '树形控件'},
                            {index: "showDialog", title: "Dialog 弹层"},
                            {index: "customTable",title: "定义表格"},
                            {index: "customMsg",title: "消息提示窗"}
                        ]
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{display: block;position: absolute;left: 0;top: 70px;bottom:0;overflow-y: scroll;}
    .sidebar::-webkit-scrollbar{ width: 0; }
    .sidebar-el-menu:not(.el-menu--collapse){width: 250px;}
    .sidebar > ul {height:100%;}
</style>
