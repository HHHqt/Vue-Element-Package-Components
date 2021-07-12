<template>
  <div class="contentView">
    <table_-package :tableColumnList="tableColumnList" :tableData="tableData" :operating="operating" :multipleChoice="multipleChoice" :pageNum="pageNum" :pageSize="pageSize"></table_-package>
  </div>
</template>

<script>
  import table_Package from "./table_Package";
  export default {
    name: "use_Table_Package",
    components:{
      table_Package
    },
    data() {
      return {
        //列表的数据
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        //列表的表头对应的字段和文字
        /**
         * prop 为绑定的字段
         * label 为该字段对应的表头
         * */
        tableColumnList:[
          {
            prop:'date',
            label:'时间'
          },
          {
            prop:'name',
            label:'姓名'
          },
          {
            prop:'address',
            label:'地址'
          },
        ],
        //是否显示操作按钮
        operating:true,
        //是否多选
        multipleChoice:true,
        //页码
        pageNum:1,
        //一页十条
        pageSize:10

      }
    }
  }
</script>

<style scoped>

</style>
