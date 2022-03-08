<template>
      <section class="mt-4">
        <input @keydown.enter="newItem" type="text" placeholder="Giriş" class="w-full text-gray-600 px-2">
      </section>
</template>

<script>
export default {
    props: {
        AddTodo: Function,
    },
    setup(props) {
        const newItem = (event) => {
            props.AddTodo(event.target.value);
            event.target.value = "";
        }
        return { newItem } 
    },
}
</script>