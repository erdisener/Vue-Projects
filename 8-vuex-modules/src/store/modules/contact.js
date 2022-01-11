export default {
    namespaced: true,
    state: {
        contactName: "sisu9.com",
        contactAress: "Canakkale"
    },
    mutations: {
        setItem(state, name) {
            state.contactName = name;
        }
    },
    getters: {
        _contactName: state => state.contactName
    }
}