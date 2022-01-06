<template>
    <h3 class="bg-red text-white">
        Red components
    </h3>
</template>

<script>
export default {
    mounted() {
        console.log("Red mounted");
    },
    activated() {
        console.log("Red activated");
    },
}
</script>