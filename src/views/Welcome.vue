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
  <!-- <div class="section-container">
    <div class="columns image" src="@/assets/fitness.jpg">&nbsp;</div>
    <div class="columns content">
      <div class="content-container">
        <h5>Why do we use it?</h5>
        <p>london</p>
      </div>
    </div>
  </div>
  <div class="section-container">
    <div class="columns content">
      <div class="content-container">
        <h5>Why do we use it?</h5>
        <p>London.</p>
      </div>
    </div>
    <div class="columns image">&nbsp;</div>
  </div> -->
  <div class="container">
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

// * {
//   padding: 0;
//   margin: 0;
// }
// body {
//   overflow-x: hidden;
//   font-family: "PT Sans", sans-serif;
// }
// .section-container {
//   --bs-gutter-x: 1.5rem;
//   --bs-gutter-y: 0;
//   display: flex;
//   flex-wrap: wrap;
// }
// .section-container .columns {
//   flex: 0 0 auto;
//   width: 50%;
// }
// .section-container .columns.image {
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
// .section-container .columns.content .content-container {
//   padding: 40px 50px;
// }
// .section-container .columns.content .content-container h5 {
//   font-weight: 700;
//   font-size: 25px;
//   margin-bottom: 20px;
// }
// .section-container .columns.content .content-container p {
//   font-weight: 400;
//   font-size: 16px;
//   margin-bottom: 20px;
//   margin-bottom: 15px;
//   text-align: justify;
// }
// @media screen and (max-width: 767px) {
//   .section-container {
//     flex-flow: row wrap;
//   }
//   .section-container .columns.image {
//     display: block;
//     order: 1;
//     width: 100%;
//     height: 250px;
//   }
//   .section-container .columns.content {
//     display: block;
//     order: 2;
//     width: 100%;
//   }
//   .section-container .columns.content .content-container {
//     padding: 20px 35px;
//   }
//   .section-container .columns.content .content-container h5 {
//     margin-bottom: 5px;
//   }
// }

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 15px;
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
