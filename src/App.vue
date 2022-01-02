<template>
  <nav v-if="false" id="nav" class="navbar p-0">
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
    text-shadow: 0.2rem 0.1rem $primary;
  }

  a {
    color: $white;
    font-weight: bold;
    text-decoration: none;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}

.bg-white {
  background: $white;
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
    text-shadow: 0.4rem 0.2rem $primary;
  }
}

.advice {
  background: $gradient-primary-secondary;
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
    border-color: $primary;
  }

  &:hover {
    background-color: $white-hover;
  }
}

.text-primary {
  color: $primary !important;
}

.text-white {
  color: $white !important;
}

.text-black {
  color: $black !important;
}

.bg-black {
  background-color: $black;
}

.my-btn-black {
  background-color: $black;
  border: none;
  color: $white !important;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;

  &:hover {
    background-color: $black-hover;
  }
}

.my-btn-primary {
  background-color: $primary;
  border: none;
  color: $white !important;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;

  &:hover {
    background-color: $primary-hover;
  }
}

.my-link-primary {
  color: $primary;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: $primary-hover;
  }
}
</style>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged(async (user) => {
  const currentRoute = router.currentRoute.value.name;
  const needsUser = router.currentRoute.value.meta.needsUser;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;
    if (!needsUser) {
      router.push("/home");
    }
  } else {
    // User is not signed in.
    store.currentUser = "";
    console.log("No user");
    if (needsUser) router.push("/");
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
};
</script>
