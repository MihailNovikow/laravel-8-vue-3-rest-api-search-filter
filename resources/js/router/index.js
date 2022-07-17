import { createRouter, createWebHistory } from "vue-router";

import AdsIndex from '../components/ads/AdsIndex'
import AdsCreate from '../components/ads/AdsCreate'
import AdsEdit from '../components/ads/AdsEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'ads.index',
        component: AdsIndex
    },
    {
        path: '/ads/create',
        name: 'ads.create',
        component: AdsCreate
    },
    {
        path: '/ads/:id/edit',
        name: 'ads.edit',
        component: AdsEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
