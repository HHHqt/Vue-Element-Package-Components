<template>
  <div class="view">
    <search-package :showList="showList"></search-package>
    <table_-package :tableColumnList="tableColumnList" :tableData="tableData" :operating="operating" :multipleChoice="multipleChoice" :pageNum="pageNum" :pageSize="pageSize"></table_-package>
  </div>
</template>

<script>
  import table_Package from "../table_Package/table_Package";
  import searchPackage from "../search_package/searchPackage";

  export default {
    name: "searchTable_Package",
    components: {
      searchPackage,
      table_Package
    },
    data() {
      return {
        //搜索条件显示列表
        /**
         * type 用来在searchPackage封装文件中判断显示的组件（time为日期选择; timeSecond为日期时间选择; input为输入框; select为搜索框）
         * title 为组件前的名字
         * value 为绑定的值
         * options 为下拉选择器的内容
         * */
        showList: [
          {
            type: 'time',
            title: '选择日期',
            value: '',
          },
          {
            type: 'timeSecond',
            title: '选择日期和时间',
            value: '',
          },
          {
            type: 'input',
            title: '输入框',
            value: '',
          },
          {
            type: 'select',
            title: '选择框',
            options: [
              {
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }
            ],
            value: '',
          },
        ],
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
        tableColumnList: [
          {
            prop: 'date',
            label: '时间'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'address',
            label: '地址'
          },
        ],
        //是否显示操作按钮
        operating: true,
        //是否多选
        multipleChoice: true,
        //页码
        pageNum: 1,
        //一页十条
        pageSize: 10,
      }
    }
  }
</script>

<style scoped>

</style>
