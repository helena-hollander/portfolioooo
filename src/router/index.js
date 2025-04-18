import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToysView from '../views/projects/ToysView.vue'
import ProjectionmappingLolaView from '@/views/projects/ProjectionmappingLolaView.vue'

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
    {
      path: '/projectionmapping',
      name: 'projectionmapping',
      component: ProjectionmappingLolaView,
    
    },
  ],
})

export default router
