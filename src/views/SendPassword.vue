<template>
  <div class="header-image">
    <img class="img" alt="FitActive Logo" src="@/assets/gym.jpg" />
    <div class="title"></div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <h2>Forgot Password?</h2>
        <p>Your password will be sent to your email account.</p>
        <form class="my-4">
          <div class="form-group my-2">
            <label for="exampleInputEmail1" class="py-1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>
          <button type="submit" class="btn btn-fit">Send</button>
        </form>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 45%;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";

export default {
  name: "SendPassword",
  components: {
    HeaderImage,
  },
};
</script>
