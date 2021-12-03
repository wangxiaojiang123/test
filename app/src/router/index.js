import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  // 发布详情页
  {
    path: '/detail',
    component: () => import('../views/Services/Detail.vue'),
    children:[
      {
        path: '',
        name: 'Serve',
        component: () => import('../views/Services/Serve.vue')
      },
      {
        path: '/detail/handle',
        name: 'Handle',
        component: () => import('../views/Services/Handle.vue')
      },
      
    ]
  },
 
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/public',
    name: 'Public',
    component: () => import('../views/Home/Public.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Home/Address.vue')
  },
  {
    path: '/devtype',
    name: 'Devtype',
    component: () => import('../views/Home/Devtype.vue')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/Home/More.vue')
  },
  // 注册登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/Register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Login/Forget.vue')
  },
  {
    path: '/protocols',
    name: 'Protocols',
    component: () => import('../views/Highway/Protocols.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/Highway/Policy.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
