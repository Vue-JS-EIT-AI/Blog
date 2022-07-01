<template>
    <PostList :posts="loadedPosts" />
    
</template>

<script>
import axios from 'axios'
import PostList from "@/components/PostsComp/PostList.Vue";

export default {
     components: {
    PostList,
  },
    data(){
        return {
            loadedPosts:[]
        }
    },
    created(){
       axios.get('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json')
                    .then(res=>{
                        // const postarray=[]
                        for (const key in res.data){
                            this.loadedPosts.push({...res.data[key],id:key})

                        }
                        
                    })
                    .catch(e =>context.error(e));
    },
 
}
</script>