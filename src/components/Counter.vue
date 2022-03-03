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
import { firebase, db } from "@/firebase";
export default {
  props: ["key", "c"],
  data() {
    return {
      workoutData: [],
    };
  },
  mounted() {
    this.getWorkoutData();
    this.updateExercises();
  },
  methods: {
    updateExercises() {
      setTimeout(() => {
        console.log(this.c);
        $(".exercise:nth-child(" + this.c + ")").addClass("current");
        $(".exercise:nth-child(" + this.c + ") ~ .exercise").addClass(
          "unfinished"
        );
      }, 1200);
    },
    getWorkoutData() {
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
</script>
