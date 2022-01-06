<template>
  <div class="container">
    <h3 class="mb-2">Shopping List</h3>
    <hr/>
    <div>
      <input @keydown.enter="onSave" type="text" name="" id="" placeholder="aradığınız ürünü yazınız">
    </div>
    <ul v-if="ItemList.length > 0" >
      <li v-for="item in ItemList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span> {{item.title}} </span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue">
      Sepetiniz boştur!
    </div>
    <small class="text-blue d-flex justify-content-end mt-3">Sepetinizde {{itemCount}} adet sipariş vardır</small>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      ItemList : []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log("items_response :>> ", items_response);
      this.ItemList = items_response.data || [];
    })
  },
  methods: {
    onSave(e) {
        const saveObject = {
          title: e.target.value, 
          created_at: new Date(), 
          completed: false
        }
        axios.post("http://localhost:3000/items", saveObject).then(save_response => {
          console.log(save_response);
          this.ItemList.push(save_response.data);
          e.target.value = "";
          e.target.focus();
        });
      },
      onDelete(item) {
        axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response=> {
          console.log(delete_response);
          this.ItemList = this.ItemList.filter(i => i.id != item.id)
        })
      }
  },
  computed: {
    itemCount() {
      return this.ItemList.length || 0;
    }
  }
}
</script>