import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import IslandHomePage from "../components/pages/ivanov_karavaev/pages/IslandHomePage.vue"
import AddTourPage from "@/components/pages/ivanov_karavaev/pages/AddTourPage.vue";
import TourPage from "@/components/pages/ivanov_karavaev/pages/TourPage.vue";
import { RouteNames } from './routes'

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
    component: AddTourPage
  },
  {
    path: '/island/tour/:id',
    name: RouteNames.ISLANDTOUR,
    component: TourPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
