<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>




<script>
// PostList imported in the plugins folder core-components file and made global componenet

// import PostList from "@/components/PostsComp/PostList.Vue";

export default {
  middleware: 'log',
  components: {
    // PostList imported in the plugins folder core-components file and made global componenet
    // PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>




 <!-- 222222 -->


<!-- 



<script>
import PostList from "@/components/PostsComp/PostList.Vue";

export default {
  components: {
    PostList,
  },

 
  /*    just like asyncData() it runs either on the server or on the client 

  */

  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "first zahid",
              PreviewText: " excel it ai",
              thumbnail: "img/imageLand.png",
            },
            {
              id: "2",
              title: "2nd zahid",
              PreviewText: "2  excel it ai",
              thumbnail: "img/imageLand.png",
            },
            {
              id: "3",
              title: "3rd zahid",
              PreviewText: "3  excel it ai",
              thumbnail: "img/imageLand.png",
            },
          ],
        });
      }, 1500);

      // reject(new Error())
    }) 
    // here is the difference between fetch and asyncData()
      .then((data) => {
        context.store.commit('setPosts',data.loadedPosts)
      })
      .catch((e) => {
        context.error(new Error());
      });
  },
  // created(){
  //   this.$store.dispatch('setPosts',this.loadedPosts)
  // }

  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts 
    }
  }
};

</script>

 -->










             <!-- 111 -->

<!-- 
<script>
import PostList from "@/components/PostsComp/PostList.Vue";

export default {
  components: {
    PostList,
  },

  /* promised based approach so we don't need the callback
  1.  instead of calling resolve we can call reject commented below to check the error
  */

  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "first zahid",
              PreviewText: " excel it ai",
              thumbnail: "img/imageLand.png",
            },
            {
              id: "2",
              title: "2nd zahid",
              PreviewText: "2  excel it ai",
              thumbnail: "img/imageLand.png",
            },
          ],
        });
      }, 1500);

      // reject(new Error())
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(new Error());
      });
  },
  created(){
    this.$store.dispatch('setPosts',this.loadedPosts)
  }
};
</script> -->

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>