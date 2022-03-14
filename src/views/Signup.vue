<template>
  <!-- Signup -->
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/run.jpg" />
    <div class="title">Sign Up</div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <form @submit.prevent="signup">
          <div class="form-group my-2">
            <label for="exampleInputEmail1" class="py-1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control box-shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group my-2">
            <label for="exampleInputPassword1" class="py-1">Password</label>
            <div class="d-flex justify-content-between bd-highlight">
              <div class="flex-grow-1 bd-highlight">
                <input
                  :type="type"
                  v-model="password"
                  class="form-control box-shadow"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="bd-highlight ms-3">
                <button
                  class="btn small-btn-primary bg-secondary box-shadow"
                  @click.prevent="showPassword"
                  type="button"
                >
                  {{ btn_text }}
                </button>
              </div>
            </div>
          </div>
          <div class="form-group my-2">
            <label for="exampleInputConfirmPassword1" class="py-1"
              >Confirm Password</label
            >
            <input
              type="password"
              v-model="passwordConfirm"
              class="form-control box-shadow"
              id="exampleInputConfirmPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <div v-if="!isLoading">
            <button type="submit" class="btn my-btn bg-primary box-shadow">
              Sign in
            </button>
          </div>
          <div v-else>
            <button
              type="submit"
              class="btn my-btn bg-primary disabled box-shadow"
            >
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              Signing up...
            </button>
          </div>
        </form>
        <div class="d-flex justify-content-between bd-highlight">
          <p>
            Already have an account?
            <router-link
              to="/login"
              class="hover-left my-link-primary bd-highlight"
              replace
              >Log in</router-link
            >
          </p>
        </div>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 70%;
  border-radius: 0 0 3rem 3rem;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "Signup",
  components: {
    HeaderImage,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      type: "password",
      btn_text: "Show",
      errorMessage: "",
      isLoading: false,
    };
  },
  methods: {
    signup() {
      if (this.password === this.passwordConfirm) {
        this.isLoading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("Created an account!");
            db.collection("waterIntake")
              .doc(this.email)
              .set({
                glassesDrank: 0,
                glassesTotal: 10,
              })
              .then((doc) => {
                router.push("/setupprofile");
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            this.isLoading = false;
            var mes = error.message.slice(10);
            var mesa = mes.split(" (auth");
            this.errorMessage = mesa[0];
            console.error(error);
          });
        console.log("Signing up...");
      } else {
        this.errorMessage = "Passwords do not match. Try again.";
      }
    },
    showPassword() {
      this.type = this.type == "password" ? "text" : "password";
      this.btn_text = this.btn_text == "Show" ? "Hide" : "Show";
    },
  },
};
</script>
