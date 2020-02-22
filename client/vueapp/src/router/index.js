import Contacts from '../components/Contacts.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import VueRouter from 'vue-router';

export default new VueRouter({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
