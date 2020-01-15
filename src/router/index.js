import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/loin',
    name: '登录页',
    component: () => import('views/Login/index.vue')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('views/Layout/layout.vue'),
    children: [
      {
        path: '/item',
        name: '子项1',
        children: [
          {
            path: '/item-1',
            name: '三级'
          }
        ]
      }
    ]
  },
  {
    path: '/canvas',
    name: '图片加水印',
    component: () => import('views/Canvas/index.vue'),
    children: [
      {
        path: '/add',
        name: '图片加水印'
      }
    ]
  },
  // {
  //   path: '/drag',
  //   name: '画板',
  //   component: () => import('views/Drag/index.vue')
  // }
  {
    path: '/effects',
    name: '特效',
    component: () => import('views/Effects/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
