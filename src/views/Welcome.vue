<template>
  <div class="welcome flex-container">
    <img alt="FitActive logo" src="@/assets/fitactive.png" />
    <div>
      <router-link class="btn btn-primary login" role="button" to="/login">Login</router-link>
    </div>
    <div>
      <p>Getting started? <router-link class="signup" to=/signup>Signup</router-link></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  text-decoration: none;
}
.login {
  padding: 12px 128px;
  margin-top: 32px;
  margin-bottom: 8px;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Welcome",
  components: {},
};
</script>
