const app = Vue.createApp({
    data () {
        return {
            counter: 0,
            sisu9 : {
                title: "Sisu9 Web sitesi",
                url: "https://sisu9.com",
                target: "_blank"
            }
        }
    },

    methods: {
        changeTitle() {
            this.sisu9.title = "Hooop"
        },
    },

    
}).mount("#app")