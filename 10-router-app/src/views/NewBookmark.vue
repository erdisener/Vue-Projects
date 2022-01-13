<template>
  <div class="form-area card border p-2">
  
    <div class="mb-3">
        <label for="title" class="form-label">Başlık</label>
        <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="baslik giriniz" />
    </div>
    <div class="mb-3">
        <label for="url" class="form-label">URL</label>
        <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="url" />
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Açıklama</label>
        <textarea type="text" v-model="userData.description"  class="form-control" id="description" placeholder="açıklama giriniz" />
    </div>
     <div class="d-flex justify-content-end m-2">

      <button type="submit" class="btn btn-sm btn-danger m-1" @click="$router.push({ name: 'HomePage'})" >İptal</button>
      <button type="submit" class="btn btn-sm btn-primary m-1" @click="onSave">Kaydet</button>
     </div>
  
  </div>
</template>



<script>
export default {
    data() {
        return {
            userData: {
                title: null,
                url: null,
                description: null

            }
        }
    },
    methods: {
        onSave() {
            console.log(this.userData);
            this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
                console.log("save_response", save_response);
                this.resetData();
                this.$router.push("/");
            })
        },
        resetData() {
            Object.keys(this.userData).forEach(key => (this.userData[key] = null));
        }
    },

}
</script>