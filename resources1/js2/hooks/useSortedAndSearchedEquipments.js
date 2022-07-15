import {ref, computed} from 'vue'

export default function useSortedEquipments(sortedEquipments) {
    const searchQuery = ref('')

    const sortedAndSearchedEquipments = computed(() => {
        return sortedEquipments.value.filter(equipment => equipment.serialnum.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedEquipments
    }
};
