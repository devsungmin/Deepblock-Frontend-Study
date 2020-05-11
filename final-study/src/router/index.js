import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Main from '@/views/Main'
import Board from '@/views/Board'

//views
import Block from '@/components/Block'
import Dataset from '@/components/Dataset'
import Settings from '@/components/Settings'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Main },
    { path: '/board', name: 'Board', component: Board, 
        children: [
            { path: '/board', component: Block },
        ]
    },
    { path: '/dataset', component: Dataset },
    { path: '/settings', component: Settings }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router