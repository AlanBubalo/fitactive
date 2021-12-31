<template>
  <nav v-if="store.currentUser" id="nav" class="navbar p-0">
    <!-- FitActive Logo -->
    <div class="mr-auto text-white">
      <h1 class="fs-3 px-2 m-2 fw-bold">FitActive</h1>
    </div>
    <div>
      <router-link to="/home" class="px-3">Home</router-link>
      <router-link to="/cardio" class="px-3">Cardio</router-link>
      <router-link to="/workout" class="px-3">Workout</router-link>
      <router-link to="/calendar" class="px-3">Calendar</router-link>
      <router-link to="/schedule" class="px-3">Schedule</router-link>
    </div>
  </nav>

  <router-view />
</template>

<style lang="scss">
@import "@/colors";

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}

#nav {
  background-color: $black;
  min-height: 3rem;

  h1 {
    text-shadow: 0.2rem 0.1rem $primary-color;
  }

  a {
    color: $white;
    font-weight: bold;
    text-decoration: none;

    &.router-link-exact-active {
      color: $primary-color;
    }
  }
}

.header-image {
  color: $white;
  position: relative;
  text-align: center;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 0.4rem 0.2rem $primary-color;
  }
}

.advice {
  background: linear-gradient($primary-color, $secondary-color);
  border-radius: 0 0 3rem 3rem;
  color: $white;

  * {
    padding: 3rem;
  }
}

.btn:focus,
.form-control:focus {
  outline: none;
  box-shadow: none;
}

.form-control {
  background-color: $white;

  &:focus {
    border-color: $primary-color;
  }

  &:hover {
    background-color: $white-hover;
  }
}

.text-primary {
  color: $primary-color !important;
}

.text-white {
  color: $white !important;
}

.text-black {
  color: $black !important;
}

.my-btn-primary {
  background-color: $primary-color;
  border: none;
  color: $white !important;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;

  &:hover {
    background-color: $primary-color-hover;
  }
}

.my-link-primary {
  color: $primary-color;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: $primary-color-hover;
  }
}
</style>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        // User is not signed in.
        store.currentUser = "";
        console.log(store.currentUser);
        router.replace("/");
      } else if (
        route.path == "/" ||
        route.path == "/login" ||
        route.path == "/signup"
      ) {
        // User is signed in.
        store.currentUser = user.email;
        console.log(store.currentUser);
        router.replace("/home");
      }
    });
  },
};
</script>
