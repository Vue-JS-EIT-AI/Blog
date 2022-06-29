<template>
  <div class="lesson-page">
    <h1>This is lesson page</h1>

    <!-- Emitls  -->
    <emitC />
    <hr />
    <lessonComp />
    <hr/>
    <Theform/>
    <hr/>
    <emiting2 />
  <button @click="emit2Work">emit2</button>
  </div>
</template>

<script>
import lessonComp from "@/components/lessonC/lessonComp.vue"
import Theform from "@/components/lessonC/Theform.vue"
import emiting2 from "@/components/lessonC/emiting2"

export default {
  components: {
    lessonComp,
    Theform,
    emiting2
},
methods:{
  emit2Work(){
    alert('this works')
  }
}
};
</script>


<style scoped>
.lesson-page {
  padding: 40px;
  text-align: center;
}
.lesson-page:h1 {
  text-align: center;
}
hr {
  border: 10px solid green;
  border-radius: 5px;
}
</style>