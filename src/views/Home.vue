<template>
  <div class="header-image">
    <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
    <div class="title">Home</div>
  </div>
  <div class="advice text-center">
    <p>Welcome, user</p>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";

export default {
  name: "Home",
  components: {
    HeaderImage,
  },
};
</script>
