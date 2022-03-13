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
              <div class="justify-content-between">
                <h4>Notifications:</h4>
                <p>Daily reminders</p>
                <label class="switch">
                  <input class="switch-input" type="checkbox" />
                  <span class="switch-label" data-on="On" data-off="Off"></span>
                  <span class="switch-handle"></span>
                </label>
              </div>
            </div>
            <div class="p-4 bg-white my-rounded mt-1">
              <h4>Contact Us:</h4>
              <p>
                If you are having any trouble with the app just click the button
                and send us an email!
              </p>
              <p>
                <router-link to="/contact-us">
                  <button class="btn bg-primary box-shadow">
                    Contact Us
                  </button></router-link
                >
              </p>
            </div>
            <div class="p-4 bg-white my-rounded mt-1">
              <div class="justify-content-between">
                <h4>Version:</h4>
                <p>
                  The current version of FitActive is 1.0. We will keep updating
                  the app.
                </p>
              </div>
            </div>
            <div class="p-4 bg-white my-rounded mt-1">
              <div class="justify-content-between">
                <h4>Privacy Policy:</h4>
                <div>
                  <p>
                    In order to use the FitActive app you must agree to our
                    privacy policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 bg-white my-rounded mt-1">
              <div class="justify-content-between">
                <h4>About:</h4>
                <p>
                  FitActive is a project. This website is made for people who
                  want to stay fit. The website is made in 2022 and will keep
                  expanding further into the fitness world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
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

.switch {
  position: relative;
  display: block;
  vertical-align: top;
  width: 100px;
  height: 30px;
  padding: 3px;
  margin: 0 10px 10px 0;
  background: linear-gradient(to bottom, #eeeeee, #ffffff 25px);
  background-image: -webkit-linear-gradient(top, #eeeeee, #ffffff 25px);
  border-radius: 18px;
  box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  box-sizing: content-box;
}
.switch-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  box-sizing: content-box;
}
.switch-label {
  position: relative;
  display: block;
  height: inherit;
  font-size: 10px;
  text-transform: uppercase;
  background: #eceeef;
  border-radius: inherit;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12),
    inset 0 0 2px rgba(0, 0, 0, 0.15);
  box-sizing: content-box;
}
.switch-label:before,
.switch-label:after {
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
  line-height: 1;
  -webkit-transition: inherit;
  -moz-transition: inherit;
  -o-transition: inherit;
  transition: inherit;
  box-sizing: content-box;
}
.switch-label:before {
  content: attr(data-off);
  right: 11px;
  color: #aaaaaa;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
}
.switch-label:after {
  content: attr(data-on);
  left: 11px;
  color: #ffffff;
  text-shadow: 0 1px rgba(0, 0, 0, 0.2);
  opacity: 0;
}
.switch-input:checked ~ .switch-label {
  background: #e1b42b;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15),
    inset 0 0 3px rgba(0, 0, 0, 0.2);
}
.switch-input:checked ~ .switch-label:before {
  opacity: 0;
}
.switch-input:checked ~ .switch-label:after {
  opacity: 1;
}
.switch-handle {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 28px;
  height: 28px;
  background: linear-gradient(to bottom, #ffffff 40%, #f0f0f0);
  background-image: -webkit-linear-gradient(top, #ffffff 40%, #f0f0f0);
  border-radius: 100%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.switch-handle:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -6px 0 0 -6px;
  width: 12px;
  height: 12px;
  background: linear-gradient(to bottom, #eeeeee, #ffffff);
  background-image: -webkit-linear-gradient(top, #eeeeee, #ffffff);
  border-radius: 6px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
}
.switch-input:checked ~ .switch-handle {
  left: 74px;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
}

.switch-label,
.switch-handle {
  transition: All 0.3s ease;
  -webkit-transition: All 0.3s ease;
  -moz-transition: All 0.3s ease;
  -o-transition: All 0.3s ease;
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
