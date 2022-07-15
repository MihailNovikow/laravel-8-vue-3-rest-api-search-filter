<template>
    <div class="container">
        <div class="input-group mb-3">
            <input v-model="query" type="text" class="form-control" placeholder="Equipment serialnum"
                   aria-label="Equipment serialnum"
                   aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-primary" @click="searchEquipments" @keyup.enter="searchEquipments" type="button">
                    Search
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Searchbar",
        data() {
            return {
                query: '',
            }
        },
        watch: {
            query: {
                handler: _.debounce(function () {
                    this.searchEquipments()
                }, 100)
            }
        },
        methods: {
            searchEquipments() {
                this.$store.dispatch('SEARCH_EQUIPMENTS', this.query)
            }
        }
    }
</script>

<style scoped>

</style>