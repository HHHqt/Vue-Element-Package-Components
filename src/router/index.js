import Vue from 'vue'
import VueRouter from 'vue-router'
import table_Package from '../views/table_Package/table_Package.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table_Package',
    component: table_Package
  },
]

const router = new VueRouter({
  routes
})

export default router
