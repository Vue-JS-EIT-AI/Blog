<template>
  <section class="posts-list">
    <PostPrev
      title="Home Page Of BPPS "
      PreviewText="This is the BPP shops Home Page "
      id="1"
      thumbnail="img/imageLand.png"
      :is-admin="isAdmin"
    />
    <PostPrev
      title="Grocery "
      PreviewText="This is the BPP shops Grocery Page "
      id="2"
      thumbnail="img/imageLand.png"
      :is-admin="isAdmin"

    />
    <PostPrev
      title="Fashion "
      PreviewText="This is the BPP shops Fashion Page "
      id="3"
      thumbnail="img/imageLand.png"
      :is-admin="isAdmin"

    />
  </section>
</template>

<script>
import PostPrev from "@/components/PostsComp/PostPrev.Vue";

export default {
  components: { PostPrev },
  props:{
    isAdmin:{
      type:Boolean,
      default:false
    }
  }
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