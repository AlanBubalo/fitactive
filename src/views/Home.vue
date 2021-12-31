<template>
  <div class="header-image">
    <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
    <div class="title">Home</div>
  </div>
  <div class="advice text-center">
    <p>Welcome, {{}}</p>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <router-link class="my-link-primary" to="/setupprofile"
          >Setup Profile</router-link
        >
        <button class="btn my-btn-primary" @click="logout">Log out</button>
      </div>
      <div class="col-lg col-md"></div>
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
import { firebase } from "@/firebase";
import router from "@/router";

export default {
  name: "Home",
  components: {
    HeaderImage,
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Logged out");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
