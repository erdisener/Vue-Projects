<template>
<div class="container">
<div class="d-flex justify-content-between">

<button class="red" @click="activeComponent='Red'">Red</button>
<button class="green" @click="activeComponent='Green'">Green</button>
<button class="blue" @click="activeComponent='Blue'">Blue</button>
</div>

<!--   <Red v-if="activeComponent == 'Red'" class="mb-2" />
  <Green v-if="activeComponent == 'Green'" class="mb-2"/>
  <Blue v-if="activeComponent == 'Blue'" class="mb-2"/> -->

{{ activeComponent }}
<keep-alive>

  <component :is="activeComponent" />
</keep-alive>

</div>
</template>


<script>

import Red from "@/components/Red"
import Green from "@/components/Green"
import Blue from "@/components/Blue"


export default {
  components: {
    Red,
    Green,
    Blue,
  },
  data() {
    return {
      activeComponent: "Red"
    };
  }
}
</script>