import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Models from "../components/Models";
import Chart from "../components/Chart"
import Billboard from "../components/Billboard"


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
    },
    {
        path: '/chart',
        name: 'Charts',
        component: Chart
    },
    {
        path: '/billboard',
        name: 'Billboard',
        component: Billboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
