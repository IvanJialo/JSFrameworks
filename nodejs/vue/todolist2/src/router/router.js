import { createRouter, createWebHistory } from 'vue-router';
import StatsPage from '../components/StatsPage.vue';
import TaskCategories from '../components/TaskCategories.vue';

const routes = [
  {
    path: '/',
    name: 'StatsPage',
    component: StatsPage,
  },
  {
    path: '/categories',
    name: 'TaskCategories',
    component: TaskCategories,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
