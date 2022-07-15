import axios from "axios";
import {ref, onMounted} from 'vue';

export function useEquipments(limit) {
    const equipments = ref([])
    const totalPages = ref(0)
    const isEquipmentsLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('/api/equipments', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            equipments.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isEquipmentsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        equipments, isEquipmentsLoading, totalPages
    }
}
