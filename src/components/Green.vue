<template>
  <div class="green"></div>
</template>

<script>
export default {
  name: "Green",
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
      document.querySelector(".green").classList.add("blink");
    },
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