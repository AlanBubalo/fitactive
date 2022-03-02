<template>
  <div class="text-center">Counter:</div>
  <div class="text-center">{{ displayMinutes }} : {{ displaySeconds }}</div>
</template>

<style scoped lang="scss"></style>

<script>
import router from "@/router";

export default {
  props: ["seconds"],
  data() {
    return {
      displayMinutes: 0,
      displaySeconds: 0,
      isDone: false,
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },
  mounted() {
    this.showRemaining();
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
        const duration = Math.floor((end - Date.now()) / SECOND);

        // Check if the timer has expired
        if (duration <= 0) {
          clearInterval(timer);
          this.isDone = true;
          router.replace("/home");
          return;
        }

        // Display the remaining time
        const minutes = Math.floor(duration / MINUTE);
        const seconds = Math.floor(duration % MINUTE);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
      }, 500);
    },
  },
};
</script>
