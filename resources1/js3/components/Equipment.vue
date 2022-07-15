<template>
    <div class="card">
        <img class="card-img-top" :src="equipment.image" :alt="equipment.name">
        <div class="card-body">
            <h5 class="card-title">{{equipment.typeid}}</h5>
             <p class="card-text">{{equipment.serialnum}}</p>
            <p class="card-text">{{equipment.description}}</p>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "Equipment",
        props: ['equipment']
    }
</script>

<style scoped>
    .card {
        cursor: pointer;
        margin-bottom: 8px;
    }
</style>