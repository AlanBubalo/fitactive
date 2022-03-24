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
      <div class="col-sm-6 col-12">
        <img class="img1 rounded-2" src="@/assets/fitness.jpg" />
      </div>
      <div
        class="col-sm-6 col-12 p-4 d-flex flex-column justify-content-center"
      >
        <h3 class="pb-2">About Us</h3>
        <p class="text-justify">
          Here you can read what our project is really about. Our mission is for
          you to have a great experience using our web app so you can stay
          healthy and fit. This project was established in 2022. We are a team
          of two students that are expanding this project slowly but surely. We
          have first started making our prototype in Figma and when we were
          happy with our result then we transferred to gradually building our
          web app using HTML, CSS, JS and Firebase. My colleague and I have
          evolved our knowledge using the required programming languages to make
          and design our project "FitActive".
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div
        class="col-sm-6 col-12 order-sm-first order-last p-4 d-flex flex-column justify-content-center"
      >
        <h3 class="pb-2">Benefits of Physical Activity</h3>
        <p class="text-justify">
          FitActive offers you a bunch of features such as workouts, making your
          own workout schedule, taking care of your water intake and more. This
          project has a lot of value because it's important to stay fit and
          active throughout your life. There are a lot of benefits doing
          physical activity such as having a healthier state of mind, reduce
          your risk of a heart attack, manage your weight better and the most
          important part is feeling better and having more energy throughout the
          entire day.
        </p>
      </div>
      <div class="col-sm-6 col-12">
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

.text-justify {
  text-align: justify;
  text-justify: inter-character;
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
