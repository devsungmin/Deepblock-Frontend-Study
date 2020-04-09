import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Playground from "../components/Playground";


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
        mode: 'history'
    },
    {
        path: '/playground',
        name: 'Playground',
        component: Playground
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
