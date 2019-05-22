<template>
    <div class="table">
        <div class="handle-box">
            <el-input v-model="col1" placeholder="资产编号" class="handle-input mr10"></el-input>
            <el-input v-model="col9" placeholder="资产类别" class="handle-input mr10"></el-input>
            <el-input v-model="col2" placeholder="地点" class="handle-input mr10"></el-input>
            <el-input v-model="col6" placeholder="责任部门" class="handle-input mr10"></el-input>
            <el-input v-model="col6" placeholder="责任人" class="handle-input mr10"></el-input>
            <el-input v-model="col6" placeholder="使用人" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
</style>
