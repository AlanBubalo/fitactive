<template>
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="p-4 bg-white my-rounded col-lg col-sm-12 m-2">
        <h1>Settings:</h1>
        <div class="row my-3">
          <div class="col-12 col-md-5 mt-md-0">
            <div class="p-4 bg-white my-rounded">
              <div class="d-flex justify-content-between">
                <h4>Location</h4>
                <router-link to="/setupprofile">
                  <button class="btn bg-primary box-shadow">
                    ON/OFF
                  </button></router-link
                >
                <!-- Rectangular switch -->
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            <router-link to="/contact-us">
              <button class="btn bg-primary box-shadow">
                Contact Us
              </button></router-link
            >
          </p>
          <p>
            <button @click.prevent="logout" class="btn bg-primary box-shadow">
              Logout
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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
