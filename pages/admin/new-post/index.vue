<template>
  <div class="admin-post-page">
    <section class="new-post-form">
      Hello
      <AdminPostForm @submit="Onsubmit"/>
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
  methods:{
    Onsubmit(postData){
      axios.post('https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts.json',postData)
      .then (res => console.log(res))
      .catch(e => console.log(e))

    }


  }
  
}
</script>

<style scoped>

.admin-post-page{
  /* background-color: aqua; */
  padding: 60px;

}
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>