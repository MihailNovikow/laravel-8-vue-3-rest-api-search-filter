import Main from "../pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "../pages/UserPage";
import About from "../pages/About";
import AdIdPage from "../pages/AdIdPage";
import AdPageWithStore from "../pages/AdPageWithStore";
import AdPageCompositionApi from "../pages/AdPageCompositionApi";
import AdsIndex from '../components/ads/AdsIndex';
import AdsCreate from '../components/ads/AdsCreate';
import AdsEdit from '../components/ads/AdsEdit';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/ads',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/ads/:id',
        component: AdIdPage
    },
    {
        path: '/store',
        component: AdPageWithStore
    },
    {
        path: '/composition',
        component: AdPageCompositionApi
    },
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
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
