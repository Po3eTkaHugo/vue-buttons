import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import IslandHomePage from "../components/pages/ivanov_karavaev/pages/IslandHomePage.vue"
import addTourPage from "@/components/pages/ivanov_karavaev/pages/AddTourPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/island/home',
    name: RouteNames.ISLANDHOME,
    component: IslandHomePage
  },
  {
    path: '/island/add',
    name: RouteNames.ISLANDADDTOUR,
    component: addTourPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
