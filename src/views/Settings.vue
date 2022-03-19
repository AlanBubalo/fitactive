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
        <div class="container p-4 bg-white my-rounded">
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
        <div class="container p-4 bg-white my-rounded">
          <!-- About Us -->
          <div class="">
            <h4>About:</h4>
            <p>
              FitActive is a project. This website is made for people who want
              to stay fit. The website is made in 2022 and will keep expanding
              further into the fitness world.
            </p>
          </div>
        </div>
      </div>
      <!-- Logout from the website -->
      <div class="d-flex justify-content-end">
        <button
          @click.prevent="logout"
          class="btn btn-lg bg-primary box-shadow mt-3"
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
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #cccccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    border-radius: 999px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked {
  // Slider background color when the switch is turned on
  & + .slider {
    background-color: $primary;
    // Animation for slider's movement
    &:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
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
