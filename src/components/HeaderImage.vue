<template>
  <div class="welcomeimage">
    <img class="img" alt="FitActive Logo" :src="image" />
    <div class="title">{{ title }}</div>
  </div>
  <div class="advice">
    <p>{{ advice }}</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

<script>
export default {
  name: "HeaderImage",
  props: ["title", "advice"],
};
</script>
