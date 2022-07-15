<template>

   <div class="panel panel-default">
   <div class="panel-heading">
         <strong> All equipments</strong></div>
            <div class="row">
                 <div class="search-wrapper panel-heading col-sm-12">
                     <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                     
                </div>                        
            </div>
        <div class="table-responsive">
            <table v-if="equipments.length" class="table">
                <thead>
                    <tr>
                         <th>Equipments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in resultQuery">
                        <td><a v-bind:href="item.uri" target="_blank">{{item.serialnum}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
   
   </template>
   <script>
import getEquipments from '../../composables/equipments';
import { onMounted } from 'vue';

export default {
   data() {
    return {
        searchQuery: null,
        equipments:[
           {serialnum:""},
        ]
    };
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.equipments.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.equipments;
      }
    }
  }
}
   </script>