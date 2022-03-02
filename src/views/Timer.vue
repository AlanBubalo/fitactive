<template>
  <div class="exercises">
    <div
      class="exercise text-center text-white"
      v-for="workoutData in workoutData"
      :key="workoutData"
    >
      <p>{{ workoutData }}</p>
    </div>
  </div>

  <Counter :seconds="60" />
</template>

<style scoped lang="scss">
@import "@/colors";

.exercises {
  background: lighten($primary, 15%);
  border-radius: 0 0 2rem 2rem;
}

.exercise {
  background: $primary;
  * {
    padding: 2rem;
    margin: 0rem;
  }
}

.current {
  border-radius: 0 0 2rem 2rem;
}

.unfinished {
  background: lighten($primary, 15%);
  border-radius: 0 0 2rem 2rem;
}
</style>

<script>
import Counter from "@/components/Counter.vue";
import { h } from "vue";
import { firebase, db } from "@/firebase";
export default {
  name: "Timer",
  data() {
    return {
      workoutData: [],
      currentExercise: 0,
    };
  },
  components: {
    Counter,
  },
  computed: {},
  mounted() {
    this.getWorkoutData();
    this.currentExercise += 1;
    $(".exercise:nth-child(" + this.currentExercise + ")").addClass("current");
    $(".exercise:nth-child(" + this.currentExercise + ") ~ .exercise").addClass(
      "unfinished"
    );
  },
  methods: {
    async getWorkoutData() {
      db.collection("workout")
        .doc("Full Body")
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.workoutData = doc.data().beginner;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};

/*
return h(
        "div",
        { class: "exercises" },
        this.workoutData.map((exercise) => {
          return h(
            "div",
            { class: "exercise text-center text-white", key: workoutData },
            exercise
          );
        })
      );
*/
</script>
