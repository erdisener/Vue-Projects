<template>
    <button @click="updateName">Add User</button>
</template>

<script>
export default {
    methods: {
        
    updateName() {
        const userData = {id: new Date().getTime(), title: "Raf" + new Date().getTime(), type:"mobilya"}
        this.$store.dispatch("newItem", userData);
    },
    
    }
}
</script>