import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Models from "../components/Models";


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
        mode: 'history'
    },
    {
        path: '/models',
        name: 'Models',
        component: Models
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
