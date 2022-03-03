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
            to="/water-intake"
            class="nav-link p-2 px-3 text-center hover-left"
            >WATER INTAKE</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/sleep"
            class="nav-link p-2 px-3 text-center hover-left"
            >SLEEP SCHEDULE</router-link
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

.bg-gradient {
  background: $gradient-primary-secondary !important;
  color: $white !important;
}

.bg-white {
  background-color: $white !important;
  color: $black !important;
}

.my-btn {
  width: 100%;
  border: none;
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

.my-rounded {
  border: 1px solid lighten($black, 70%) !important;
  border-radius: 0.5rem;
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
    isMobileDevice() {
      var check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
  },
};
</script>
