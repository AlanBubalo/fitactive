<template>
  <div class="advice">
    <p>You may not be there yet, but you are closer than you were yesterday.</p>
  </div>
  <!-- Workout -->
  <div v-if="!clicked" class="container p-4 bg-white my-4 my-rounded">
    <h4>Focus Area:</h4>
    <ul
      class="nav nav-pills nav-fill d-flex justify-content-between text-center mt-4"
    >
      <!-- Full body -->
      <li class="col p-0">
        <a class="nav-link active" data-bs-toggle="tab" href="#fullbody"
          >Full body</a
        >
      </li>
      <!-- Abs -->
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#abs">Abs</a>
      </li>
      <!-- Arms -->
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#arms">Arms</a>
      </li>
      <!-- Chest -->
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#chest">Chest</a>
      </li>
      <!-- Legs -->
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#legs">Legs</a>
      </li>
      <!-- Back -->
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#back">Back</a>
      </li>
    </ul>
    <!-- Full Body -->
    <div class="tab-content mt-1">
      <!-- Full Body -->
      <div id="fullbody" class="tab-pane fade in show active">
        <WorkoutExercises bodyPartName="FullBody" @sendWorkout="yes" />
      </div>
      <!-- Abs -->
      <div id="abs" class="tab-pane fade in">
        <WorkoutExercises bodyPartName="Abs" @sendWorkout="yes" />
      </div>
      <!-- Arms -->
      <div id="arms" class="tab-pane fade in">
        <WorkoutExercises bodyPartName="Arms" @sendWorkout="yes" />
      </div>
      <!-- Chest -->
      <div id="chest" class="tab-pane fade in">
        <WorkoutExercises bodyPartName="Chest" @sendWorkout="yes" />
      </div>
      <!-- Legs -->
      <div id="legs" class="tab-pane fade in">
        <WorkoutExercises bodyPartName="Legs" @sendWorkout="yes" />
      </div>
      <!-- Back -->
      <div id="back" class="tab-pane fade in">
        <WorkoutExercises bodyPartName="Back" @sendWorkout="yes" />
      </div>
    </div>
  </div>
  <div v-else>
    <Timer :key="this.descWorkout" @sendFinished="setFinished" />
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.nav-pills {
  & .nav-link {
    color: $black;
  }
  & .nav-link:hover {
    background-color: #dadada !important;
  }
  & .nav-link.active {
    color: $white;
    background-color: $primary !important;
  }
  & > * {
    padding: 0.25rem 0.5rem;
  }
}
</style>

<script>
// @ is an alias to /src
import { firebase, db } from "@/firebase";
import WorkoutExercises from "@/components/WorkoutExercises";
import Timer from "@/components/Timer";

export default {
  name: "Workout",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      userName: "",
      finished: false, // True if the user has finished the workout, otherwise false
      clicked: false, // True if workout has started, otherwise false
      selectedWorkout: null,
      descWorkout: null,
    };
  },
  components: {
    WorkoutExercises,
    Timer,
  },
  created() {
    this.getName();
  },
  methods: {
    yes(value_from_child) {
      this.descWorkout = value_from_child;
      this.clicked = this.descWorkout.selected;
      this.selectedWorkout = this.descWorkout.bodyPart;
      switch (this.descWorkout.diff) {
        case "beginner":
          this.descWorkout.bodyPart = this.descWorkout.bodyPart.beginner;
          break;
        case "intermediate":
          this.descWorkout.bodyPart = this.descWorkout.bodyPart.intermediate;
          break;
        case "advanced":
          this.descWorkout.bodyPart = this.descWorkout.bodyPart.advanced;
          break;
        default:
          break;
      }
      console.log(this.descWorkout);
    },
    getName() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.userName = doc.data().name;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setFinished(finished) {
      console.log("setFinished");
      this.finished = finished;
    },
  },

  beforeRouteLeave(to, from, next) {
    if (
      this.clicked &&
      !this.finished &&
      !window.confirm("Do you really want to leave workout?")
    )
      return;
    next();
  },
};
</script>
