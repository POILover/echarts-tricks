import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../views/AppMain'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/index',

}, {
  path: '/index',
  component: AppMain
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router