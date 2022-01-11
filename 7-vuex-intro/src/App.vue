<template>
<div class="container">
<NewUser />
<UserList />

</div>
</template>

<script>

import UserList from "@/components/UserList";
import NewUser from "@/components/NewUser";

export default {
  name: "App",
  
  components: {
    UserList,
     NewUser
  },
  created() {

  }
  

}
</script>