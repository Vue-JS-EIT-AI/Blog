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
                loadedPosts: []

            },
            mutations: {
                setPosts(state, posts) {
                    state.loadedPosts = posts
                }
            },
            actions: {
                //Special action by vuejs
                /**
                 * 1  This function is dispatched by the nuxt
                 */
                nuxtServerInit(vuexContext,context){
                    console.log('servers side rendering')

                    return axios.get('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json')
                    .then(res=>{
                        const postarray=[]
                        for (const key in res.data){
                            postarray.push({...res.data[key],id:key})

                        }
                        vuexContext.commit('setPosts',postarray)

                    })
                    .catch(e =>context.error(e));

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
                setPosts(vuexContext, posts) {
                    vuexContext.commit('setPosts', posts)
                }
            },
            getters: {
                loadedPosts(state) {
                    return state.loadedPosts
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