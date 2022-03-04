<template>
  <div class="exercises">
    <div
      class="exercise text-center"
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
  color: $white;
  font-weight: thin;
  * {
    padding: 2rem;
    margin: 0rem;
  }
}

.current {
  border-radius: 0 0 2rem 2rem;
  font-weight: bold;
  color: $white;
  position: relative;
  border-bottom: 6px solid $black;
}

.unfinished {
  background: lighten($primary, 15%);
  border-radius: 0 0 2rem 2rem;
  color: $white;
  font-weight: 300;
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
