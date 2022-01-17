<template>
  <div class="advice text-center text-white">
    <p>Welcome, {{ userName }}</p>
  </div>

  <div class="row">
    <div class="col-lg col-md"></div>
    <div class="col-lg-4 col-md-6">
      <div class="my-box text-left">
        <h4>Cardio:</h4>
        <p>3000/6000 meters</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 40%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 10%"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div class="col-lg col-md"></div>
  </div>

  <div class="row">
    <div class="col-lg col-md"></div>
    <div class="col-lg-4 col-md-6">
      <div class="my-box text-left">
        <h4>Water Intake:</h4>
        <p>7/10 glasses</p>
      </div>
    </div>
    <div class="col-lg col-md"></div>
  </div>

  <div class="row">
    <div class="col-lg col-md"></div>
    <div class="col-lg-4 col-md-6">
      <div class="my-box text-left">
        <h4>Ideal hours for sleep:</h4>
        <p>8 hours 30 minutes</p>
      </div>
    </div>
    <div class="col-lg col-md"></div>
  </div>

  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <router-link to="/setupprofile">
          <button class="btn my-btn bg-primary box-shadow">
            Setup Profile
          </button></router-link
        >
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 0.4rem 0.2rem $primary;
}

.advice {
  background: $gradient-primary-secondary;
  border-radius: 0 0 2rem 2rem;

  * {
    padding: 1rem;
  }
}

.my-box {
  background-color: pink;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "Home",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      userName: "",
    };
  },
  components: {
    HeaderImage,
  },
  mounted() {
    this.getName();
  },
  methods: {
    getName() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.userName = doc.data().name;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
