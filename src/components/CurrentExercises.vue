<template>
  <!-- Current Exercises -->
  <div class="exercises">
    <div
      class="exercise align-middle px-5 d-flex"
      v-for="(exercise, id) in exercises"
      :key="id"
    >
      <img
        class="p-0 m-4 rounded-3"
        :src="require('@/assets/exercises/' + exercise + '.jpg')"
        :alt="exercise"
      />
      <p class="my-auto">{{ exercise }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

img {
  box-shadow: none;
  width: 100px;
  height: auto;
}

.exercises {
  background: lighten($primary, 15%);
  border-radius: 0 0 2rem 2rem;
}

.exercise {
  background: $primary;
  color: $white;
  font-weight: thin;
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
export default {
  props: ["key", "c", "exercises"],
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.getImage();
    this.updateExercises();
  },
  methods: {
    getImage() {
      for (let i = 0; i < this.exercises.length; i++)
        this.images.push("@/assets/exercises/" + this.exercises[i] + ".jpg");
      console.log(this.images[0]);
    },
    updateExercises() {
      setTimeout(() => {
        $(".exercise:nth-child(" + this.c + ")").addClass("current");
        $(".exercise:nth-child(" + this.c + ") ~ .exercise").addClass(
          "unfinished"
        );
      }, 1200);
    },
  },
};
</script>
