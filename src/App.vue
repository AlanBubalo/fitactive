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

.header-image {
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
  border: none;
  background-color: $white !important;

  &:focus {
    border-color: $primary;
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

.bg-primary {
  background-color: $primary !important;
  color: $white !important;
}

.bg-secondary {
  background-color: $secondary !important;
  color: $white !important;
}

.bg-black {
  background-color: $black !important;
  color: $white !important;
}

.bg-white {
  background-color: $white !important;
  color: $black !important;
}

.my-btn {
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
}

.small-btn-primary {
  padding: 0.5rem 0;
  width: 70px;
  border-radius: 0.3rem;
}

.box-shadow {
  position: relative;
  transition: 0.4s ease-in-out;
  z-index: 1;

  &:hover {
    box-shadow: 6px 6px 0px $black;
    top: -2px;
    left: -2px;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    z-index: -1;
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

/* Checkbox Container */
.my-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    // Background of unchecked checkbox
    background-color: $white;
    border-radius: 5px;
    transition: 0.3s background-color;

    &:after {
      content: "";
      position: absolute;
      display: none;

      // Icon for checked checkbox
      left: 8px;
      top: 3px;
      width: 4px;
      height: 12px;
      border: solid $white;
      border-width: 0 2px 3px 0;
      transform: rotate(45deg);
    }
  }

  &:hover span {
    // Background of unchecked checkbox when hovered
    background-color: darken($white, 5%);
  }

  input:checked {
    ~ span {
      // Background of checked checkbox
      background-color: $primary;

      &::after {
        display: block;
      }
    }
  }
}
/* hide default checkbox  */
/* custom checkbox */
/* the check icon */

/**** Here's the trick ***/
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
