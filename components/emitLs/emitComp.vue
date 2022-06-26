<template>
  <div>
    <p>This is emit comp</p>
    <p>{{ user }}</p>
    <button @click="$emit('someEvent')">Hello</button>

    <!-- <button @click="$emit('increaseBy', 1)">Increase by 1</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "zahid",
    };
  },
};
</script>