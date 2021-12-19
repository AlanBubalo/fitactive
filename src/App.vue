<template>
  <!--
  <div id="nav">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/fitactive.png"
            alt=""
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <router-link to="/">Welcome</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to=/signup>Sign up</router-link>
      </div>
    </nav>
  </div>
  -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--fit-black);
}

#nav {
  a {
    font-weight: bold;
    color: var(--fit-black);
    text-decoration: none;
    &.router-link-exact-active {
      color: var(--main-bg-color);
    }
  }
}

p {
  color: var(--fit-black);
}

.btn:focus,
.form-control:focus {
  outline: none;
  box-shadow: none;
}

.form-control:focus {
  border-color: var(--main-bg-color);
}

.btn-fit {
  padding: 12px 128px;
  margin-top: 32px;
  margin-bottom: 8px;
  background-color: var(--main-bg-color);
  border-color: var(--main-bg-color);
  border-radius: 20px;
  color: var(--fit-white) !important;
}

.btn-fit:hover {
  background-color: var(--main-bg-color-hover);
}

.advice {
  background: linear-gradient(var(--main-bg-color), var(--secondary-bg-color));
  border-radius: 0 0 30px 30px;

  p {
    color: var(--fit-white);
    padding: 3em;
  }
}
</style>
