import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import RequestPage from './pages/RequestPage.vue';
import LoginPage from './pages/LoginPage.vue';

const routes = [
{
path: '/',
component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
children: [ 
{ path: 'requests',name: 'Requestpage', component: RequestPage },
{ path: '/dangerous-rides', name: 'DangerousRides', component: DangerousRidesPage }
],
},
]


const router = createRouter({
history: createWebHistory(),
routes
});

export default router;