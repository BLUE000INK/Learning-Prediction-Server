import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../views/LoginPage'
import Home from '../views/Home'
import DataBase from '../views/DataBase'
import Analyze from '../views/Analyze'
import Main from '../views/Main'
import UserHome from "../views/UserHome";
import UserManage from "../views/UserManage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/main',
      children: [
        {
          path: '/home/main',
          name: 'Main',
          component: Main
        },
        {
          path: '/home/database',
          name: 'DataBase',
          component: DataBase
        },
        {
          path: '/home/analyze',
          name: 'Analyze',
          component: Analyze
        },
        {
          path: '/home/userHome',
          name: 'UserHome',
          component: UserHome
        },
        {
          path: '/home/userManage',
          name: 'UserManage',
          component: UserManage
        }
      ]
    }
  ],
  mode: 'hash'
})
