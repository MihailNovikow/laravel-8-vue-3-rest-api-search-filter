let actions = {
    SEARCH_EQUIPMENTS({commit}, query) {
        let params = {
            query
        };
        axios.get(`/api/search`, {params})
            .then(res => {
                if (res.data)
                 commit('SET_EQUIPMENTS', res.data)
                    console.log('request sent successfully')

            }).catch(err => {
            console.log(err)
        })
    },
    GET_EQUIPMENTS({commit}) {
        axios.get('/api/products')
            .then(res => {
                {
                    commit('SET_EQUIPMENTS', res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default actions
