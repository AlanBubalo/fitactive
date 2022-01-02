<template>
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/run.jpg" />
    <div class="title">Log in</div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <p class="text-primary">{{ errorMessage }}</p>
        <form @submit.prevent="login">
          <div class="form-group my-2">
            <label for="exampleInputEmail1" class="py-1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control box-shadow"
              id="exampleInputEmail1"
              placeholder="Enter email"
              required
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
                  required
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
          <label class="my-checkbox">
            <input type="checkbox" name="remember" />
            <span></span>
            Remember me
          </label>
          <button type="submit" class="btn my-btn bg-primary box-shadow">
            Log in
          </button>
        </form>
        <div class="d-flex justify-content-between bd-highlight">
          <router-link
            class="my-link-primary bd-highlight text-shadow"
            to="/sendpassword"
            >Forgot password?</router-link
          >
          <p>
            Need an account?
            <router-link
              to="/signup"
              class="my-link-primary bd-highlight text-shadow"
              replace
              >Sign up</router-link
            >
          </p>
        </div>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

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
import { firebase } from "@/firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      type: "password",
      btn_text: "Show",
      errorMessage: "",
    };
  },
  components: {
    HeaderImage,
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log("Logged in.");
        })
        .catch((error) => {
          var mes = error.message.slice(10);
          var mesa = mes.split(" (auth");
          this.errorMessage = mesa[0];
          console.error(error);
        });
      console.log("Logging in...");
    },
    showPassword() {
      this.type = this.type == "password" ? "text" : "password";
      this.btn_text = this.btn_text == "Show" ? "Hide" : "Show";
    },
  },
};
</script>
