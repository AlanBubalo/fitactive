<template>
  <nav id="nav" class="navbar p-0">
    <!-- <a class="navbar-brand" href="#">
          <img
            src="@/assets/fitactive.png"
            alt=""
            height="24"
            class="d-inline-block align-text-top"
          />
        </a> -->
    <div class="mr-auto text-white">
      {{ store.currentUser }}
    </div>
    <div>
      <router-link v-if="!store.currentUser" to="/" class="px-3"
        >Welcome Page</router-link
      >
      <router-link v-if="!store.currentUser" to="/login" class="px-3"
        >Log in</router-link
      >
      <router-link v-if="!store.currentUser" to="/signup" class="px-3"
        >Sign up</router-link
      >
      <router-link v-if="store.currentUser" to="/home" class="px-3"
        >Home</router-link
      >
      <!--
      <router-link v-if="store.currentUser" to="/" class="px-3"
        >Cardio</router-link
      >
      <router-link v-if="store.currentUser" to="/" class="px-3"
        >Workout</router-link
      >
      <router-link v-if="store.currentUser" to="/" class="px-3"
        >Calendar</router-link
      >
      <router-link v-if="store.currentUser" to="/" class="px-3"
        >Workout Schedule</router-link
      > -->
      <a v-if="store.currentUser" href="#" @click.prevent="logout" class="px-3"
        >Log out</a
      >
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

  p {
    color: $white;
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
    background-color: #fdfdfd;
  }
}

.my-btn-primary {
  background-color: $primary-color;
  border-color: $primary-color;
  color: $white !important;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;

  &:hover {
    background-color: $primary-color-hover;
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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = true;
    console.log(store.currentUser);
  } else {
    // User is not signed in.
    console.log("No user");
    store.currentUser = false;
    console.log(store.currentUser);
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Welcome" });
        });
    },
  },
};
</script>
