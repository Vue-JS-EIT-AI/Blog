<template>
  <div>
 
    <input type="text" v-model="value" @input="$emit('input',$event.target.value)">
   

  </div>
</template>
<script>
export default {

 
  data(){
    return{
      value:''
    }
  }
};
</script>