<template>
  <div>
    <p>This is emit comp</p>
    <input type="text" v-model="quantity">
    <!-- <button @click="$emit('zahid-pranta',quantity)">click button</button> -->
    <button @click="toggleFav">click button</button>

  </div>
</template>
<script>
export default {
  methods: {
    toggleFav() {
      this.$emit("zahid-pranta",this.quantity);
    },
  },
  data(){
    return{
      quantity:''
    }
  }
};
</script>