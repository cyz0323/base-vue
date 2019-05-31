<template>
   <div>
       <!--全局操作按钮的控制-->
       <div v-if="externalBtns.length > 0" class="global_btns_list">
           <el-button v-for="t in externalBtns" @click="t.fn(selectionChanges)" :type="t.type">{{t.name}}</el-button>
       </div>
       <!--存在行点击事件-->
       <template v-if="isRowClickCallback">
           <el-table ref="singleTable" border :data="tableData" multiple style="width: 100%;height: 100%;" @row-click="callback.rowClick">
               <el-table-column fixed type="index" label="序号"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <el-form-item v-for="t in tableHeader" :label="t.value"><span>{{t.key}}</span></el-form-item>
                       </el-form>
                   </template>
               </el-table-column>
               <template v-for="item in tableHeader">
                   <el-table-column v-if="item.display" :sortable="isSort" fixed :prop="item.key" :label="item.value"></el-table-column>
               </template>
           </el-table>
       </template>
       <!--没有行点击的触发-->
       <template v-else>
           <!--开启复选-->
           <el-table v-if="isCheck" ref="singleTable" border :data="tableData" multiple style="width: 100%;height: 100%;" @selection-change="handlerTableSelection">
               <el-table-column type="selection" width="55"></el-table-column>
               <el-table-column fixed type="index" label="序号"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <el-form-item v-for="t in tableHeader" :label="t.value"><span>{{t.key}}</span></el-form-item>
                       </el-form>
                   </template>
               </el-table-column>
               <template v-for="item in tableHeader">
                   <el-table-column v-if="item.display" :sortable="isSort" fixed :prop="item.key" :label="item.value"></el-table-column>
               </template>
               <el-table-column label="操作" v-if="rowBtns.length > 0">
                   <template slot-scope="scope">
                       <el-button size="mini" v-for="b in rowBtns" @click="b.fn(scope.$index, scope.row)" :type="b.type">{{b.name}}</el-button>
                   </template>
               </el-table-column>
           </el-table>
           <!--关闭复选-->
           <el-table v-else ref="singleTable" border :data="tableData" multiple style="width: 100%;height: 100%;">
               <el-table-column fixed type="index" label="序号"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <el-form-item v-for="t in tableHeader" :label="t.value"><span>{{t.key}}</span></el-form-item>
                       </el-form>
                   </template>
               </el-table-column>
               <template v-for="item in tableHeader">
                   <el-table-column v-if="item.display" :sortable="isSort" fixed :prop="item.key" :label="item.value"></el-table-column>
               </template>
               <el-table-column label="操作" v-if="rowBtns.length > 0">
                   <template slot-scope="scope">
                       <el-button size="mini" v-for="b in rowBtns" @click="b.fn(scope.$index, scope.row)" :type="b.type">{{b.name}}</el-button>
                   </template>
               </el-table-column>
           </el-table>
       </template>
       <!-- 分页区域 -->
       <div class="customposition" v-if="showPagination">
           <el-pagination background layout="prev, pager, next" @current-change="handlerCurrentChange" :total="pageCount" :page-size="pageSize" :current-page="pageNo"></el-pagination>
           <p class="pageSizeBar">总数：<span class="pageSizeText">{{pageCount}}</span>条</p>
       </div>
   </div>
</template>
<script>
    export default {
        props: ["data", "pagination"],
        data(){
            return {
                e: this,
                url: "",            //数据请求地址
                param: this.data,   //参数列表
                isSort: false,      //是否排序的指定
                isCheck: false,     //是否存在checkbox，默认关闭
                isIndex: false,     //记录编号指定
                isRowClickCallback: false,   //是否有行点击回调
                openConent: false,  //标签内容的定义
                pageCount: 0,       //总数
                pageSize: 100,        //每页数量
                pageNo: 0,          //当前页数
                tableHeader: [],    //表头定义
                tableData: [],      //表格数据
                selectionChanges: [],//选中的数据
                rowBtns: [],        //局部（行）操作按钮的定义
                externalBtns: [],   //全局（整个表格）操作按钮定义
                currentChange: null,//分页参数发生改变时触发
                showPagination: this.pagination,    //分页是否显示
                callback: {         //行点击事件的定义
                    rowClick: null,     //当点击事件的定义
                }
            }
        },
        //初始化参数赋值
        created(){
            //设置参数
            this.url = this.param.url;
            this.isSort = this.param.hasOwnProperty("isSort") ? this.param.isSort : false;
            this.isCheck = this.param.hasOwnProperty("isCheck") ? this.param.isCheck : false;
            this.openConent = this.param.hasOwnProperty("openConent") ? this.param.openConent : false;
            //表头的设置
            if(this.isArray("header")){
                this.tableHeader = this.param.header;
                for(let i in this.tableHeader){
                    if(!this.tableHeader[i].hasOwnProperty("display")) this.tableHeader[i]["display"] = true;
                }
            }
            //行操作按钮处理，若存在行操作按钮则需要禁用行点击的回调事件
            if(this.isArray("rowBtns")){
                this.rowBtns = this.param.rowBtns;
            }else{
                //数据表格点击的回调方法抛出
                if(this.param.hasOwnProperty("rowCallback") && typeof this.param.rowCallback == 'function'){
                    this.isRowClickCallback = true;
                    this.callback.rowClick = this.param.rowCallback;
                }
            }
            //全局操作按钮的过滤
            if(this.isArray("externalBtns")) {
                this.externalBtns = this.param.externalBtns;
            }
            //数据请求
            if(this.isArray("data")){
                this.pageCount = this.param.hasOwnProperty("count") ? this.param.count : 0;
                this.pageNo = this.param.hasOwnProperty("pageNo") ? this.param.pageNo : 0;
                this.pageSize = this.param.hasOwnProperty("pageSize") ? this.param.pageSize : 10;
                this.tableData = this.setDataList(this.param.data);
            }else{
                this.getData(this.url);
            }
        },
        methods: {
            isArray(e){
                return this.param.hasOwnProperty(e) && this.param[e] instanceof Array && this.param[e].length > 0;
            },
            //根据分页的参数处理数据
            setDataList(data){
                let resluts = [];
                for(let i in data){
                    if(i >= this.pageSize) break;
                    data[i]["_index"] = parseInt(i)+1;
                    resluts.push(data[i]);
                }
                return resluts;
            },
            getData(url){
                let self = this;
                //获取参数列表
                this.$axios.post(url).then(res => {return res}).then(res=>{
                    if(res.status == 200) {
                        //以下为返回数据
                        let data = res.data;
                        if(data.status == 0){
                            data = data.message;
                            if(self.tableHeader.length == 0)    self.tableHeader = data.tableHeader;
                            //表格参数处理
                            self.pageCount = data.count;
                            self.pageNo = data.pageCurrent;
                            self.pageSize = data.pageSize;
                            //根据页内显示条数的配置对数据表格进行设置
                            self.tableData = self.setDataList(data.list);
                        }
                    }
                }).catch(err=>{
                    this.$message(err.toString());
                })
            },
            //分页参数改变时触发
            handlerCurrentChange(e){
                if(this.isArray("data")){   //以定义的方式加载数据
                    this.param.paginationClickEvnent(e,this);
                }else{  //以请求的方式加载数据
                    this.pageNo = e;
                    let url = this.url+"?pageNo="+e+"&pageSize="+this.pageSize;
                    this.getData(url);
                }
            },
            handlerTableSelection(s) {
                this.selectionChanges = s;
            },
            //外部对简单表格中的行点击事件的定义
            handlerRowClick(row, column, event){

            },
            //外部自定义分页事件的的模板，本次分页都需对数据和当前页进行重新指定
            handlerClickPagination(){
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
    .customposition{text-align: right;margin: 20px 0;position: relative;}
    .pageSizeBar{width: 200px;position: absolute; top: 5px;left: 10px;text-align: left;font-weight: bold;}
    .pageSizeText{font-weight: normal;margin-right: 10px;}
    .global_btns_list{margin-bottom: 15px;}
    .demo-table-expand>div{display: inline-block;width: 45%;}
    .el-form--inline .el-form-item__label{font-weight: bold !important;}
</style>