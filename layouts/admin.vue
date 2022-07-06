<template>
  <div>
    <div class="container">
        
      <div class="tab0"> <nuxt-link to="/"> Home</nuxt-link></div>
      <div class="tab1"></div>
      <!-- <div class="tabs">
        <nuxt-link to="/admin/auth"> Signin/Signup</nuxt-link>
      </div> -->
    </div>
      <Nuxt />

   

  </div>
</template>

<script>
export default {
  // middleware:'auth',
  middleware:['check-auth','auth',]   // if we needed multiple middleware
  


}
</script>



<style >
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}

.container {
  height: 60px;
  background-color: rgb(68, 73, 77);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container a {
  text-decoration: none;
  color: white;
}
.tab0{
  padding-left: 5px;
}
.tab1 {
  flex: 1;
}
.tabs {
  margin-right: 10px;
}

</style>