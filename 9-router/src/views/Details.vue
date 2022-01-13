<template>
<div>

    <h1>{{ $route.params.userID }} </h1>
    <p>Açıklamalar açıklamalar</p>
  
    <button @click="goBack">Geri</button>
</div>
</template>

<script>
export default {
    created() {
        console.log(this.$route);
    },
    methods: {
        goBack() {
            this.$router.push("/");
        }
    }
}
</script>