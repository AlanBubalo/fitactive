<template>
  <div class="welcome flex-container">
    
    <div class="welcomeimage">
      <img class="img" alt="FitActive logo" src="@/assets/welcome.jpg" />
      <div class="title">
        Welcome to FitActive
      </div>
    </div>
    <div class="advice">
      <p>"All progress takes place outside the comfort zone."</p>
    </div>
    <div>
      <router-link class="btn btn-fit" role="button" to="/login">Login</router-link>
    </div>
    <div class="signupbox">
      <p>Getting started? <router-link class="text-btn" to=/signup>Sign up</router-link></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-btn {
  text-decoration: none;
  color: var(--main-bg-color);
  font-weight: bold;
}

.text-btn:hover {
  color: var(--main-bg-color-hover);
}

.signupbox{
  margin: 20px;
}

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}

.welcomeimage {
  position: relative;
  text-align: center;
  color: var(--fit-white);
}

.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em !important;
  font-weight: bold;
  text-shadow: 6px 4px var(--main-bg-color);
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Welcome",
  components: {},
};
</script>
