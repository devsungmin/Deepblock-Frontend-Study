import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Board from '../components/Board'

Vue.use(VueRouter)
const routes = [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/board', name: 'board,', component: Board }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
