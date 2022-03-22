<template>
  <div class="container p-0">
    <div class="bg-primary p-4">
      <div class="text-center fw-bold p-4">
        <h2 class="text-uppercase">
          {{ bodyPartName }}
        </h2>
        <h4 class="text-capitalize">
          {{ difficulty }}
        </h4>
      </div>
      <div
        class="p-4 my-rounded"
        :class="this.paused ? 'bg-primary' : 'bg-white'"
      >
        <h5 class="text-center">
          {{ this.paused ? "Paused:" : "Remaining:" }}
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
              :class="this.isDone ? 'disabled' : ''"
            >
              Pause
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              @click="resume()"
              class="btn my-btn bg-primary box-shadow p-2"
              :class="this.isDone ? 'disabled' : ''"
            >
              Resume
            </button>
          </div>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn my-btn bg-white border box-shadow p-2"
            @click="goToHome()"
            :class="!this.isDone ? 'disabled' : ''"
          >
            Done
          </button>
        </div>
      </div>
    </div>
    <CurrentExercises
      :key="currentExercise"
      :c="currentExercise"
      :exercises="bodyWorkout"
    />
    <!-- Key is needed for the component so the page can rerender it when each exercise is finished -->
  </div>
</template>

<style scoped lang="scss">
.container {
  border-radius: 0 0 2rem 2rem;
}
</style>

<script>
import { getCurrentInstance } from "vue";
import router from "@/router";
import CurrentExercises from "@/components/CurrentExercises.vue";

export default {
  name: "Timer",
  prop: ["key"],
  data() {
    return {
      currentExercise: 1,
      displayMinutes: "00",
      displaySeconds: "00",
      duration: 0,
      isDone: false,
      seconds: 0,
      timer: null,
      end: null,
      MINUTE: 60, // Seconds in a minute
      SECOND: 1000, // Milliseconds in a second
      paused: false,
      bodyWorkout: null,
      bodyPartName: "",
      exerciseDuration: 30,
      difficulty: "",
      workoutData: null,
      finished: null,
    };
  },
  components: {
    CurrentExercises,
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },
  created() {
    this.workoutData = getCurrentInstance().vnode.key;
    this.bodyWorkout = this.workoutData.bodyPart;
    this.difficulty = this.workoutData.diff;
    this.bodyPartName = this.workoutData.bodyPartName;
    if (this.bodyPartName == "FullBody") this.bodyPartName = "Full Body"; // Checking if a body part has 2 words
    this.seconds = this.bodyWorkout.length * this.exerciseDuration;
    this.resume();
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
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
      console.log("paused");
    },
    resume() {
      console.log("started");
      this.paused = false;
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

        if (this.duration % this.exerciseDuration == 0 && this.duration != 0) {
          this.currentExercise++;
        }
        // Check if the timer has expired
        if (this.duration <= 0) {
          clearInterval(this.timer);
          this.isDone = true;
          return;
        }
      }, 1000);
    },
    goToHome() {
      this.sendWorkoutIsFinished();
      router.push("/home");
    },
    sendWorkoutIsFinished() {
      console.log("sending finished...");
      this.$emit("sendFinished", (this.finished = true));
    },
  },
};
</script>
