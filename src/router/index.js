import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/api/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/api/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/api/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/api/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/api/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/api/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/api/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/api/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/api/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/api/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/api/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/api/Permission.vue'], resolve),
                    meta: { title: '权限测试', }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/api/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/api/403.vue'], resolve),
                    meta: {title: '403'}
                },
                /* 自定义组件的封装 */
                {
                    path: '/select',
                    component: resolve => require(['../components/page/common/select.vue'], resolve),
                    meta: {title: '下拉组件'}
                },
                {
                    path: '/custom_select',
                    component: resolve => require(['../components/page/common/custom_select.vue'], resolve),
                    meta: {title: '复杂选择组件'}
                },

                /*资产添加
                {
                    path: '/zctj',
                    component: resolve => require(['../components/page/zcgl/zctj.vue'], resolve),
                    meta: {title: '资产添加'}
                },*/
                /* 资产调拨管理 */
                {
                    path: '/zcdbcx',
                    component: resolve => require(['../components/page/zcgl/zcdb/zcdbcx.vue'], resolve),
                    meta: {title: '资产调拨查询'}
                },
               {
                    path: '/nbzcdc',
                    component: resolve => require(['../components/page/zcgl/zcdb/nbzcdc.vue'], resolve),
                    meta: {title: '内部资产调出'}
                },
                {
                    path: '/nbzcdr',
                    component: resolve => require(['../components/page/zcgl/zcdb/nbzcdr.vue'], resolve),
                    meta: {title: '内部资产调入'}
                },
                {
                    path: '/wbzcdc',
                    component: resolve => require(['../components/page/zcgl/zcdb/wbzcdc.vue'], resolve),
                    meta: {title: '外部资产调出'}
                },
                {
                    path: '/wbzcdr',
                    component: resolve => require(['../components/page/zcgl/zcdb/wbzcdr.vue'], resolve),
                    meta: {title: '外部资产调入'}
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/api/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})