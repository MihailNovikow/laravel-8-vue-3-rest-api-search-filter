import {createStore} from "vuex";
import {adsModule} from "../store/adsModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        ad: adsModule
    }
})
