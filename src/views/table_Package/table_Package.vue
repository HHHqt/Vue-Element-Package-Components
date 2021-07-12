<template>
  <div>
    <el-table
            :data="tableData"
            height="800"
            stripe
            @selection-change="handleSelectionChange"
            style="width: 100%">
      <el-table-column
              type="selection"
              width="55"
              v-if="multipleChoice"
      >
      </el-table-column>
      <el-table-column
              v-for="item in tableColumnList"
              :prop="item.prop"
              :label="item.label"
      >
      </el-table-column>
      <el-table-column
              fixed="right"
              label="操作"
              v-if="operating">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-popconfirm
                  title="确定删除吗？"
                  @confirm="confirmDelete(scope.row)"
                  style="margin-left: 10px"
          >
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="prev, pager, next"
            @current-change="pageChange"
            :current-page="pageNum"
            :page-size="pageSize"
            :total="100">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props:{
      tableColumnList: {
        type: Array,
        default: [],
      },
      tableData: {
        type: Array,
        default: [],
      },
      operating: {
        type: Boolean,
        default: false
      },
      multipleChoice: {
        type: Boolean,
        default: false
      },
      pageNum: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {
        //多选选中
        multipleSelection:[]
      }
    },
    methods:{
      //操作点击
      handleClick(row) {
        console.log(row);
      },
    //  多选
      handleSelectionChange(val) {
        console.log(val);
        this.multipleSelection = val;
      },
    //  确定删除
      confirmDelete(row) {
        console.log(row);
      },
    //  切换页面
      pageChange(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped>

</style>
