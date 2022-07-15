<template>
    <div class="container">
        <form @submit.prevent="saveEquipment">
             <div class="form-group">
                <label>typeid: </label>
                <select class="form-control" v-model="form.typeid" id="typeid">
                <option v-for="typeid in typeids" :key="typeid">{{ typeid }}</option>
                </select>
            </div>
           <div class="form-group">
                <label>serialnum: </label>
                <input type="text" class="form-control" placeholder="equipment serialnum" v-model="form.erialnum" id="serialnum">
            </div>
            <div class="form-group">
                <label>description: </label>
                <input type="text" class="form-control" placeholder="equipment description" v-model="form.description" id="description">
            </div>
            <div class="form-group"><br/>
                <button :disabled="!submittable" type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script lang='ts'>
import useEquipments from '../../composables/equipments';
import { reactive, computed } from 'vue';

export default {
    setup() {
        const { errors, storeEquipment, serialnums, descriptions } = useEquipments();

        const form = reactive({
            typeid: '',
            serialnum: '',
            description: null
            
        })

        const submittable = computed(() => {
            return form.typeid !== '' && form.serialnum !== '' && form.description !== null;
        });


        const saveEquipment = async () => {
            await storeEquipment({ ...form })
        }

        return {
            form,
            errors,
            saveEquipment,
            serialnums,
            descriptions,
            submittable
        }
    }
}
</script>
