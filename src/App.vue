<template>
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
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon navbar-dark"></span>
    </button>

    <div v-if="currentUser" class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/cardio"
            class="nav-link p-2 px-3 text-center hover-left"
            >CARDIO</router-link
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
            to="/calendar"
            class="nav-link p-2 px-3 text-center hover-left"
            >CALENDAR</router-link
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
          <a
            href="#"
            @click.prevent="logout"
            class="nav-link p-2 px-3 text-center hover-left"
            >LOGOUT</a
          >
        </li>
      </ul>
    </div>

    <div v-else class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
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
    text-shadow: 0.4rem 0.3rem $primary;
  }
}

.advice {
  background: $gradient-primary-secondary;
  border-radius: 0 0 2rem 2rem;

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

.text-shadow-hover {
  position: relative;
  transition: 0.3s ease-in-out;
  z-index: 1;

  &:hover,
  &:focus {
    text-shadow: 4px 3px 0px $primary;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    z-index: -1;
  }
}

.box-shadow {
  position: relative;
  transition: 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    box-shadow: 5px 5px 0px $black;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    z-index: -1;
  }
}

.my-link-primary {
  color: $primary !important;
  text-decoration: none;
  font-weight: bold;
}

.hover-left {
  padding: 3px;
  position: relative;
  text-decoration: none;
  color: $white;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $primary;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
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
</style>

<script>
import { firebase } from "@/firebase";
import router from "@/router";

export default {
  name: "app",
  data() {
    return {
      currentUser: null,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(async (user) => {
      const needsUser = router.currentRoute.value.meta.needsUser;
      if (user) {
        // User is signed in.
        this.currentUser = user.email;
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
