<template>
  <div>
    <h1>Hello</h1>
    <emitComp @someEvent="cngBtn('rohim')" />
    <!-- <emitComp  @increase-by="(n) => count += n"  /> -->

  </div>
</template>


<script>
import emitComp from "@/components/emitLs/emitComp";


export default {
  components: {
    emitComp,
  },
  methods: {
    cngBtn(name) {
       this.name= this.name
    },
  },

};
</script>