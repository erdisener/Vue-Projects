<template>
  <div>
  <h3>{{title}}</h3>
  <input type="text" v-model="title" />
  <p> {{titleLengthMessage}} </p>
  <button @click="toggleIt">Toggle</button>

  <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aperiam praesentium ut quia reprehenderit, enim atque delectus quisquam ipsam dolorum, perferendis minus iusto repellat sunt qui voluptatibus illo doloribus quae?</p>
  <button @click="counter++">{{counter}}{{oddOrEven}}</button>

  <hr />

  <input type="text" v-model="searchText">
  <p v-if="isTyping">Şu an yazıyor...</p>

  </div>
</template>


<script>

import Counter from "./composables/Counter.js"
import Header from "./composables/Header.js"
import Toggle from "./composables/Toggle.js"
import Search from "./composables/Search.js"

export default {

  setup() {

    const { counter, oddOrEven } = Counter();
    const { title, titleLengthMessage } = Header();
    const {show, toggleIt} = Toggle();
    const {searchText, isTyping} = Search();

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    }
  }
}
</script>