import Welcome from './components/WelcomeComponent.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Create from './components/CreateComponent.vue'
import Edit from './components/EditComponent.vue'
export default {
    mode: 'history',
    base: '/laravelvue/',
    fallback: true,
    routes: [
        {
            path: '/',
            component: Welcome,
            name: 'Welcome',
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {guest: true}
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {guest: true}
        },
        {
            path: '/create',
            component: Create,
            meta: {requiresAuth: true}
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: Edit,
            meta: {requiresAuth: true}
        },
    ]
}