require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router/router';
import AdsIndex from './components/ads/AdsIndex';
import store from './store';
import AdPageCompositionApi from './pages/AdPageCompositionApi';
createApp({
    components: {
        AdsIndex,
        AdPageCompositionApi
    }
})
.use(router)
.use(store)
.mount('#app')
