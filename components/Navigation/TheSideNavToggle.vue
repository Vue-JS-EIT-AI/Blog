<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
   

  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
  
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;

  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 3.5px;
  border-radius: 25%;
  background-color: #777777;
}
</style>
