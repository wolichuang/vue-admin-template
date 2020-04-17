import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'

import Dashboard from '@/pages/dashboard/Analysis'

Vue.use(Router)

export default new Router({
	routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
     {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/analysis',
              name: '分析页',
              component: Dashboard,
              icon: 'none'
            }
          ]
        }
      ]
    }
   ]
 });