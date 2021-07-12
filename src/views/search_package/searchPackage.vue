<template>
  <div class="search">
    <el-row>
      <el-col :span="6"  v-for="item in showList">
        <span class="searchTitle">{{ item.title }}:</span>
        <el-date-picker
                v-model="item.value"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-if="item.type === 'time'">
        </el-date-picker>
        <el-date-picker
                v-model="item.value"
                type="datetime"
                placeholder="选择日期时间"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-if="item.type === 'timeSecond'">
        </el-date-picker>
        <el-input v-model="item.value" placeholder="请输入内容" clearable v-if="item.type === 'input'"></el-input>
        <el-select v-model="item.value" clearable placeholder="请选择" v-if="item.type === 'select'">
          <el-option
                  v-for="itemS in item.options"
                  :key="itemS.value"
                  :label="itemS.label"
                  :value="itemS.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" class="searchBtn">
        <el-button class="searchButton" type="primary">
          搜索
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "searchPackage",
    props:{
      showList:{
        type:Array,
        default:[],
      }
    },
    data () {
      return {
        value1: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding: 20px 0;
  }
  /deep/.el-row {
    padding-right: 50px;
    .el-col {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 10px;
    }
  }
  .searchBtn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start !important;
    align-items: center !important;
    .searchButton {
      margin-left: 70px;
    }
  }
  .searchTitle {
    margin-right: 10px;
  }
/deep/.el-input {
  width: 220px;
}
</style>
