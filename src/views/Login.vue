<template>
  <div class="header-image">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title">Log in</div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <p class="text-primary">{{ errorMessage }}</p>
        <form>
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
            <input
              :type="type"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            <a
              href="#"
              class="my-link-primary text-black"
              @click.prevent="showPassword"
            >
              {{ btn_text }} Password
            </a>
          </div>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>

          <button class="btn my-btn-primary" @click="login" type="button">
            Log in
          </button>

          <router-link class="my-link-primary" to="/sendpassword"
            >Forgot password?</router-link
          >
        </form>
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
  object-position: 50% 45%;
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
      console.log("login..." + this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("Logged in successfully.", result);
          this.$router.replace({ name: "Home" });
        })
        .catch((error) => {
          var mes = error.message.slice(10);
          var mesa = mes.split(" (auth");
          this.errorMessage = mesa[0];
          console.error(error);
        });
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btn_text = "Hide";
      } else {
        this.type = "password";
        this.btn_text = "Show";
      }
    },
  },
};
</script>
