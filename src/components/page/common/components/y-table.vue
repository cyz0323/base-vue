<template>
   <div>
       <el-table border :data="tableData" multiple style="width: 100%;" height="100%" >
           <el-table-column :sortable="isSort" fixed prop="index" label="序号"></el-table-column>
           <el-table-column :sortable="isSort" prop="date" label="日期"></el-table-column>
           <el-table-column :sortable="isSort" prop="name" label="姓名"></el-table-column>
           <el-table-column :sortable="isSort" prop="province" label="省份"></el-table-column>
           <el-table-column :sortable="isSort" prop="city" label="市区"></el-table-column>
           <el-table-column :sortable="isSort" prop="address" label="地址"></el-table-column>
           <el-table-column :sortable="isSort" prop="zip" label="邮编"></el-table-column>
       </el-table>
       <div class="customposition">
           <el-pagination background layout="prev, pager, next" @current-change="currentChange" @prev-click="prevClick" @next-click="nextClick"  :total="pageCount" :page-size="pageSize" :current-page="pageNo"></el-pagination>
           <p class="pageSizeBar">总数：<span class="pageSizeText">{{pageCount}}</span>条</p>
       </div>
   </div>
</template>

<script>
    export default {
        props: ["data","name","callback"],
        data(){
            return {
                key: this.name,     //唯一命名暂时不适用
                param: this.data,   //参数列表
                pageCount: 0,       //总数
                pageSize: 0,        //每页数量
                pageNo: 0,          //当前页数
                tableData: [],      //表格数据
                isSort: false,
                currentChange: null,    //分页参数发生改变时触发
                prevClick: null,        //分页点击上一页触发
                nextClick: null         //分页点击下一页触发
            }
        },
        created(){
            this.tableData = this.param.data;
            this.pageCount = this.param.pageCount;
            this.pageSize = !!this.param.pageSize ? this.param.pageSize : 10;
            this.pageNo = this.param.pageNo;
            this.isSort = this.param.isSort;
            this.currentChange = this.param.callback.currentChange;
            this.prevClick = this.param.callback.prevClick;
            this.nextClick = this.param.callback.nextClick;
        }
    }
</script>

<style scoped>
    .customposition{text-align: right;margin: 20px 0;position: relative;}
    .pageSizeBar{width: 200px;position: absolute; top: 5px;left: 10px;text-align: left;font-weight: bold;}
    .pageSizeText{font-weight: normal;margin-right: 10px;}
</style>