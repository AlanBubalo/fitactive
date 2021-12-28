<template>
  <div class="header-image">
    <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
    <div class="title">Welcome to FitActive</div>
  </div>
  <div class="advice text-center">
    <p>"All progress takes place outside the comfort zone."</p>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm text-center">
        <router-link class="btn btn-fit" role="button" to="/login">Log in</router-link>
        <p>Getting started? <router-link class="text-btn" to=/signup>Sign up</router-link></p>
      </div>
      <div class="col-sm"></div>
    </div>
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
  name: "Welcome",
  components: {
    HeaderImage,
  },
};
</script>
