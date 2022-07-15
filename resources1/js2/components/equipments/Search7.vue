<template>

   <div class="panel panel-default">
   <div class="panel-heading">
         <strong> All equipments</strong></div>
            <div class="row">
                 <div class="search-wrapper panel-heading col-sm-12">
    
                     <input type="text" class="form-control input-sm" placeholder="Search Data" v-model="query" @keyup="fetchData()" />

                </div>                        
            </div>
            <table class="table table-bordered table-striped">
							<tr>
								<th>serialnum</th>
								
							</tr>
							<tr v-for="row in allData">
								<td>{{ row.serialnum }}</td>
							</tr>
							<tr v-if="nodata">
								<td colspan="2" text-align="center">No Data Found</td>
							</tr>
						</table>
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
   data:{
		allData:'',
		query:'',
		nodata:false
	},
	methods: {
		fetchData:function(){
			axios.get('', {
				query:this.query
			}).then(function(response){
				if(response.data.length > 0)
				{
					application.allData = response.data;
					application.nodata = false;
				}
				else
				{
					application.allData = '';
					application.nodata = true;
				}
			});
		}
	},
	created:function(){
		this.fetchData();
	}
}
</script>
