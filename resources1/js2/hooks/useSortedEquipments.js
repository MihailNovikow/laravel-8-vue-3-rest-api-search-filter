import {ref, computed} from 'vue'

export default function useSortedEquipments(equipments) {
    const selectedSort = ref('')
    const sortedEquipments = computed(() => {
        return [...equipments.value].sort((equipment1, equipment2) => equipment1[selectedSort.value]?.localeCompare(equipment2[selectedSort.value]))
    })

    return {
        selectedSort, sortedEquipments
    }
};
