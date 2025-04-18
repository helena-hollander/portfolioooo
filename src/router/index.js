import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToysView from '../views/projects/ToysView.vue'
import ProjectionmappingLolaView from '@/views/projects/ProjectionmappingLolaView.vue'
import GenHopeView from '@/views/projects/GenHopeView.vue'
import RundetaarnView from '@/views/projects/RundetaarnView.vue'

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
    {
      path: '/generationhope',
      name: 'generationhope',
      component: GenHopeView,
    
    },
    {
      path: '/rundetaarn',
      name: 'rundetaarn',
      component: RundetaarnView,
    
    },
  ],
})

export default router
