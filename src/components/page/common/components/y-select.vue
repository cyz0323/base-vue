<template>
    <div>
        <el-select v-if="!checkFlg" v-model="value" placeholder="请选择" @change="change">
            <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
        </el-select>
        <el-select v-else v-model="value" multiple placeholder="请选择" @change="change">
            <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: 'custom_etselect',
        props: ["selOptions","enableValue","isCheck","isChange"],
        data(){
            return {
                options: this.selOptions,
                value: this.enableValue,
                checkFlg: this.isCheck,
                change: this.isChange
            }
        },
        created() {
            //console.log(isCheck);
        }
    }
</script>

<style scoped>

</style>