import { createStore } from "vuex";
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store = createStore({
    namespaced: true,
    state: {
        mainName: 'erdisener'
    },
    modules: {
        contact,
        taskmanager
    }
});


export default store;