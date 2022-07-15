require('./bootstrap');
import store from './store/index';
import { createApp } from "vue";
import router from './router/index';
import EquipmentIndex from './components/equipments/EquipmentIndex.vue';

import Equipment from './components/equipments/Equipment.vue';
import Equipments from './components/equipments/Equipments.vue'
const app = createApp({
    components: {
        EquipmentIndex,
        Equipments,
        Equipment
    },
}).use(router).mount('#app')
