import { createRouter, createWebHistory } from 'vue-router';

import EquipmentIndex from '../components/equipments/EquipmentIndex.vue';
import EuipmentShow from '../components/equipments/EquipmentShow.vue';
import EquipmentCreate from '../components/equipments/EquipmentCreate.vue';
import EquipmentEdit from '../components/equipments/EquipmentEdit.vue';

const routes = [
    {
        path: '/home',
        name: 'equipments.index',
        component: EquipmentIndex
    },
    {
        path: '/equipments/:id/show',
        name: 'equipments.show',
        component: EuipmentShow,
        props: true
    },
    {
        path: '/equipments/:id/edit',
        name: 'equipments.edit',
        component: EquipmentEdit,
        props: true
    },
    {
        path: '/equipments/create',
        name: 'equipments.create',
        component: EquipmentCreate,
    },
    { path: "/:pathMatch(.*)", component: { template: "Not found"} }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
