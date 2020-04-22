import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Approach from '../views/Approach.vue';
import Services from '../views/Services.vue';
import CaseStudies from '../views/CaseStudies.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/case-studies',
    name: 'Case Studies',
    component: CaseStudies,
  },
  {
    path: '/approach',
    name: 'Approach',
    component: Approach,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
