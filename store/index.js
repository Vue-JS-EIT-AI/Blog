import Vuex from 'vuex'
import axios from 'axios'

/*
Why do we create a function that is just an object which represents the store?
Ans: Because it should be callable by nuxt which will be executed on the server to setup the store.

*/
const createStore = () => {

    return new Vuex.Store(
        {
            state: {
                loadedPosts: [],
                token:null

            },
            mutations: {
                setPosts(state, posts) {
                    state.loadedPosts = posts
                },
                addpost(state, post) {
                    state.loadedPosts.push(post)
                },
                editpost(state, editedPost) {
                    const PostIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                    state.loadedPosts[PostIndex] = editedPost
                },
                setToken(state,token){
                    state.token=token
                },
                clearToken(state){
                    state.token=null
                }


            },
            actions: {
                //Special action by vuejs
                /**
                 * 1  This function is dispatched by the nuxt
                 */
                nuxtServerInit(vuexContext, context) {
                    console.log('servers side rendering')

                    //check the nuxt config --env
                    return axios.get(process.env.baseURL + '/posts.json')
                        .then(res => {
                            const postarray = []
                            for (const key in res.data) {
                                postarray.push({ ...res.data[key], id: key })

                            }
                            vuexContext.commit('setPosts', postarray)

                        })
                        .catch(e => context.error(e));

                    // return new Promise((resolve, reject) => {
                    //     setTimeout(() => {
                    //         vuexContext.commit('setPosts',[
                    //               {
                    //                 id: "1",
                    //                 title: "first zahid",
                    //                 PreviewText: " excel it ai",
                    //                 thumbnail: "img/imageLand.png",
                    //               },
                    //               {
                    //                 id: "2",
                    //                 title: "2nd zahid",
                    //                 PreviewText: "2  excel it ai",
                    //                 thumbnail: "img/imageLand.png",
                    //               },
                    //               {
                    //                 id: "3",
                    //                 title: "3rd zahid",
                    //                 PreviewText: "3  excel it ai",
                    //                 thumbnail: "img/imageLand.png",
                    //               }
                    //           ])
                    //       resolve();
                    //     }, 1500);

                    //   }) 

                },
                addpost(vuexContext, post) {
                    const createdPost = { ...post, updatedDate: new Date() }
                    return axios
                        .post(
                            "https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json?auth=" + vuexContext.state.token, createdPost

                        )
                        .then((res) => {
                            vuexContext.commit('addpost', { ...createdPost, id: res.data.name })

                        })
                        .catch((e) => console.log(e));
                },
                
                                    //with authentication

                editpost(vuexContext, editedPost) {

                    return axios.put('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
                        .then(res => {
                            vuexContext.commit('editpost', editedPost)

                        })
                        .catch(e => console.log(e))


                },

                        //without authentication

                /*
                editpost(vuexContext, editedPost) {

                    return axios.put('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
                        .then(res => {
                            vuexContext.commit('editpost', editedPost)

                        })
                        .catch(e => console.log(e))


                },*/



                setPosts(vuexContext, posts) {
                    vuexContext.commit('setPosts', posts)
                },
                authenticateUser(vuexContext, authData) {
                    let authUrl = "";
                    if (!authData.isLogin) {
                        authUrl =
                            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
                            process.env.firebaseApiKey;
                    } else {
                        authUrl =
                            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
                            process.env.firebaseApiKey;

                        console.log("login is loading");
                    }
                    return axios
                        .post(
                            authUrl,

                            {
                                email: authData.email,
                                password: authData.password,
                                returnSecureToken: true,
                            }
                        )

                        .then((res) => {
                            vuexContext.commit('setToken',res.data.idToken)
                            localStorage.setItem('token',res.data.idToken)
                            vuexContext.dispatch('setLogoutTimer',res.data.expiresIn*1000)
                            localStorage.setItem('tokenExpiration',new Date().getTime()+ res.data.idToken*1000)

                            console.log(res);
                        })
                        .catch((e) => console.log(e));


                },
                setLogoutTimer(vuexContext, duration){
                    setTimeout(()=>{
                        vuexContext.commit('clearToken')
                    },duration)
                },
                initauth(vuexContext){
                    const token=localStorage.getItem('token');
                    const expirationDate=localStorage.getItem('tokenExpiration');
                    if(new Date().getTime()> +expirationDate || !token){
                        return;
                    }
                    vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
                    vuexContext.commit('setToken',token);
                }
            },
            getters: {
                loadedPosts(state) {
                    return state.loadedPosts
                },
                isAuthenticated(state){
                    return state.token !=null
                }
            }
        }
    )


}

export default createStore













// import Vuex from 'vuex'

// /*
// Why do we create a function that is just an object which represents the store?
// Ans: Because it should be callable by nuxt which will be executed on the server to setup the store.

// */
// const createStore = () => {

//     return new Vuex.Store(
//         {
//             state: {
//                 loadedPosts: []

//             },
//             mutations: {
//                 setPosts(state, posts) {
//                     state.loadedPosts = posts
//                 }
//             },
//             actions: {
//                 //Special action by vue
//                 setPosts(vuexContext, posts) {
//                     vuexContext.commit('setPosts', posts)
//                 }
//             },
//             getters: {
//                 loadedPosts(state) {
//                     return state.loadedPosts
//                 }
//             }
//         }
//     )


// }

// export default createStore