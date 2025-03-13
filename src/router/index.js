import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToysView from '../views/projects/ToysView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    
    },
    {
      path: '/toys',
      name: 'toys',
      component: ToysView,
    
    },
  ],
})

export default router
