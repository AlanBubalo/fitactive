<template>
  <Counter :key="currentExercise" :c="currentExercise" />

  <div>
    <div class="text-center">Counter:</div>
    <div class="text-center">{{ displayMinutes }} : {{ displaySeconds }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";
</style>

<script>
import Counter from "@/components/Counter.vue";
import router from "@/router";
export default {
  name: "Timer",
  data() {
    return {
      currentExercise: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      duration: 0,
      isDone: false,
      seconds: 90,
    };
  },
  components: {
    Counter,
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },
  mounted() {
    this.showRemaining();
    this.currentExercise += 1;
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.isDone && !window.confirm("Leave without finishing workout?"))
      return;
    next();
  },
  methods: {
    preventNav(event) {
      if (this.isDone) return;
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = "";
    },
    showRemaining() {
      const MINUTE = 60; // Seconds in a minute
      const SECOND = 1000; // Milliseconds in a second
      const end = Date.now() + this.seconds * SECOND; // Exact time when counter will expire.

      // Start timer
      const timer = setInterval(() => {
        this.duration = Math.floor((end - Date.now()) / SECOND);

        if (this.duration % 30 == 0) {
          this.currentExercise++;
        }
        // Check if the timer has expired
        if (this.duration <= 0) {
          clearInterval(timer);
          this.isDone = true;
          router.replace("/home");
          return;
        }

        // Display the remaining time
        const minutes = Math.floor(this.duration / MINUTE);
        const seconds = Math.floor(this.duration % MINUTE);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
      }, 1000);
    },
  },
};
</script>
