<template>
  <!-- Send Password -->
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title"></div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <div v-if="isSent" class="alert alert-success" role="alert">
          Password reset email sent! Check your email account.
        </div>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <h2>Forgot Password?</h2>
        <p>Your password will be sent to your email account.</p>
        <form class="my-4">
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
            <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>
          <div v-if="!isLoading">
            <button
              type="button"
              @click="sendPassword"
              class="btn my-btn bg-primary box-shadow"
            >
              Send
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
              Sending...
            </button>
          </div>
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
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase } from "@/firebase";

export default {
  name: "SendPassword",
  data() {
    return {
      email: "",
      errorMessage: "",
      isLoading: false,
      isSent: false,
    };
  },
  components: {
    HeaderImage,
  },
  methods: {
    sendPassword() {
      this.isLoading = true;
      this.isSent = false;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          // Password reset email sent!
          this.isLoading = false;
          this.isSent = true;
        })
        .catch((error) => {
          this.isLoading = false;
          var mes = error.message.slice(10);
          var mesa = mes.split(" (auth");
          this.errorMessage = mesa[0];
          console.error(error);
        });
    },
  },
};
</script>
