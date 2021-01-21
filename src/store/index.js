import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        lly: "我希望我是一朵云"
    },
    getters: {
        isLogin(state, payload) {
            console.log("getters", state, payload);
        }
    },
    modules: {

    }
});

export default store;