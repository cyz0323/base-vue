<template>
    <el-card class="box-card" style="height: 100%">
        <div id="mountNode"></div>
    </el-card>
</template>

<script>
import G6 from '@antv/g6';
export default{
    name: 'customTable',
    data(){
        return {
          graph: null,
          initData: {
            // 点集
            nodes: [
              {id: 'node1', x: 100, y: 200, label: '起始点',groupId: "group1"},
              {id: 'node2', x: 300, y: 200, label: '目标点',groupId: "group1"},
              {id: 'node3', x: 500, y: 200, label: '目标点',groupId: "group2"},
              {id: 'node4', x: 700, y: 200, label: '目标点',groupId: "group2"}
            ],
            // 边集
            edges: [
              {
                source: 'node1',  // 起始点 id
                target: 'node2',  // 目标点 id
                label: '我是连线1'   // 边的文本
              },
              {
                source: 'node2',  // 起始点 id
                target: 'node3',  // 目标点 id
                label: '我是连线2'   // 边的文本
              },
              {
                source: 'node3',  // 起始点 id
                target: 'node4',  // 目标点 id
                label: '我是连线3'   // 边的文本
              }
            ]
          }
        }
    },
    created(){
      this.$nextTick(_ => {
        this.handleDrawInitData();
      });
    },
    methods: {
      /*
       * 样式的指定分为两种：
       *    1、数据中进行指定,通过style属性的添加，如下
              nodes: [
                {id: "node1", label: "node1", style: {file: "#fff", fontSize: 14}}
              ]
       *    2、参数中进行统一指定，通过defaultNode,或者defaultEdge进行指定
                const graph = new G6.Graph({
                  container: "docId",
                  width: 1000,
                  height: 600,
                  defaultNode: {
                      shape: "circle",        //指定模块的形状
                      style: {                //模块演示的指定
                          fill: "#faf",   
                          fontSize: 14
                      }    
                  }
                });      
       **/
      //初始化图表
      handleDrawInitData(){
        this.graph = new G6.Graph({
          container: 'mountNode', // 指定挂载容器
          width: 1000,             // 图的宽度
          height: 600,             // 图的高度
          defaultNode: {
            shape: 'node',  //指定模块显示的样式
            labelCfg: {     //指定模块内容的样式
              style: {
                fill: "#faf",
                fontSize: 12
              }
            }
          }
        });
        this.graph.data(this.initData);  // 加载数据
        this.graph.render();        // 渲染
        //图标事件的添加
        this.addEventListener();
      },
      //图表事件的添加
      addEventListener(graph){
        this.graph.setItemState('node1', 'selected', true);
        this.graph.on('click', (ev)=>{
          console.log(ev);
        });
      }
    }
}
</script>

<style scoped>
</style>