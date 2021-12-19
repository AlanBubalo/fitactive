<template>
  <div class="home">
    <img alt="FitActive logo" src="@/assets/welcome.jpg" />
    <HelloWorld msg="Welcome to FitActive" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
