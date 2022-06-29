<template>
  <div>
    <h1>Check The buuton It's working from the Child Components</h1>
    <emitComp @zahid-pranta="cngBtn" />

  </div>
</template>


<script>
import emitComp from "@/components/emitLs/emitComp";


export default {
  components: {
    emitComp,
  },
  methods: {
    cngBtn(qn) {
       alert('it works'+' -'+qn)
    },
  },

};
</script>