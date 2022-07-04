<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>



<script>
        // component imported in the plugins folder core-components file and made global componenet

// import PostList from "@/components/PostsComp/PostList.Vue";
// import AppButton from "@/components/UI/AppButton.vue";

export default {
  layout:'admin',
  components: {
    // PostList,
    // AppButton,
  },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
}
}
</script>


<style scoped>
.admin-page {
  padding: 80px;
  
}

.new-post {
  text-align: center;
  border-bottom: 2px solid rgb(139, 40, 40);
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
  /* background-color: aqua; */
}
</style>
