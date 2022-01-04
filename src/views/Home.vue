<template>
  <div class="text-white">
    <div class="header-image">
      <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
      <div class="title">Home</div>
    </div>
    <div class="advice text-center">
      <p>Welcome, {{ userName }}</p>
    </div>
  </div>

  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <router-link class="my-link-primary" to="/setupprofile"
          >Setup Profile</router-link
        >
        <button class="btn my-btn bg-primary box-shadow" @click="logout">
          Log out
        </button>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import store from "@/store";
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
      db.collection("profile")
        .doc(store.currentUser)
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
