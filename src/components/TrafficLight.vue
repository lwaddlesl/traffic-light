<template >
  <div class="timer">{{ time }}</div>
  <div class="traffic-light">
    <Red v-if="currentColor === red.name" :startBlink="startBlink" />
    <div v-if="!(currentColor === red.name)" class="red-no-active"></div>
    <Yellow v-if="currentColor === yellow.name" />
    <div v-if="!(currentColor === yellow.name)" class="yellow-no-active"></div>
    <Green v-if="currentColor === green.name" :startBlink="startBlink" />
    <div v-if="!(currentColor === green.name)" class="green-no-active"></div>
  </div>
</template>
<script>
import Green from "./Green.vue";
import Red from "./Red.vue";
import Yellow from "./Yellow.vue";

export default {
  name: "TrafficLight",
  data() {
    return {
      red: {
        time: 10,
        name: "red",
        path: "/red",
      },
      yellow: {
        time: 3,
        name: "yellow",
        path: "/yellow",
      },
      green: {
        time: 15,
        name: "green",
        path: "/green",
      },

      currentColor: "",
      prevColor: "",
      time: null,
    };
  },
  beforeMount() {
    if (this.$router.currentRoute._value.path === "/red") {
      this.getColor(this.red);
    }
    if (this.$router.currentRoute._value.path === "/yellow") {
      this.getColor(this.yellow);
    }
    if (this.$router.currentRoute._value.path === "/green") {
      this.getColor(this.green);
    }
    setInterval(() => (this.time ? this.time-- : this.switchNext()), 1000);
  },
  methods: {
    switchNext() {
      if (this.currentColor == this.yellow.name && !this.prevColor) {
        this.prevColor = this.red.name;
        this.getColor(this.yellow);
      }
      if (this.currentColor == this.red.name) {
        this.prevColor = this.currentColor;
        this.getColor(this.yellow);
      } else if (this.currentColor == this.green.name) {
        this.prevColor = this.currentColor;
        this.getColor(this.yellow);
      } else {
        if (this.prevColor == this.green.name) {
          this.prevColor = this.currentColor;
          this.getColor(this.red);
        } else if (this.prevColor == this.red.name) {
          this.prevColor = this.currentColor;
          this.getColor(this.green);
        }
      }
    },
    getColor(color) {
      this.time = color.time;
      this.currentColor = color.name;
      this.$router.push({ path: color.path });
    },
    startBlink() {
      let handle = setInterval(() => {
        if (this.time < 4) {
          if (this.currentColor === this.red.name) {
            document.querySelector(".red").classList.add("blink");
          } else if (this.currentColor === this.green.name) {
            document.querySelector(".green").classList.add("blink");
          }
          clearInterval(handle);
        }
      }, 1000);
    },
  },
  components: {
    Green,
    Red,
    Yellow,
  },
};
</script>
<style scoped>
.traffic-light {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding: 25px 0;
  height: 450px;
  width: 150px;
  border-radius: 50px;
}
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 150px;
  height: 150px;
}
.red-no-active {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: red;
  opacity: 0.3;
}
.yellow-no-active {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: yellow;
  opacity: 0.3;
}
.green-no-active {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: green;
  opacity: 0.3;
}
.blink {
  animation-name: blinker;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
}
</style>