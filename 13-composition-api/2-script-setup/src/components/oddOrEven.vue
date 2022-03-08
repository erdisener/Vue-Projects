<template>
<div>

    <h1>ssssssss</h1>
    <h3> {{ result }} </h3>
    <h3> {{ counter }} </h3>
</div>

</template>

<script setup>
import {computed, watch} from "vue";

const props = defineProps({counter: Number});
const emit = defineEmits(["odd-event"]);

const result = computed(() => (props.counter % 2 == 0 ? "Çift" : "Tek"));

watch(result, (result) => {
    if(result == "Tek") emit("odd-event", true);
});

</script>