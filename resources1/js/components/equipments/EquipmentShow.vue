<template>
   <div class="container">
       <div>
            <h2 class="card-subtitle mb-2 text-muted">{{ equipment.id}}</h2>
            <h6 class="card-subtitle mb-2 text-muted">typeid: {{ equipment.typeid}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">serial-num: {{ equipment.serialnum}}</h6>
            <h6 class="card-subtitle mb-2 text-muted">description: {{ equipment.description}}</h6>
       </div>
       <div>
            <router-link id="editBtn" :to="{ name: 'equipments.edit' , params: { id: `${equipment.id}` }}">Edit</router-link>&nbsp;
            <a id="deleteBtn" @click="deleteEquipment(equipment)" href="#" role="button">Delete</a>&nbsp;
        </div>
       <div class="row">
           <div class="col-12 border">
               <div class="card" style="width: 100%;  margin: 10px; padding: 10px;" v-for="page in 10" :key="page">
                   <div class="card-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius facilisis dolor,
                           at porttitor nunc luctus sit amet. In tincidunt orci id mi finibus dapibus. Proin tempus,
                           lorem eu dapibus luctus, elit ante facilisis nulla, ac tristique augue justo eu turpis.
                           Donec eu enim a sem malesuada vulputate. In at placerat ex. Nullam tincidunt dolor et magna condimentum,
                            eu pulvinar lorem dictum. Phasellus venenatis rutrum imperdiet. Aenean eu massa lobortis, condimentum nunc sed,
                            molestie sem. Integer a interdum libero. Suspendisse mollis vehicula ligula a feugiat. Curabitur non odio sit amet mi
                            condimentum iaculis. Fusce sed tincidunt sem. Aenean porta viverra neque tristique ultricies.
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script lang='ts'>
import useEquipments from '../../composables/equipments';
import { onMounted } from 'vue';

export default {
   props: {
       id: {
           required: true,
           type: String
       }
   },

   setup(props: any) {
       const { equipment, getEquipment, removeEquipment } = useEquipments()

       onMounted(() => getEquipment(props.id))

       const deleteEquipment = async ( equipment: any ) => {
           if (!window.confirm(`delete  ${equipment.id}?`)) {
                return
            }

           await removeEquipment(props.id);
       };

       return {
           equipment,
           deleteEquipment
       }
   }
}
</script>
