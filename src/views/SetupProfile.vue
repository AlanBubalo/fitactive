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
              v-model="newName"
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
                  v-model="newWeight"
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
                  v-model="newHeight"
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
                  v-model="newAge"
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
                  v-model="newGender"
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

export default {
  name: "SetupProfile",
  data() {
    return {
      email: firebase.auth().currentUser.email,
      newName: null,
      newWeight: null,
      newHeight: null,
      newAge: null,
      newGender: null,
      oldName: null,
      oldWeight: null,
      oldHeight: null,
      oldAge: null,
      oldGender: null,
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.newName = doc.data().name;
            this.newWeight = doc.data().weight;
            this.newHeight = doc.data().height;
            this.newAge = doc.data().age;
            this.newGender = doc.data().gender;
            this.oldName = this.newName;
            this.oldWeight = this.newWeight;
            this.oldHeight = this.newHeight;
            this.oldAge = this.newAge;
            this.oldGender = this.newGender;
          } else {
            this.oldName = this.newName;
            this.oldWeight = this.newWeight;
            this.oldHeight = this.newHeight;
            this.oldAge = this.newAge;
            this.oldGender = this.newGender;
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    save() {
      db.collection("profile")
        .doc(this.email)
        .set({
          name: this.newName,
          weight: this.newWeight,
          height: this.newHeight,
          age: this.newAge,
          gender: this.newGender,
        })
        .then((doc) => {
          console.log("Saved.");
          router.push("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.oldName != this.newName ||
      this.oldWeight != this.newWeight ||
      this.oldHeight != this.newHeight ||
      this.oldAge != this.newAge ||
      this.oldGender != this.newGender
    ) {
      const answer = window.confirm(
        "Do you really want to leave? You have unsaved changes!"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      console.log("Unchanged");
      next();
    }
  },
};
</script>
