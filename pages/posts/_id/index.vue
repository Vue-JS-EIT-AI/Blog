<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          <!--  adding the date pipe check in the datefilter.js in plugins  -->

          Last updated on -{{ loadedPosts.updatedDate | date }}
        </div>
        <div class="post-detail">Written By {{ loadedPosts.author }}</div>
      </div>
      <p class="post-content">
        Content Of the Post :<b>{{ loadedPosts.content }}</b>
      </p>
    </section>

    <section class="post-feedback">
      <p>
        Let me know what you think about the post , Send mail to -<a
          href="mailto:zahidprantakg@gmail.com"
          >zahidprantakg@gmail.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
import '@/plugins/date-filter.js'
import axios from "axios";

export default {
  //remove callback because we don't want nuxt to waited to call
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blogs-c16de-default-rtdb.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then((res) => {
        return {
          loadedPosts: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  created() {
    console.log(this.loadedPosts);
  },

  /*
  
  */
  //asyncData(object,method/function)
  /* asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: 
          {
            id: "1",
            title: "first zahid -" +context.route.params.id ,
            PreviewText: " excel it ai",
            thumbnail: "img/imageLand.png",
            author:'zahid',
            updatedDate: new Date(),
            content:'some dummy text which is not the PreviewText'
          },
        
      });
    }, 1500);
  },
  */
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>