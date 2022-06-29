<template>
    <admin class="admin-post-page">
        <section class="update-form">
      <AdminPostForm :post="loadedPosts"/>
            
        </section>
    </admin>
</template>

<script>
import AdminPostForm from '@/components/AdminComp/AdminPostForm.vue'


export default {
  layout:'admin',
  components:{
    AdminPostForm
  },
  data(){
    return{
        loadedPosts:{
            author:'zahid',
            title : 'my awesome post',
            content: 'super amazing , thanks for that!',
            thumbnailLink: 'islami.png'

        }
    }
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