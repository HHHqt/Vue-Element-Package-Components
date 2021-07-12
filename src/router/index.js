import Vue from 'vue'
import VueRouter from 'vue-router'
import use_Table_Package from '../views/table_Package/use_Table_Package.vue'
import layout from '../views/layout/layout.vue'
import useSearchTablePackage from "../views/searchTable_Package/useSearchTablePackage";
import useFormPackage from "../views/form_Package/useFormPackage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: 'use_Table_Package',
        name: '普通表格封装',
        component: use_Table_Package
      },
      {
        path: 'useSearchTablePackage',
        name: '使用封装搜索及表格',
        component: useSearchTablePackage
      },
      {
        path: 'useFormPackage',
        name: '使用封装表单提交',
        component: useFormPackage
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
