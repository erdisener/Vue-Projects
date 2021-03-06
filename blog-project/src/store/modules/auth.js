import axios from "axios";

const state = {
    user: null,
    posts: null,
};

const getters = {
   
    isAuthenticated: (state) => !!state.user,    
    StatePosts: (state) => state.posts,
    StateUser: (state) => state.user,
};

const actions = {
    // localde çalıştırmak isterseniz axios içerisinde basee url den sonraki kısım localde olduğu için böyle uzun yazıldı. normalde sadece login, post_get vb. olacak
    async LogIn({commit}, user) {
        let response = await axios.post('hizmet.php?page=login', user);
        console.log(response.data);
        if (response.status==200 && response.data.MSG_TYPE =="S") {     
            await commit('setUser', user.get('email'));
            console.log(user);
        } else {
            alert(response.data.MSG_CONTENT);
        }
      },

    async CreatePost({dispatch}, post) {
        let response = await axios.post('hizmet.php?page=post_add', post);
        console.log(post);
        console.log(response.data.post);
        return await dispatch('GetPosts');
    }, 


    async GetPosts({ commit }){
        let response = await axios.post('hizmet.php?page=post_get');
        commit('setPosts', response.data.post);
        //console.log(response.data);
      },

    async LogOut({commit}){
        let response = await axios.post('hizmet.php?page=logout');
        console.log(response.data);
        let user = null
        commit('logout', user)
    },
};

const mutations = {
    setUser(state, email){
        state.user = email;
    },
    setPosts(state, posts){
        state.posts = posts;
    },
    logout(state){
        state.user = null;
        state.posts = null;
    },

};


export default {
    state,
    getters,
    actions,
    mutations
};