import Vue from 'vue'
import VueRouter from 'vue-router'
import Apartment from '../views/Apartment.vue'
import MultiHouse from '../views/MultiHouse.vue'
import MultiFamily from '../views/MultiFamily.vue'
import Officetel from '../views/Officetel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/apartment',
  },
  {
    path: '/apartment',
    name: 'Apartment',
    component: Apartment
  },
  {
    path: '/multihouse',
    name: 'MultiHouse',
    component: MultiHouse
  },
  {
    path: '/multifamily',
    name: 'MultiFamily',
    component: MultiFamily
  },
  {
    path: '/officetel',
    name: 'Officetel',
    component: Officetel
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
