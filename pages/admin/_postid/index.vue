<template>
    <div class="admin-post-page">
        <section class="update-form">
      <AdminPostForm :post="loadedPosts" @submit='Onsubmitted'/>
            
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/AdminComp/AdminPostForm.vue'
import axios from 'axios'


export default {
  layout:'admin',
  components:{
    AdminPostForm
  },
  // data(){
  //   return{
  //       loadedPosts:{
  //           author:'zahid',
  //           title : 'my awesome post',
  //           content: 'super amazing , thanks for that!',
  //           thumbnail: 'islami.png',
  //           PreviewText:'asd'

  //       }
  //   }
  // },

  // computed:{
  //   loadedPosts(){
  //     return this.$store.getters.loadedPosts
  //   }
  // }


  asyncData(context){
  return axios.get('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/'+context.params.postid+'.json')
  .then(res=>{
    return{
      loadedPosts: {...res.data,id:context.params.postid}
    }
  })
  .catch(e=>context.error(e))

},

methods:{
  Onsubmitted(editedpost){
    this.$store.dispatch('editpost',editedpost)
    .then(()=>{
      this.$router.push('/admin')
    })



    /*        Used in the Store vue state management

    axios.put('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/'+this.$route.params.postid+'.json', editedpost)
    .then(res=> {
      this.$router.push('/admin')
    })
    .catch(e=>console.log(e))
    console.log(editedpost)

    */

  }
},
created(){
  console.log(this.$route.params.postid)
  console.log(this.loadedPosts)

}

  
}
</script>

<style scoped>

.update-form{
  width: 90%;
  margin: 20px auto ;
}
@media (min-width: 780px){
  .update-form{
    width: 500px;
  }
}

</style>