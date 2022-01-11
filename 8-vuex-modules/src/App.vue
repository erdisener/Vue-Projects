<template>
<p>
  {{ $store.state.mainName }}
</p>

<p>
  {{ $store.state.contact.contactName }}
</p>

<pre> {{ musteriAdi }} </pre>

</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'App',
  created() {
    console.log(this.$store.getters["contact/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriAdi: "contact/_contactName"
    })
  }
}
</script>