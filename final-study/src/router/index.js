import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Main from '@/components/Main'
import Board from '@/components/Board'

//views
import Block from '@/views/Block'
import Dataset from '@/views/Dataset'
import Settings from '@/views/Settings'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Main },
    { path: '/board', name: 'Board', component: Board, 
        children: [
            { path: '', component: Block },
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