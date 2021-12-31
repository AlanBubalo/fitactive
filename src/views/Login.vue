<template>
  <div class="header-image">
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
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              required
            />
            <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>
          <div class="form-group my-2">
            <label for="exampleInputPassword1" class="py-1">Password</label>
            <div class="d-flex justify-content-between bd-highlight">
              <div class="flex-grow-1 bd-highlight">
                <input
                  :type="type"
                  v-model="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="bd-highlight ms-3">
                <button
                  class="btn small-btn-primary text-black"
                  @click.prevent="showPassword"
                  type="button"
                >
                  {{ btn_text }}
                </button>
              </div>
            </div>
          </div>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>

          <button type="submit" class="btn my-btn-primary">Log in</button>
        </form>
        <div class="d-flex justify-content-between bd-highlight">
          <router-link class="my-link-primary bd-highlight" to="/sendpassword"
            >Forgot password?</router-link
          >
          <p>
            Need an account?
            <router-link
              to="/signup"
              class="my-link-primary bd-highlight"
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

.small-btn-primary {
  background-color: $black;
  border: none;
  color: $white !important;
  padding: 0.5rem 0;
  width: 70px;
  border-radius: 1rem;

  &:hover {
    background-color: $black-hover;
  }
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
