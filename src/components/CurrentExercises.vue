<template>
  <!-- Current Exercises -->
  <div class="exercises">
    <div
      class="exercise text-center"
      v-for="exercises in exercises"
      :key="exercises"
    >
      <p>{{ exercises }}</p>
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
export default {
  props: ["key", "c", "exercises"],
  data() {
    return {};
  },
  created() {
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
  },
};
</script>
