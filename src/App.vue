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

    <div class="mr-auto"></div>
    <div>
      <router-link to="/" class="px-3">Welcome Page</router-link>
      <router-link to="/login" class="px-3">Log in</router-link>
      <router-link to="/signup" class="px-3">Sign up</router-link>
      <router-link to="/" class="px-3" v-if="false">Home</router-link>
      <router-link to="/" class="px-3" v-if="false">Cardio</router-link>
      <router-link to="/" class="px-3" v-if="false">Workout</router-link>
      <router-link to="/" class="px-3" v-if="false">Calendar</router-link>
      <router-link to="/" class="px-3" v-if="false"
        >Workout Schedule</router-link
      >
      <router-link to="/" class="px-3" v-if="false">Profile</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
// ----- Colors ----- //
$primary-color: #f83e5f;
$primary-color-hover: #e64562;
$middle-color: #e44b84;
$secondary-color: #c560c1;
$white: #f8f8f8;
$black: #262626;

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
    font-size: 5rem;
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

.btn-fit {
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

.text-btn {
  color: $primary-color;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: $primary-color-hover;
  }
}

input[type="checkbox"] {
  &.active {
    background-color: $primary-color;
  }
}
</style>
