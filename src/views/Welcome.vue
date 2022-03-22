<template>
  <!-- Welcome -->
  <div class="text-white">
    <div class="header-image">
      <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
      <div class="title">Welcome to FitActive</div>
    </div>
    <div class="advice text-center">
      <p>"All progress takes place outside the comfort zone."</p>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <img class="img1 rounded-2" src="@/assets/fitness.jpg" />
      </div>
      <div class="col-6 p-4 d-flex flex-column justify-content-center">
        <h5>Why do we use it?</h5>
        <p>london</p>
      </div>
    </div>
    <div class="row mt-4">
      <div
        class="col-6 p-4 d-flex flex-column justify-content-center align-items-end"
      >
        <h5>Why do we use it?</h5>
        <p>london</p>
      </div>
      <div class="col-6">
        <img class="img2 rounded-2" src="@/assets/work.jpg" />
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6 text-center">
        <router-link
          class="btn my-btn bg-primary box-shadow"
          role="button"
          to="/login"
          >Log in</router-link
        >
        <p>
          Getting started?
          <router-link class="hover-left my-link-primary" to="/signup"
            >Sign up</router-link
          >
        </p>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.container {
  box-shadow: none;
}

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 15px;
}

.img1 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 100% 70%;
}

.img2 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 40%;
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
