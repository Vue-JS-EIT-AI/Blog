import Vue from 'vue'
import PostList from "@/components/PostsComp/PostList.Vue";
import AppButton from "@/components/UI/AppButton.vue";


Vue.component('PostList',PostList)
Vue.component('AppButton',AppButton)


// if we change the name then we have to use <PostList3445/> in the pages template 
// Vue.component('PostList3445',AppButton)


