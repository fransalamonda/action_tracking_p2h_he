//import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Unassigned from '../views/unassigned.vue'
import PendingAction from '../views/pending_action.vue'
import InProgress from '../views/in_progress.vue'
// import Stokbarang from '../views/Stokbarang.vue'
// import Kasir from '../views/Kasir.vue'
// import Supplier from '../views/Supplier.vue'
// import BarangMasuk from '../views/BarangMasuk.vue'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  //routes
  routes : [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      //component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
      component: Dashboard,
      children: [
        {
          path: "/home",
          component: Home,
        },
        {
          path: "/unassigned",
          component: Unassigned,
        },
        {
          path: "/pending_action",
          component: PendingAction,
        },
        {
          path: "/in_progress",
          component: InProgress,
        },
        // {
        //   path: "/stokbarang",
        //   component: Stokbarang,
        // },
        // {
        //   path: "/kasir",
        //   component: Kasir,
        // },
        // {
        //   path: "/supplier",
        //   component: Supplier,
        // },
        // {
        //   path: "/barangmasuk",
        //   component: BarangMasuk,
        // },
      ]
    },
    // {
    //   path: '/loginportal/:nik/:nama',
    //   name: 'loginportal',
    //   component: LoginPortal
    // },
    // {
    //   path: '/auth',
    //   name: 'auth',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  linkActiveClass: "active",
})

export default router
