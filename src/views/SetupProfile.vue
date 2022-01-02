<template>
  <div class="header-image text-white">
    <img class="img" alt="FitActive Logo" src="@/assets/run.jpg" />
    <div class="title">Set up Your Profile</div>
  </div>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6">
        <form @submit.prevent="save">
          <div class="form-group my-2">
            <label for="exampleInputName" class="py-1">First Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control box-shadow"
              id="exampleInputName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group my-2">
                <label for="exampleInputWeight" class="py-1">Weight (kg)</label>
                <input
                  type="number"
                  v-model="weight"
                  class="form-control box-shadow"
                  id="exampleInputWeight"
                  placeholder=""
                  min="0"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group my-2">
                <label for="exampleInputHeight" class="py-1">Height (cm)</label>
                <input
                  type="number"
                  v-model="height"
                  class="form-control box-shadow"
                  id="exampleInputHeight"
                  placeholder=""
                  min="0"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group my-2">
                <label for="exampleInputAge" class="py-1">Age</label>
                <input
                  type="number"
                  v-model="age"
                  class="form-control box-shadow"
                  id="exampleInputAge"
                  placeholder=""
                  min="0"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group my-2">
                <label for="exampleInputGender" class="py-1">Gender</label>
                <select
                  v-model="gender"
                  class="form-select form-control box-shadow"
                  id="exampleInputGender"
                  placeholder=""
                  name="gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" class="btn my-btn bg-primary box-shadow">
            Save
          </button>
        </form>
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.bg-gradient {
  background-color: $secondary !important;
}

.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 70%;
  border-radius: 0 0 3rem 3rem;
}

.small-btn-primary {
  background-color: $black;
  border: none;
  color: $white !important;
  padding: 0.5rem 0;
  width: 70px;
  border-radius: 1rem;

  &:hover {
    background-color: $black-hover;
  }
}
</style>

<script>
import { firebase, db } from "@/firebase";
import router from "@/router";
import colors from "@/colors.scss";

export default {
  name: "SetupProfile",
  data() {
    return {
      name: null,
      weight: null,
      height: null,
      age: null,
      gender: null,
    };
  },
  /*
  beforeCreate() {
    this.$nextTick(() => {
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(#f83e5f, #c560c1)";
      document.querySelector("body").style.backgroundAttachment = "fixed";
    });
  },
  beforeDestroy() {
    document.querySelector("body").style.backgroundColor = "#f8f8f8";
  },
  */
  methods: {
    save() {
      router.push("/home");
    },
  },
};
</script>
