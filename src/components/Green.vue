<template>
  <div class="green"></div>
</template>

<script>
export default {
  name: "Green",
  props: {
    startBlink: Object,
  },
  mounted() {
    this.startBlink();
  },
};
</script>


<style scoped>
.green {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: green;
}
</style>