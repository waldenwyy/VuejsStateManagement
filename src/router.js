import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Create from './views/Create.vue';
import Edit from './views/Edit.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});