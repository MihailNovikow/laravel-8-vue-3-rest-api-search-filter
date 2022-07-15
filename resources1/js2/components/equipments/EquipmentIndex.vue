<template>

    <div class="container">
        <div class="row">
            <router-link :to="{ name: 'equipments.create' }" class="text-sm font-medium nav-link">
                <button type="button" class="btn btn-primary">Add equipment</button>
            </router-link>
        </div>
        <div class="card" style="width: 18rem; float: left; margin: 5px" v-for="equipment in equipments" :key="equipment.id">
            <router-link :to="{ name: 'equipments.show' , params: { id: equipment.id }}">
                <div class="card-body">
                        <h5 class="card-title text-center">{{ equipment.id}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-center">typeid: {{ equipment.typeid}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted text-center">serialnum: {{ equipment.serialnum}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted text-center">Pblisher: {{ equipment.description}}</h6>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
import useEquipments from '../../composables/equipments';
import Search from '../../components/equipments/Search.vue';
import { onMounted } from 'vue';
export default {
    setup() {
        const { equipments, getEquipments } = useEquipments();
        onMounted(getEquipments);
        return {
            equipments,
            Search
        };
    },
    components: { Search }
}
</script>