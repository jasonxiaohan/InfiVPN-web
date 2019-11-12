import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import Login from './../views/User/Login.vue'
import ChangePassword from './../views/User/ChangePassword.vue'
import ForgotPassword from './../views/User/ForgotPassword.vue'
import MyPlan from './../views/User/MyPlan.vue'
import Referral from './../views/User/Referral.vue'
import Apps from './../views/Apps.vue'
import Pricing from './../views/Pricing.vue'
import Register from './../views/User/Register.vue'
import { setToken, getToken, canTurnTo, setTitle } from '@/libs/util'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePassword,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myPlan',
      name: 'myPlan',
      component: MyPlan,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/referral',
      name: 'referral',
      component: Referral,
      meta: {
        requireAuth: true
      }
    }
  ]
})

const LOGIN_PAGE_NAME = 'login'
const HOME_PAGE_NAME = 'home'
const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

// router.beforeEach((to, from, next) => {
//   const token = getToken()  
  
//   if (!token && to.name !== LOGIN_PAGE_NAME && to.name !== HOME_PAGE_NAME) {
//     // 未登录且要跳转的页面不是登录页
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     })
//   } else if (!token && to.name === LOGIN_PAGE_NAME  && to.name !== HOME_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (token && to.name === LOGIN_PAGE_NAME) {
//     // 已登录且要跳转的页面是登录页
//     next({
//       name: HOME_PAGE_NAME // 跳转到homeName页
//     })
//   } 
//   else {
//     if (token) {
//       turnTo(to, token, next)
//     } else {
//       store.dispatch('getUserInfo').then(user => {
//         // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
//         turnTo(to, user.access, next)
//       }).catch(() => {
//         setToken('')
//         next({
//           name: 'login'
//         })
//       })
//     }
//   }
// })

export default router