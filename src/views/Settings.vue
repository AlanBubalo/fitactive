<template>
  <!-- Settings -->
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title">Settings</div>
  </div>
  <div class="container p-4 mb-3">
    <div class="row">
      <div class="col-12 col-md-6 mt-md-0 mt-3 px-2">
        <!-- Contact Us -->
        <div class="container p-4 bg-white my-rounded h-100">
          <h4>Contact Us:</h4>
          <p>
            If you are having any trouble with the website just click the button
            and send us an email.
          </p>
          <p>
            <router-link to="/contact-us">
              <button class="btn bg-primary box-shadow">
                Contact Us
              </button></router-link
            >
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 mt-md-0 mt-3 px-2">
        <div class="container p-4 bg-white my-rounded h-100">
          <!-- About Us -->
          <h4>About:</h4>
          <p>
            FitActive is a project. This website is made for people who want to
            stay fit. The website is made in 2022 and will keep expanding
            further into the fitness world.
          </p>
        </div>
      </div>
      <!-- Logout from the website -->
      <div class="d-flex justify-content-center">
        <button
          @click.prevent="logout"
          class="btn btn-lg bg-primary box-shadow mt-3 px-3 py-2"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.container {
  box-shadow: none;
}

.row .container {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 45%;
  border-radius: 0 0 3rem 3rem;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase } from "@/firebase";

export default {
  name: "Settings",
  data() {
    return {};
  },
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
