import Home from '../components/Home.vue';
import Users from '../components/Users';
import VueRouter from 'vue-router';

export default new VueRouter({
  routes: [
    {
        path:'/users',
        name:'Users',
        component:Users
        
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
  ]
});