<template>
  <section class="posts-list">
    <Postprev
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :PreviewText="post.PreviewText"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :is-admin="isAdmin"
    />
    <!-- <Postprev
      title="Grocery "
      PreviewText="This is the BPP shops Grocery Page "
      id="2"
      thumbnail="img/imageLand.png"
      :is-admin="isAdmin"

    />
    <Postprev
      title="Fashion "
      PreviewText="This is the BPP shops Fashion Page "
      id="3"
      thumbnail="img/imageLand.png"
      :is-admin="isAdmin"

    /> -->
  </section>
</template>

<script>
import Postprev from "@/components/PostsComp/PostPrev.vue";

export default {
  name: "PostList",
  components: { Postprev },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>