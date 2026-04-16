import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import MovieFormPage from '../views/MovieFormPage.vue'


const routes = [
  {
    path:'/',
    component: App
  },
  {
    path:'/movies/new',
    component: MovieFormPage
  },
  {
    path:'/movies/:id/edit',
    component:MovieFormPage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
