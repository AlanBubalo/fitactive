<template>
  <div>
    <img
      :class="`img${num}`"
      :src="require(`@/assets/${bodyPartName.toLowerCase()}.jpg`)"
    />
    <div class="row">
      <div class="col-sm-4 col-12 p-1 pt-4 d-flex flex-column">
        <h3 class="text-center text-uppercase">Beginner</h3>
        <h5>Exercises:</h5>
        <ol class="mb-auto">
          <li v-for="exercise in bodyPart.beginner" :key="exercise">
            {{ exercise }}
          </li>
        </ol>
        <button
          class="btn my-btn bg-primary box-shadow mt-4"
          @click="sendWorkoutData('beginner')"
        >
          Start beginner workout
        </button>
      </div>
      <div class="col-sm-4 col-12 p-1 pt-4 d-flex flex-column">
        <h3 class="text-center text-uppercase">Intermediate</h3>
        <h5>Exercises:</h5>
        <ol class="mb-auto">
          <li v-for="exercise in bodyPart.intermediate" :key="exercise">
            {{ exercise }}
          </li>
        </ol>
        <button
          class="btn my-btn bg-primary box-shadow mt-4"
          @click="sendWorkoutData('intermediate')"
        >
          Start intermediate workout
        </button>
      </div>
      <div class="col-sm-4 col-12 p-1 pt-4 d-flex flex-column">
        <h3 class="text-center text-uppercase">Advanced</h3>
        <h5>Exercises:</h5>
        <ol class="mb-auto">
          <li v-for="exercise in bodyPart.advanced" :key="exercise">
            {{ exercise }}
          </li>
        </ol>
        <button
          class="btn my-btn bg-primary box-shadow mt-4"
          @click="sendWorkoutData('advanced')"
        >
          Start advanced workout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  border-radius: 0.5rem;
}

.img1 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 70%;
}

.img2 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 50%;
}

.img3 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 80%;
}

.img4 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 80%;
}

.img5 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 100%;
}

.img6 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
}
</style>

<script>
import { firebase, db } from "@/firebase";

export default {
  name: "WorkoutExercises",
  props: ["bodyPartName"],
  data() {
    return {
      selected: true,
      bodyPart: {},
      num: null,
    };
  },
  created() {
    switch (this.bodyPartName) {
      case "FullBody":
        this.num = 1;
        break;
      case "Abs":
        this.num = 2;
        break;
      case "Arms":
        this.num = 3;
        break;
      case "Chest":
        this.num = 4;
        break;
      case "Legs":
        this.num = 5;
        break;
      case "Back":
        this.num = 6;
        break;
      default:
        break;
    }
    this.getWorkoutData();
  },
  methods: {
    getWorkoutData() {
      db.collection("workout")
        .doc(this.bodyPartName)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.bodyPart = doc.data();
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sendWorkoutData(diff) {
      this.$emit("sendWorkout", {
        selected: this.selected,
        bodyPart: this.bodyPart,
        bodyPartName: this.bodyPartName,
        diff,
      });
      console.log("sending workout data...");
    },
  },
};
</script>
