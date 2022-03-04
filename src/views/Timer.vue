<template>
  <div class="container">
    <div class="bg-primary p-4">
      <div class="p-4 my-rounded" :class="timer_bg">
        <h5 class="text-center">
          {{ timer_bg == "bg-primary" ? "Paused:" : "Remaining:" }}
        </h5>
        <h1 class="text-center display-2">
          {{ displayMinutes }} : {{ displaySeconds }}
        </h1>
      </div>
      <div class="row">
        <div class="col mx-auto">
          <div v-if="!this.paused">
            <button
              type="button"
              @click="pause()"
              class="btn my-btn bg-primary box-shadow p-2"
              :class="this.next != 'disabled' ? 'disabled' : ''"
            >
              Pause
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              @click="resume()"
              class="btn my-btn bg-primary box-shadow p-2"
              :class="this.next != 'disabled' ? 'disabled' : ''"
            >
              Resume
            </button>
          </div>
        </div>
        <div class="col">
          <router-link to="/home">
            <button
              type="button"
              class="btn my-btn bg-white border box-shadow p-2"
              :class="this.next"
            >
              Next
            </button></router-link
          >
        </div>
      </div>
    </div>
    <CurrentExercises :key="currentExercise" :c="currentExercise" />
    <!-- Key is needed for the component so the page can rerender it when each exercise is finished -->
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";
</style>

<script>
import CurrentExercises from "@/components/CurrentExercises.vue";
import router from "@/router";
export default {
  name: "Timer",
  data() {
    return {
      currentExercise: 1,
      displayMinutes: 0,
      displaySeconds: 0,
      duration: 0,
      next: "disabled",
      timer_bg: "bg-white",
      isDone: false,
      seconds: 90,
      timer: null,
      end: null,
      MINUTE: 60, // Seconds in a minute
      SECOND: 1000, // Milliseconds in a second
      paused: false,
    };
  },
  components: {
    CurrentExercises,
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },
  mounted() {
    this.resume();
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
    pause() {
      clearInterval(this.timer);
      this.paused = true;
      this.timer_bg = "bg-primary";
      console.log("paused");
    },
    resume() {
      console.log("started");
      this.paused = false;
      this.timer_bg = "bg-white";
      if (this.duration == 0) {
        this.end = Date.now() + this.seconds * this.SECOND; // Exact time when counter will expire.
      } else {
        this.end = Date.now() + this.duration * this.SECOND;
      }
      this.timer = setInterval(() => {
        this.duration = Math.round((this.end - Date.now()) / this.SECOND);

        // Display the remaining time
        const minutes = Math.floor(this.duration / this.MINUTE);
        const seconds = this.duration % this.MINUTE;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        if (this.duration % 30 == 0 && this.duration != 0) {
          this.currentExercise++;
        }
        // Check if the timer has expired
        if (this.duration <= 0) {
          clearInterval(this.timer);
          this.isDone = true;
          this.next = "";
          return;
        }
      }, 1000);
    },
  },
};
</script>
