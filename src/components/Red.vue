<template>
  <div class="red"></div>
</template>

<script>
export default {
  name: "Red",
  props: {
    time: Number,
  },
  mounted() {
    let handle = setInterval(() => {
      if (this.time < 4) {
        this.getAnimation();
        clearInterval(handle);
      }
    }, 1000);
  },
  methods: {
    getAnimation() {
      document.querySelector(".red").classList.add("blink");
    },
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