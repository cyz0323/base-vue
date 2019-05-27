<template>
   <div>
       <el-table ref="singleTable" border :data="tableData" multiple style="width: 100%;height: 100%;" @row-click="callback.rowClick">
           <el-table-column fixed type="index" label="序号"></el-table-column>
           <el-table-column  v-for="item in tableHeader" :sortable="isSort" fixed :prop="item.key" :label="item.value"></el-table-column>
       </el-table>
       <div class="customposition">
           <el-pagination background layout="prev, pager, next" @current-change="handlerCurrentChange" :total="pageCount" :page-size="pageSize" :current-page="pageNo"></el-pagination>
           <p class="pageSizeBar">总数：<span class="pageSizeText">{{pageCount}}</span>条</p>
       </div>
   </div>
</template>

<script>
    export default {
        props: ["data"],
        data(){
            return {
                url: "",            //数据请求地址
                param: this.data,   //参数列表
                pageCount: 0,       //总数
                pageSize: 0,        //每页数量
                pageNo: 0,          //当前页数
                tableHeader: [],    //表头定义
                tableData: [],      //表格数据
                isSort: false,      //是否排序的指定
                currentChange: null,//分页参数发生改变时触发
                callback: {         //行点击事件的定义
                    rowClick: null,
                }
            }
        },
        created(){
            //设置参数
            this.isSort = this.param.isSort;
            this.url = this.param.url;
            this.pageSize = !!this.param.pageSize ? this.param.pageSize : 10;
            //表头的设置
            this.tableHeader = this.param.header;
            //数据表格点击的回调方法抛出
            this.callback.rowClick = this.param.callback.rowClick;
            //数据请求
            this.getData(this.url);
        },
        methods: {
            getData(url){
                let self = this;
                //获取参数列表
                this.$axios.post(url).then(res => {return res}).then(res=>{
                    if(res.status == 200) {
                        let data = res.data;
                        if(data.code == 1){
                            //表格参数处理
                            self.pageCount = data.pageCount;
                            self.pageNo = data.pageNo;
                            //根据页内显示条数的配置对数据表格进行设置
                            let resluts = [];
                            for(let i in data.data){
                                if(i >= self.pageSize) break;
                                resluts.push(data.data[i]);
                            }
                            self.tableData = resluts;
                        }
                    }
                }).catch(err=>{
                    this.$message(err.toString());
                })
            },
            handlerCurrentChange(e){
                this.pageNo = e;
                let url = this.url+"?pageNo="+e+"&pageSize="+this.pageSize;
                this.getData(url);
            },
        }
    }
</script>

<style scoped>
    .customposition{text-align: right;margin: 20px 0;position: relative;}
    .pageSizeBar{width: 200px;position: absolute; top: 5px;left: 10px;text-align: left;font-weight: bold;}
    .pageSizeText{font-weight: normal;margin-right: 10px;}
</style>