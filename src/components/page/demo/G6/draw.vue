<template>
    <div id="mountNode"></div>
</template>

<script>
import G6 from '@antv/g6';
import bus from './g6_bus';
export default{
	name: "G6_draw",
    props: ["width"],
    data(){
        return {
            // 初始化G6参数信息
            G6_InitData: {
                // 宽度的定义
                G6_width: this.width,  
                tableData: {},
                // 操作对象
                group: null,  
            } 
        }
    },
    created(){
        this.$nextTick(_ => {
            // 初始化页面数据的获取
            this.handleInitG6Data();
            // bus事件触发的处理
            bus.$on("menuClick", (e) => {
                this.handleMenuClick(e);
            });
        });
    },
    methods: {
        /* 
         * 操作按钮点击的处理 */ 
        handleMenuClick(e){
            switch(e){
              case 'pointer':
                  this.handleClickPointer(e);
                  break;
              case 'pie':
                  this.handleClickPie(e);
                  break;
              case 'polygon':
                  this.handleClickPolygon(e);
                  break;
              case 'line':
                  this.handleClickLine(e);
                  break;
            }
        },
        //选择事件的触发
        handleClickPointer(e){
            console.log("选择按钮的触发");
        },
        //圆形点击
        handleClickPie(e){
            this.$my.successMsg(this, "原型点击事件的触发");
            this.G6_InitData.graph.setMode(e);
        },
        //多边形点击触发
        handleClickPolygon(e){
            console.log("多边形按钮点击");
        },
        //直线的点击触发
        handleClickLine(e){
            console.log("直线按钮点击");
        },
        /*
         * G6 数据的获取 */
        handleInitG6Data(){
            // 获取基础数据并进行绘制
            this.$my.getSource(this, this.$my.g6_data).then(e => {
                let data = e.data;
                this.G6_InitData.tableData = data.data1;
                // 图表参数定义
                this.handleInitG6View();
            })
        },
        /*
         * 图表参数的初始化 */ 
        handleInitG6View(){
            let self =this;
            //节点样式定义
            let ndoeParam = {
              shape: "node",
              labelCfg: {
                style: {
                  fill: "#fff",
                  fontSize: 14
                }
              }
            };
            //连线样式定义
            let edgeParam = {
              shape: "line-with-arrow",
              style: {
                endArrow: true,
                lineWidth: 2,
                stroke: "#ccc"
              }
            };
            //交互配置参数
            let modesParam = {
                default: ['drag-canvas', 'zoom-canvas', 'drag-node'],    //允许画布拖拽、缩放，允许节点拖拽
                //增加节点交互模式
                pie: ['click-add-node', 'click-select'],
                //增加边交互模式
                addEdge: ['click-add-edge', 'click-select'],
            };
            // 节点信息的自定义处理
            this.handleCustomNode();
            // 图表对象的声明
            this.G6_InitData.graph = new G6.Graph({
                container: "mountNode",
                width: self.G6_InitData.G6_width,
                height: 800,
                // 指定自适应画布大小
                fitView: true,
                // 画布留白的宽度的设置
                fitViewPadding: [150,150,150,150],
                layout: {
                  type: 'dagre',
                  rankdir: 'LR'
                },
                //交互管理配置
                modes: modesParam,
                //节点样式定义
                defaultNode: ndoeParam,
                //连线样式定义
                defaultEdge: edgeParam
            });
            // G6数据初始化
            this.G6_InitData.graph.data(this.G6_InitData.tableData);
            this.G6_InitData.graph.render();
            // 边的点击事件
            this.G6_InitData.graph.on('edge:click', function(evt) {
                console.log(123);
                var target = evt.target;
                var type = target.get('type');
                if (type === 'circle') {
                    // 点击边上的circle
                    alert('你点击的是边上的圆点');
                }
            });
        },
        // 自定义节点信息
        handleCustomNode(){
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
            };
            /**
            * node 特殊属性 */
            var nodeExtraAttrs = {
                begin: {
                  fill: "#9FD4FB"
                },
                end: {
                  fill: "#C2E999"
                }
            };
            /**
            * 自定义节点 */
            G6.registerNode("node", {
                drawShape: function drawShape(cfg, group) {
                  var rect = group.addShape("rect", {
                    attrs: _extends({
                      x: -75,
                      y: -25,
                      width: 150,
                      height: 50,
                      radius: 4,
                      fill: "#FFD591",
                      fillOpacity: 1
                    }, nodeExtraAttrs[cfg.type])
                  });
                  return rect;
                },
                // 设置状态
                setState: function setState(name, value, item) {
                  var group = item.getContainer();
                  var shape = group.get("children")[0]; // 顺序根据 draw 时确定

                  if (name === "selected") {
                    if (value) {
                      shape.attr("fill", "#F6C277");
                    } else {
                      shape.attr("fill", "#FFD591");
                    }
                  }
                },

                getAnchorPoints: function getAnchorPoints() {
                  return [[0, 0.5], [1, 0.5]];
                }
            }, "single-shape");
            /**
             * 自定义 edge 中心关系节点 */
            G6.registerNode("statusNode", {
                drawShape: function drawShape(cfg, group) {
                  var circle = group.addShape("circle", {
                    attrs: {
                      x: 0,
                      y: 0,
                      r: 6,
                      fill: cfg.active ? "#AB83E4" : "#ccc"
                    }
                  });
                  return circle;
                }
            }, "single-shape");

            /**
            * 自定义带箭头的贝塞尔曲线 edge */
            G6.registerEdge("line-with-arrow", {
                itemType: "edge",
                draw: function draw(cfg, group) {
                  var startPoint = cfg.startPoint;
                  var endPoint = cfg.endPoint;
                  var centerPoint = {
                    x: (startPoint.x + endPoint.x) / 2,
                    y: (startPoint.y + endPoint.y) / 2
                  };
                  // 控制点坐标
                  var controlPoint = {
                    x: (startPoint.x + centerPoint.x) / 2,
                    y: startPoint.y
                  };

                  // 为了更好的展示效果, 对称贝塞尔曲线需要连到箭头根部
                  var path = group.addShape("path", {
                    attrs: {
                      path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
                      stroke: "#ccc",
                      lineWidth: 1.6,
                      endArrow: {
                        path: "M 4,0 L -4,-4 L -4,4 Z",
                        d: 4
                      }
                    }
                  });
                  // 如果是不对称的贝塞尔曲线，需要计算贝塞尔曲线上的中心点
                  // 参考资料 https://stackoverflow.com/questions/54216448/how-to-find-a-middle-point-of-a-beizer-curve
                  // 具体Util方法可以参考G：https://github.com/antvis/g/blob/4.x/packages/g-math/src/quadratic.ts
                  // 在贝塞尔曲线中心点上添加圆形
                  var source = cfg.source,
                  target = cfg.target;

                  group.addShape("circle", {
                    attrs: {
                      id: "statusNode" + source + "-" + target,
                      r: 6,
                      x: centerPoint.x,
                      y: centerPoint.y,
                      fill: cfg.active ? "#AB83E4" : "#ccc"
                    }
                  });

                  return path;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>