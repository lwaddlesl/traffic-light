<template>
  <div class="red"></div>
</template>

<script>
export default {
  name: "Red",
  props: {
    startBlink: Object,
  },
  mounted() {
    this.startBlink();
  },
};
</script>


<style scoped>
.red {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: red;
}
</style>