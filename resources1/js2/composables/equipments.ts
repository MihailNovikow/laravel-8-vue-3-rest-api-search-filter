import { ref } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useEquipments() {
    const equipments = ref([])
    const equipment = ref([])
    const errors = ref('')
    const router = useRouter()

    const typeids = ['TP-Link TL-WR74', 'D-Link DIR-300', 'D-Link DIR-300 S'];
    const serialnums = [''];
    const descriptions = [''];

    const getEquipments = async () => {
        const response = await axios.get('/api/equipments');
        equipments.value = response.data.data;
    }

    const getEquipment = async (id: number) => {
        let response = await axios.get('/api/equipments/' + id)
        equipment.value = response.data.data;
    }

    const storeEquipment = async (data: object) => {
        errors.value = ''
        try {
            await axios.post('/api/equipments', data)
            await router.push({name: 'equipments.index'})
        } catch (e: any) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateEquipment = async (id: number) => {
        errors.value = ''
        try {
            await axios.put('/api/equipments/' + id, equipment.value)
            await router.push({name: 'equipments.index'})
        } catch (e: any) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const removeEquipment = async (id: number) => {
        await axios.delete('/api/equipments/' + id);
        await router.push({name: 'equipments.index'});
    }

    return {
        typeids,
        serialnums,
        descriptions,
        errors,
        equipments,
        equipment,
        getEquipment,
        getEquipments,
        storeEquipment,
        updateEquipment,
        removeEquipment
    }
}
