<template>
  <!-- App -->
  <nav id="nav" class="navbar navbar-expand-lg">
    <router-link
      to="/"
      id="logo"
      class="navbar-brand fs-2 px-2 mx-3 fw-bold text-white text-shadow-hover"
      >FitActive
    </router-link>
    <button
      class="btn navbar-toggler navbar-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon navbar-dark"></span>
    </button>

    <!-- Navbar if logged in -->
    <div
      v-if="currentUser"
      class="collapse navbar-collapse mx-4"
      id="navbarNav"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/home"
            class="nav-link p-2 px-3 text-center hover-left"
            >HOME</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/setupprofile"
            class="nav-link p-2 px-3 text-center hover-left"
            >PROFILE</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/workout"
            class="nav-link p-2 px-3 text-center hover-left"
            >WORKOUT</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/schedule"
            class="nav-link p-2 px-3 text-center hover-left"
            >SCHEDULE</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/water-intake"
            class="nav-link p-2 px-3 text-center hover-left"
            >WATER INTAKE</router-link
          >
        </li>
      </ul>
      <div class="ms-auto">
        <router-link
          to="/settings"
          class="nav-link p-2 px-3 text-center hover-left"
          >SETTINGS</router-link
        >
      </div>
    </div>

    <!-- Navbar if not logged in -->
    <div v-else class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link p-2 px-3 text-center hover-left"
            >LOGIN</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/signup"
            class="nav-link p-2 px-3 text-center hover-left"
            >SIGNUP</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/colors";
@import "@/base";

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}

#nav {
  background-color: $black;
  min-height: 3rem;
  box-shadow: 0px 1px 4px;

  a {
    color: $white;
    font-weight: bold;
    text-decoration: none;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>

<script>
import { firebase } from "@/firebase";
import router from "@/router";

export default {
  name: "App",
  data() {
    return {
      currentUser: null,
    };
  },
  mounted() {
    //this.$root.$refs.App = this;
    firebase.auth().onAuthStateChanged(async (user) => {
      const needsUser = router.currentRoute.value.meta.needsUser;
      if (user) {
        // User is signed in.
        this.currentUser = user.email;
        console.log(user.email);
        this.pushNotifs();
        if (!needsUser) router.push("/home");
      } else {
        // User is not signed in.
        this.currentUser = null;
        console.log("No user");
        if (needsUser) router.push("/");
      }
    });
  },
  methods: {
    pushNotifs() {
      const d = new Date();
      const currentDay = d.getHours();
      console.log(currentDay);
      setInterval(() => {
        /*
        if (getTime(Date.now()) ==)*/
      }, 2000);
    },
  },
};
</script>
