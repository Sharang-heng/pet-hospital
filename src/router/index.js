import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import Counsel from '../views/counsel'
import Doctor from '../views/doctor'
import Knowledge from '../views/knowledge'
import Clone from '../views/clone'
import KeepSell from '../views/children/keepSell'
import cloneDog from '../views/children/cloneDog.vue'
import keepTissue from '../views/children/keepTissue'
import myorder from '../views/children/myorder'
import cloneTechnology from '../views/children/cloneTechnology'
import importantTip from '../views/children/importantTip'
import petFuneral from '../views/petFuneral'
import petTransport from '../views/petTransport'
import petCare from '../views/petCare'
import orderDoctor from '../views/orderDoctor'
import cloneOrder from '../views/cloneOrder'
import walkTheDog from '@/views/walkTheDog'
import AdminLogin from '@/views/AdminLogin'
Vue.use(VueRouter)

const routes = [
  {
    path: '/adminLogin',
    name: '管理员登录',
    component: AdminLogin,
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/counsel',
    component: Counsel
  },
  {
    path:'/doctor',
    component: Doctor
  },
  {
    path:'/orderDoctor',
    component: orderDoctor
  },
  {
    path:'/cloneOrder',
    component: cloneOrder
  },
  {
    path:'/knowledge',
    component: Knowledge
  },
  {
    path:'/petCare',
    component: petCare
  },
  {
    path:'/petTransport',
    component: petTransport
  },
  {
    path:'/clone',
    component: Clone,
    redirect:'clonedog',
      children:[
        {path: '/clonedog', component:cloneDog },
        {path: '/keepsell', component: KeepSell},
        {path: '/keepTissue', component: keepTissue},
        {path: '/cloneTechnology', component: cloneTechnology},
        {path: '/importantTip', component: importantTip},
        {path:'/myorder',component:myorder}
      ]
  },
  {
    path:'/petFuneral',
    component: petFuneral
  },
  {
    path:'/walkTheDog',
    component: walkTheDog
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
