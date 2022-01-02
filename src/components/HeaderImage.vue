<template>
  <div class="header-image">
    <img class="img" alt="Header Image" :src="image" />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/colors";

.header-image {
  color: $white;
  position: relative;
  text-align: center;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 0.4rem 0.2rem $primary;
  }
}

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}
</style>

<script>
export default {
  name: "HeaderImage",
  props: ["image", "title", "height", "obj_pos"],
};
</script>
