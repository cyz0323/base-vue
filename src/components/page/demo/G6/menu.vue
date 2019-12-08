<template>
    <div>
        <ul v-for="item in menu_list" class="G6-menu-list">
            <li><a @click="handleItemClick(item.type)">{{item.label}}</a></li>
        </ul>
    </div>
</template>

<script>
import G6 from '@antv/g6';
export default{
    name: 'customTable',
    data(){
        return {
            menu_list: [
                {label: "选择",icon: "", type: "pointer"},
                {label: "四边形",icon: "", type: "polygon"},
                {label: "椭圆",icon: "", type: "pie"},
                {label: "连线",icon: "", type: "line"}
            ],
        }
    },
    methods: {
        /*
         * 操作菜单点击事件的触发 */ 
        handleItemClick(e){
            switch(e){
                case 'pointer':
                    this.handleClickPointer();
                    break;
                case 'pie':
                    this.handleClickPie();
                    break;
                case 'polygon':
                    this.handleClickPolygon();
                    break;
                case 'line':
                    this.handleClickLine();
                    break;
            }
        },
        //选择事件的触发
        handleClickPointer(){
            console.log("选择按钮的触发");
        },
        //圆形点击
        handleClickPie(){
            console.log("圆形按钮点击");
        },
        //多边形点击触发
        handleClickPolygon(){
            console.log("多边形按钮点击");
        },
        //直线的点击触发
        handleClickLine(){
            console.log("直线按钮点击");
        },
    }
}
</script>

<style scoped>
/* 菜单条列表定义 */
.G6-menu-list{
    width: 100%;
    height: 100%;
    list-style-type: none;
}
.G6-menu-list>li{
    display: inline-block;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    font-size: 12px;
}
.G6-menu-list>li>a{
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
}
</style>