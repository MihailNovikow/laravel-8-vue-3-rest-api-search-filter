import {ref, computed} from 'vue'

export default function useSortedAds(sortedAds) {
    const searchQuery = ref('')

    const sortedAndSearchedAds = computed(() => {
        return sortedAds.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedAds
    }
};
