import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const defaultRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard'
  }
]

export default new Router({
  routes: defaultRoutes,
  scrollBehavior: () => ({ y: 0 })
})

export const asyncRoutes = [
  // {
  //   path: 
  // },
  { path: '*', redirect: '/404', hidden: true }
]