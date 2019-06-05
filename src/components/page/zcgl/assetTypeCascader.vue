<template>
    <div>
        <template v-for="item in from_list">
            <el-form-item :label="item.name" v-if="item.type == 'text'" class="from-box">
                <template v-for="key in request_data">
                    <el-input v-if="key.code == item.code" v-model="key.value" :placeholder="item.name" class="text"></el-input>
                </template>
            </el-form-item>
            <el-form-item :label="item.name" v-if="item.type == 'double'" class="from-box">
                <template v-for="key in request_data">
                    <el-input v-if="key.code == item.code" v-model="key.value" :placeholder="item.name" class="text"></el-input>
                </template>
            </el-form-item>
            <el-form-item :label="item.name" v-if="item.type == 'number'" class="from-box">
                <template v-for="key in request_data">
                    <el-input v-if="key.code == item.code" v-model="key.value" :placeholder="item.name" class="text"></el-input>
                </template>
            </el-form-item>
            <el-form-item :label="item.name" v-if="item.type == 'select'" class="from-box">
                <template v-for="key in request_data">
                    <el-input v-if="key.code == item.code" v-model="key.value" :placeholder="item.name" class="text"></el-input>
                </template>
            </el-form-item>
            <el-form-item :label="item.name" v-if="item.type == 'date'" class="from-box">
                <template v-for="key in request_data">
                    <el-date-picker v-if="key.code == item.code" v-model="key.value" type="date" placeholder="选择日期" class="text"></el-date-picker>
                </template>
            </el-form-item>
        </template>
    </div>
</template>

<script>
    export default {
        props: [],
        data(){
            return {
                url: "",
                from_list: [],
                request_data: [],
                isControls: false,
            }
        },
        created(){
            //this.handeGetData();
        },
        methods: {
            handeGetData(){
                let self = this;this.request_data = [];
                this.$my.get(this,this.url, function(data){
                    console.log(data);
                    data = JSON.parse(data);
                    self.from_list = data;
                    for(let i in data)
                        self.request_data.push({code: data[i].code, value: ""});
                },function(err){

                })
            }
        }
    }
</script>
<style scoped>
    .text{width: 220px;}
    .from-box{display: inline-block; width: 45%;}
</style>
