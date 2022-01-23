<template>
  <div class="advice text-center text-white">
    <p>Welcome, {{ Name }}</p>
  </div>
  <div class="container">
    <div class="row gx-5">
      <div class="container p-4 bg-white my-4 my-rounded col-lg col-sm-12 mx-2">
        <h4>Cardio:</h4>
        <p><span class="fs-2">3000</span>/6000 meters</p>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="3000"
            aria-valuemin="0"
            aria-valuemax="6000"
          ></div>
        </div>
      </div>
      <div class="container p-4 bg-white my-4 my-rounded col-lg col-sm-12 mx-2">
        <div class="d-flex justify-content-between">
          <div>
            <h4>Water Intake:</h4>
            <p><span class="fs-2">7</span>/10 glasses</p>
          </div>
          <button class="btn small-btn-primary my-4 bg-primary box-shadow">
            Add
          </button>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 70%"
            aria-valuenow="7"
            aria-valuemin="0"
            aria-valuemax="10"
          ></div>
        </div>
      </div>
      <div class="container p-4 bg-white my-4 my-rounded col-lg col-sm-12 mx-2">
        <h4>Ideal hours for sleep:</h4>
        <p>8 hours 30 minutes</p>
      </div>
    </div>
  </div>
  <div class="container p-4 bg-white my-4 my-rounded">
    <div class="d-flex justify-content-between">
      <h4>Profile:</h4>
      <router-link to="/setupprofile">
        <button class="btn bg-primary box-shadow">
          Setup Profile
        </button></router-link
      >
    </div>
    <div class="row mt-4">
      <div class="col text-center">
        <h5>Weight:</h5>
        <p>{{ Weight }}</p>
      </div>
      <div class="col text-center">
        <h5>Height:</h5>
        <p>{{ Height }}</p>
      </div>
      <div class="col text-center">
        <h5>Age:</h5>
        <p>{{ Age }}</p>
      </div>
      <div class="col text-center">
        <h5>Gender:</h5>
        <p>{{ Gender }}</p>
      </div>
    </div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6"></div>
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
      Name: null,
      Weight: null,
      Height: null,
      Age: null,
      Gender: null,
    };
  },
  components: {
    HeaderImage,
  },
  mounted() {
    this.getProfile();
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
    getProfile() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.Name = doc.data().name;
            this.Weight = doc.data().weight;
            this.Height = doc.data().height;
            this.Age = doc.data().age;
            this.Gender = doc.data().gender;
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
