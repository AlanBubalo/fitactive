<template>
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="p-4 bg-white my-rounded col-lg col-sm-12 m-2">
        <h1>Settings</h1>
        <button @click.prevent="logout" class="btn bg-primary box-shadow">
          Logout
        </button>
      </div>
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
  name: "Settings",
  data() {
    return {};
  },
  components: {
    HeaderImage,
  },
  methods: {
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
