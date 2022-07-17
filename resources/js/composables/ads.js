import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useAds() {
    const ads = ref([])
    const ad = ref([])
    const router = useRouter()
    const errors = ref('')

    const getAds = async () => {
        let response = await axios.get('/api/ads')
        ads.value = response.data.data;
    }

    const getAd = async (id) => {
        let response = await axios.get('/api/ads/' + id)
        ad.value = response.data.data;
    }

    const storeAd = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/ads', data)
            await router.push({name: 'ads.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateAd = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/ads/' + id, ad.value)
            await router.push({name: 'ads.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyAd = async (id) => {
        await axios.delete('/api/ads/' + id)
    }


    return {
        ads,
        ad,
        errors,
        getAds,
        getAd,
        storeAd,
        updateAd,
        destroyAd
    }
}
