<template>
  <div class="advice text-center text-white">
    <p>Welcome, {{ userName }}</p>
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
      const email = firebase.auth().currentUser.email;
      db.collection("profile")
        .doc(email)
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
