import axios from "axios";

export const adsModule = {
    state: () => ({
        ads: [],
        isAdsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
        ]
    }),
    getters: {
        sortedAds(state) {
            return [...state.ads].sort((ad1, ad2) => ad1[state.selectedSort]?.localeCompare(ad2[state.selectedSort]))
        },
        sortedAndSearchedAds(state, getters) {
            return getters.sortedAds.filter(ad => ad.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setAds(state, ads) {
            state.ads = ads;
        },
        setLoading(state, bool) {
            state.isAdsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchAds({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('/api/ads', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setAds', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMoreAds({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('/api/ads', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setAds', [...state.ads, ...response.data]);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}
