<template>
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/run.jpg" />
    <div class="title">Sign Up</div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <p class="text-primary">{{ errorMessage }}</p>
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
            <input
              type="password"
              v-model="password"
              class="form-control box-shadow"
              id="exampleInputPassword1"
              placeholder="Password"
            />
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
          <button type="submit" class="btn my-btn bg-primary box-shadow">
            Sign up
          </button>
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
import { firebase } from "@/firebase";
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
      errorMessage: "",
    };
  },
  methods: {
    signup() {
      if (this.password === this.passwordConfirm) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("Created an account!");
            router.push("/SetupProfile");
          })
          .catch((error) => {
            var mes = error.message.slice(10);
            var mesa = mes.split(" (auth");
            this.errorMessage = mesa[0];
            console.error(error);
          });
        console.log("Signing up...");
        router.push("/setupprofile");
      } else {
        this.errorMessage = "Passwords do not match. Try again.";
      }
    },
  },
};
</script>
