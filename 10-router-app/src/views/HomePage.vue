<template>
  <div>
    <button class="btn btn-success btn-sm mb-2" @click="$router.push({ name: 'NewBookmark' })">+ Ekle</button>
    <div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookmarkList" :key="bookmark">
          <th scope="row">{{ bookmark.id }}</th>
          <td> {{bookmark.title}} </td>
          <td>
              <a :href="bookmark.url" target="_blank"> {{ bookmark.url }} </a>
          </td>
          <td> {{bookmark.description}} </td>
          <td>
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bookmarkList : []
        }
    },
    created() {
        this.$appAxios.get("/bookmarks").then((bookmark_list_response) => {
            this.bookmarkList = bookmark_list_response.data || []
            //console.log(bookmark_list_response);
            
        });
    },
    methods: {
        deleteBookmark(bookmark){
            this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then(delete_response => {
                console.log(delete_response);
                if(delete_response.status == 200) {
                    this.bookmarkList = this.bookmarkList.filter(b => b.id != bookmark.id );
                }
            })
        }
    }
};
</script>