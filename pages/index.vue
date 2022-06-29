<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get The Latest company Information</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>


<script>
import PostList from "@/components/PostsComp/PostList.Vue";

export default {
  components: {
    PostList,
  },
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
  /*
created does not work because created makes request client side which is not good for SEO/*
 What i mean is - when i run the appplication it comes without data after 1.5s data comes so it's not good for seo/*
 for solving this problem nuxt have a solution ----- asyncData()   -----** note:   Only works in the pages
 */
  created() {
    // setTimeout(() => {
    //   this.loadedPosts = [
    //     {
    //       id: "1",
    //       title: "first zahid",
    //       PreviewText: " excel it ai",
    //       thumbnail: "img/imageLand.png",
    //     },
    //     {
    //       id: "2",
    //       title: "2nd zahid",
    //       PreviewText: "2  excel it ai",
    //       thumbnail: "img/imageLand.png",
    //     },
    //   ];
    // }, 1500);
  },
  /*
1.  It's simillar to the  data() method     -so comment out data()method  ,
2.  this. will not work in asyncData() method
3.  now we can see that when we check in the live reload takes 1.5s but renders the full page with the data
4.  check the cosole here in the cli and browser console if reload happens then only server console is used else browser console everything is autometically managed by the Nuxt*/
  asyncData(context, callback) {
    // return new Promise()
    console.log('asyncData is executed!')
    console.log(context)

    setTimeout(() => {
      callback(null, {
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
  },
};
</script>



<style scoped>
.intro {
  height: 50vh;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/back.jpg");
}

.intro h1 {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>