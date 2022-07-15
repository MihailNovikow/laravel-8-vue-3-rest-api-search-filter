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
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script lang='ts'>
import useEquipments from '../../composables/equipments';
import { onMounted, computed } from 'vue';
export default {
    props: {
       id: {
           required: true,
           type: String
       }
   },
    setup(props: any) {
        const { errors, serialnums, descriptions, equipment, getEquipment, updateEquipment } = useEquipments();
        onMounted(() => getEquipment(props.id))
        const editEquipment = async () => {
            await updateEquipment(props.id);
        }
        return {
            equipment,
            errors,
            editEquipment,
            serialnums,
            descriptions,
        }
    }
}
</script>