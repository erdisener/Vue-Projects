import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            name: "Erdi",
            sname: "Sener",
            age: 32,
            password: 34546565767,
            tckn: 1234567890
        },
        theme: "dark",
        permissions: [1,2,3,4,5],
        userList : ["Erdi", "Ayşe", "Mert", "Hande"],
        itemList : [
            {id: 1, title: "Masa", type: "mobilya"},
            {id: 2, title: "Sandalye", type: "mobilya"},
            {id: 3, title: "TV", type: "elektronik"},
            {id: 4, title: "Monitor", type: "elektronik"},
            {id: 5, title: "Bardak", type: "ev eşyası"},
        ]
    },
    mutations: {
        newItem(state, item) {
            state.itemList.push(item);
        }
    },
    actions: {
        newItem(context, item) {
            setTimeout(() => {
                context.commit("newItem", item);
            }, 2000);
        }
    },
    getters: {
        woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
        activeUser(state) {
            const user = {
                ...state.user
            };
            delete user.password;
            return user;
        }
    }
});

export default store;