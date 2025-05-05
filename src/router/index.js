import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToysView from '../views/projects/ToysView.vue'
import ProjectionmappingLolaView from '@/views/projects/ProjectionmappingLolaView.vue'
import GenHopeView from '@/views/projects/GenHopeView.vue'
import RundetaarnView from '@/views/projects/RundetaarnView.vue'
import KingsCodeView from '@/views/projects/KingsCodeView.vue'
import TunniitView from '@/views/projects/TunniitView.vue'
import StudentcardView from '@/views/projects/StudentcardView.vue'
import ThreeJsView from '@/views/projects/ThreeJsView.vue'
import DsrView from '@/views/projects/DsrView.vue'
import DanceDesignView from '@/views/projects/DanceDesignView.vue'
import StonesView from '@/views/projects/StonesView.vue'
import PortraitsView from '@/views/projects/PortraitsView.vue'

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
    {
      path: '/kingscode',
      name: 'kingscode',
      component: KingsCodeView,
    
    },
    {
      path: '/tunniit',
      name: 'tunniit',
      component: TunniitView,
    
    },
    {
      path: '/studentcard',
      name: 'studentcard',
      component: StudentcardView,
    
    },
    {
      path: '/threejs',
      name: 'threejs',
      component: ThreeJsView,
    
    },
    {
      path: '/dsr',
      name: 'dsr',
      component: DsrView,
    
    },
    {
      path: '/dancedesign',
      name: 'dancedesign',
      component: DanceDesignView,
    
    },
    {
      path: '/stones',
      name: 'stones',
      component: StonesView,
    
    },
    {
      path: '/portraits',
      name: 'portraits',
      component: PortraitsView,
    
    },
  ],
})

export default router
