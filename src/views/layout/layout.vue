<template>
  <div class="view">
    <div class="layout">
      <el-menu class="el-menu-vertical-demo" router>
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">表格组件封装</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/use_Table_Package">普通表格</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/useSearchTablePackage">使用封装搜索及表格</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/useFormPackage">使用封装表单提交</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="headLayout">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="routerTitle !== '' && routerTitle !== 'layout'">{{ routerTitle }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default {
    name: "layout",
    data () {
      return {
        routerTitle: '',
      }
    },
    created() {
      this.routerTitle = this.$route.name;
      console.log(typeof this.routerTitle);
    },
    watch:{
      $route(form,to) {
        this.routerTitle = form.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    width: 200px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .headLayout {
    width: calc(100% - 210px);
    height: 15px;
    position: absolute;
    left: 200px;
    padding: 10px 5px;
    background: #ececec;
  }
  .routerView {
    width: calc(100% - 200px);
    height: calc(100% - 35px);
    position: absolute;
    left: 200px;
    top: 35px;
    background: #ececec;
  }
</style>
