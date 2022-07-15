<template>
    <div class="container">
        <div class="row" v-for="equipments in groupedEquipments">
            <div class="col-md-3 col-sm-6" v-for="equipment in equipments">
                <equipment class="animated fadeIn" :equipment="equipment"></equipment>
            </div>
            <div class="col w-100"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Equipment from '../components/Equipment'

    export default {
        name: "equipments",
        components: {
            Equipment
        },
        mounted() {
            this.$store.dispatch('GET_EQUIPMENTS')

            window.Echo.channel('search')
                .listen('.searchResults', (e) => {
                    this.$store.commit('SET_EQUIPMENTS', e.equipments)
                })

        },
        computed: {
            groupedequipments() {
                return _.chunk(this.equipments, 4);
            },
            ...mapGetters([
                'equipments'
            ])
        }
    }
</script>