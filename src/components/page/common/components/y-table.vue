<template>
   <div>
       <el-table border :data="tableData" multiple style="width: 100%;" height="100%" >
           <el-table-column fixed prop="index" label="序号" width="60" style="text-align: center;"></el-table-column>
           <el-table-column prop="date" label="日期" width="150"></el-table-column>
           <el-table-column prop="name" label="姓名" width="120"></el-table-column>
           <el-table-column prop="province" label="省份" width="120"></el-table-column>
           <el-table-column prop="city" label="市区" width="120"></el-table-column>
           <el-table-column prop="address" label="地址" width="300"></el-table-column>
           <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
       </el-table>
       <div class="customposition">
           <el-pagination background layout="prev, pager, next" :total="pageCount" :page-size="pageSize" :current-page="pageNo"></el-pagination>
       </div>
   </div>
</template>

<script>
    export default {
        props: ["data","name"],
        data(){
            return {
                name: this.name,
                param: this.data,
                pageCount: 0,
                pageSize: 0,
                pageNo: 0,
                tableData: []
            }
        },
        created(){
            console.log(this.name);
            this.tableData = this.param.data;
            this.pageCount = this.param.pageCount;
            this.pageSize = this.param.pageSize;
            this.pageNo = this.param.pageNo;
            this.tableData = this.param.data;
        }
    }
</script>

<style scoped>
    .customposition{text-align: right;margin: 20px 0;}
</style>