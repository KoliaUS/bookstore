import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add_book',
      name: 'add_book',
      component: () => import('../views/AddBookView.vue')
    },
    {
      path: '/edit_book/:id',
      name: 'edit_book',
      component: () => import('../views/EditBookView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('../views/MoreBookView.vue')
    }
  ]
})

export default router
