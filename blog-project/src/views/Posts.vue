<template>
  <div class="posts">
    <div v-if="User">
      <p>Hi {{ User }}</p>
    </div>
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="post_title">Başlık:</label>
          <input type="text" name="post_title" v-model="form.post_title" />
        </div>
        <div>
          <textarea name="post_content" v-model="form.post_content" placeholder="Bir şeyler yazın..."></textarea>
        </div>
        <div>
          <input type="date" name="post_date" v-model="form.post_date" />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
    <div class="posts" v-if="Posts">
      <ul>
        <li v-for="gonderi in Posts" :key="gonderi.POST_ID">
          <div id="post-div">
            <p>{{ gonderi.POST_TITLE }}</p>
            <p>{{ gonderi.POST_CONTENT }}</p>
            <p>{{ gonderi.POST_DATE }}</p>
            <p>Blog yazarı: {{ gonderi.MEMBER_NICK }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Herhangi bi blog yazısı yoktur!</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Posts",
  components: {},
  data() {
    return {
      form: {
        post_title: "",
        post_content: "",
        post_date: "",
      },
    };
  },

  created: function () {
    this.GetPosts();
  },

  computed: {
    ...mapGetters({ Posts: "StatePosts", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreatePost", "GetPosts"]),
    async submit() {
      
        let postData = new FormData();
        postData.append("post_title", this.form.post_title);
        postData.append("post_content", this.form.post_content);
        postData.append("post_date", this.form.post_date);
        let result = await this.CreatePost(postData);
        console.log(result.data);
         await this.CreatePost(this.form);

    },
  
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}
ul {
  list-style: none;
}
#post-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>