<template>
  <form @submit.prevent="OnSave">
    <AppControlInput v-model="editedpost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedpost.title">Title</AppControlInput>

    <AppControlInput v-model="editedpost.thumbnailLink"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput control-type="textarea" v-model="editedpost.content"
      >Content</AppControlInput
    >

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  name:'AdminPostForm',
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {

/*

// spread syntax   -- a single list or array can be expanded  ex: num=[1,2,3] ..num means 1,2,3 used one by one 
 
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

*/
/*  1 . editedpost will check if this.post is true or not 
    2.  if this.post exist then using spread operator which will pull out  all the property pass them into a new object
    3. : otherwise we will bind as a default object (after : this is the else case)
     
    
    */
      editedpost: this.post? {...this.post} :

       {
        author: "",
        title: "",
        thumbnailLink: "",
        content: "",
      },
    };
  },
  methods: {
    OnSave() {
      //save
      // console.log(this.editedpost);
      this.$emit('submit',this.editedpost)
    },
    onCancel() {
      //navigate back
      this.$router.push("/admin");
    },
  },
};
</script>