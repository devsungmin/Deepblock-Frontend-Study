import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Main from '@/components/Main'
import Board from '@/components/Board'

//views
import HomeBoard from '@/views/HomeBoard'
import BlockBoard from '@/views/BlockBoard'
import DatasetBoard from '@/views/DatasetBoard'
import SettingBoard from '@/views/SettingBoard'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Main },
    { path: '/board', name: 'Board', component: Board, 
        children: [
            { path: '', component: HomeBoard },
            { path: 'datasetboard', component: DatasetBoard },
            { path: 'blockboard', component: BlockBoard },
            { path: 'settingboard', component: SettingBoard } 
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router