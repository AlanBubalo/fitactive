<template>
  <!-- Contact Us -->
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title">Contact Us</div>
  </div>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg-3 col-md-6">
        <form class="my-4" id="contact">
          <div class="form-group my-2">
            <label for="exampleInputEmail1" class="py-1 fs-5">E-mail: </label>
            <p>{{ email }}</p>
          </div>
          <div class="form-group my-2">
            <label for="exampleInputEmail1" class="py-1 fs-5">Message:</label>
            <textarea
              class="form-control box-shadow"
              rows="7"
              cols="50"
              id="message"
              v-model="message"
            ></textarea>
          </div>
          <div v-if="!isLoading">
            <button
              type="button"
              @click="sendEmail"
              class="btn my-btn bg-primary box-shadow"
              :class="!message ? 'disabled' : ''"
            >
              Submit
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
  border-radius: 0 0 3rem 3rem;
}

textarea {
  resize: none;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase } from "@/firebase";
import emailjs from "@emailjs/browser";
import router from "@/router";
import { init } from "@emailjs/browser";
init("CbMaUg6-2gXJvhs_d");

export default {
  name: "SendPassword",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      errorMessage: "",
      isLoading: false,
      isSent: false,
      message: null,
    };
  },
  components: {
    HeaderImage,
  },
  methods: {
    sendEmail(e) {
      try {
        this.isLoading = true;
        var contact = {
          from_name: this.email,
          message: this.message,
        };
        console.log(e);
        emailjs.send("service_i1nu3os", "template_vzhdmc8", contact).then(
          (response) => {
            alert("SUCCESS!", response.status, response.text);
            router.push("/settings");
          },
          (err) => {
            alert("FAILED...", err);
          }
        );
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>
