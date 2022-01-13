<template>
<div>

    <h1>Home</h1>
    <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sequi labore in, aliquid quis velit temporibus minima laudantium aut. Quis, ad. Rerum aspernatur consequuntur labore voluptatum nobis quas accusamus! Cum.
    </p> 
    <input type="text" @keydown.enter="goToDetails">
</div>
</template>


<script>
export default {
    methods: {
        goToDetails(e) {
            //this.$router.push(`/detay/${e.target.value}`);
            this.$router.push({
                name: "DetailPage",
                params: {
                    userID: e.target.value
                },
                query: {
                    type: "DetailAuth",
                    user: "erdisener"
                }
            });
        }
    }
}
</script>