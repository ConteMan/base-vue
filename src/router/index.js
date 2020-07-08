import Vue from "vue"
import Router from "vue-router"

import main from "@/router/modules/main"

Vue.use(Router)

//通用路由
export const routes = [
  main,
]

//未定义路由
export const noneRoute = [
  {
    path: '*',
    name: '404',
    meta: {
      title: "404"
    },
    redirect: { name: 'Home' },
  }
]

//登录可见路由
export const authRoutes = [
]

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const createRouter = function () {
  return new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })

}

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
