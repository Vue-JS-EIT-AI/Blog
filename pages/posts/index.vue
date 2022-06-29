<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>


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
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>