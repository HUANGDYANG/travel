import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import City from '../pages/City/City'
import Detail from '../pages/Detail/Detail'
import Ticket from '../pages/Ticket/Ticket'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/City',
      name: 'City',
      component: City
    },{
      path:'/detail/:id', //动态路由
      name: 'Detail',
      component: Detail
    },{
      path:'/Ticket/:id',
      name:'Ticket',
      component: Ticket
    }
  ],

  //防止滚动行为，打开新路由时从(0,0)坐标开始
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
