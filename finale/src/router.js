import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import RequestPage from './pages/RequestPage.vue';
import DangerousridesComponent from './components/DangerousridesComponent.vue';

const routes = [
{
path: '/',

children: [ 
{ path: '/',  name: 'HomePage', Component: HomePage},
{ path: 'requests',name: 'Requestpage', component: RequestPage },
{ path: '/dangerous-rides', name: 'DangerousRides', component: DangerousridesComponent }
],
},
]


const router = createRouter({
history: createWebHistory(),
routes
});

export default router;