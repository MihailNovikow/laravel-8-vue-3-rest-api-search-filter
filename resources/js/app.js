require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router/index'
import AdsIndex from './components/ads/AdsIndex'

createApp({
    components: {
        AdsIndex
    }
}).use(router).mount('#app')
