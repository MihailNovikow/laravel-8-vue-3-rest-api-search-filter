require('./bootstrap');

import { createApp } from "vue";
import router from './router/index';
import EquipmentIndex from './components/equipments/EquipmentIndex.vue';
const app = createApp({
    components: {
        EquipmentIndex,
    },
}).use(router).mount('#app')
