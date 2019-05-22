<template>
    <div v-if="reqFlg">{{message}}</div>
    <div v-else class="table">
        <template v-for="item in dataList">
            <div style="width: 90%;margin: 5px 5%;margin-bottom: 40px;">
                <p class="title">{{item.col2}}</p>
                <table class="item-table" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>数量</th>
                            <th>责任部门</th>
                            <th>责任人</th>
                            <th>使用人</th>
                            <th>拆旧分配账户</th>
                            <th>地点</th>
                            <th class="lastTd">地址</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td class="lastTd">7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td class="lastTd">7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </div>
</template>

<script>
    export default{
        name: 'zcdbedit',
        created(){
            if(this.dataList.length == 0) this.reqFlg = true;
        },
        props: ['entitys'],
        data(){
            return {
                reqFlg: false,
                message: "数据丢失，请重新操作！",
                dataList: this.entitys
            }
        }
    }
</script>

<style scoped>
    .item-table{width: 98%; }
    .item-table tr{height: 40px}
    .item-table td,th{border-left: 1px solid #EBEEF5;border-top: 1px solid #EBEEF5;text-align: center;color: #909399;}
    .item-table tr:last-child td{border-bottom: 1px solid #EBEEF5;}
    .lastTd{border-right: 1px solid #EBEEF5;}
</style>
