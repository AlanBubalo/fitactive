<template>
  <div class="welcome flex-container">
    <div class="welcomeimage">
    <img class="centered img" alt="FitActive logo" src="@/assets/welcome.jpg" />
    <div class="centered">"All progress takes place outside the comfort zone."</div>
    </div>
    <div>
      <router-link class="btn btn-primary login" role="button" to="/login">Login</router-link>
    </div>
    <div class="signupbox">
      <p>Getting started? <router-link class="signup" to=/signup>Sign up</router-link></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  text-decoration: none;
  color:#F83E5F;
  font-weight: bold;
}

.signupbox{
  margin: 20px;
}

.login {
  padding: 12px 128px;
  margin-top: 32px;
  margin-bottom: 8px;
}

.btn-primary{
  background-color: #F83E5F;
  border-color: #F83E5F;
  border-radius: 20px;
}

.img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: 50% 23%;
}

// .welcomeimage {
//   position: relative;
//   text-align: center;
//   color: white;
// }

// .centered{
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
</style>

<script>
// @ is an alias to /src

export default {
  name: "Welcome",
  components: {},
};
</script>
