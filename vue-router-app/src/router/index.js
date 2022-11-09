import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'

Vue.use(VueRouter)


const isLoggedIn = true



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // lazy-loading 방식 (첫 로딩에 렌더링 하지않고 해당 라우터가 동작할 때 컴포넌트를 렌더링 한다)
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  // 아래는 라우터 가드 설정 이미 로그인 되어 있다면 로그인 페이지를 보지 못하고 홈으로 날라감
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('이미 로그인 되어 있음')
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound404,
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },

  {
     path: '*',
     redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 아랜 전역가드 

// router .beforeEach((to, from, next) => {
//   // 로그인 여부
//   const isLoggedIn = false

//   // 로그인이 필요한 페이지
//   const authPages = ['hello', 'home', 'about']

//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동!')
//     next({ name: 'login' })
//   } else {
//     next()
//   }

// })





export default router
