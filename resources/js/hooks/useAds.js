import axios from "axios";
import {ref, onMounted} from 'vue';

export function useAds(limit) {
    const ads = ref([])
    const totalPages = ref(0)
    const isAdsLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('/api/ads', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            ads.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isAdsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        ads, isAdsLoading, totalPages
    }
}
