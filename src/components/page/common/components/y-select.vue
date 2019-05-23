<template>
    <div>
        <el-select v-if="!isCheck" v-model="value" placeholder="请选择">
            <!--<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
            <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
        </el-select>
        <el-select v-else v-model="value" multiple placeholder="请选择">
            <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: 'custom_etselect',
        props: ["selOptions","enableValue","isCheck"],
        data(){
            return {
                options: this.selOptions,
                value: this.enableValue,
                isCheck: this.isCheck
            }
        }
    }
</script>

<style scoped>

</style>