import {ref, computed} from 'vue'

export default function useSortedAds(ads) {
    const selectedSort = ref('')
    const sortedAds = computed(() => {
        return [...ads.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    })

    return {
        selectedSort, sortedAds
    }
};
