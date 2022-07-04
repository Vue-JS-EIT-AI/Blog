<template>
    <PostList :posts="loadedPosts" />
    
</template>

<script>
import axios from 'axios'
        // PostList imported in the plugins folder core-components file and made global componenet
// import PostList from "@/components/PostsComp/PostList.Vue";

export default {
     components: {
        // PostList imported in the plugins folder core-components file and made global componenet
        
    // PostList,
  },
    data(){
        return {
            loadedPosts:[]
        }
    },
    created(){
       axios.get(process.env.baseURL+'/posts.json')
       //check the nuxt config --env
                    .then(res=>{
                        // const postarray=[]
                        for (const key in res.data){
                            this.loadedPosts.push({...res.data[key],id:key})

                        }
                        
                    })
                    .catch(e =>context.error(e));
    },
    head:{
        title:'nuxt client side rendering'
    }
 
}
</script>