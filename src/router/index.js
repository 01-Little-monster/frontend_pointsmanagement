import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// // 重写了原型上的push方法，统一的处理了错误信息
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const Corps = () => import('@/views/corps/Corps')
const Exchange = () => import('@/views/exchange/Exchange')
const Home = () => import('@/views/home/Home.vue')
const Profile = () => import('@/views/profile/Profile')
const Ranking = () => import('@/views/ranking/Ranking')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { // 首页
    path: '/home',
    component: Home
  },
  { // 排行榜
    path: '/ranking',
    component: Ranking
  },
  { // 兑换中心
    path: '/exchange',
    component: Exchange
  },
  { // 个人中心
    path: '/profile',
    component: Profile
  },
  { // 团队管理
    path: '/corps',
    component: Corps
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
