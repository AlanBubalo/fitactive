<template>
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
      </div>
    </nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to=/signup>Signup</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
