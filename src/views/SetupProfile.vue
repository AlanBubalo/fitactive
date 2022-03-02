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
          <div class="profile-pic">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
              <span>Change Profile Picture</span>
            </label>
            <input id="file" type="file" onchange="loadFile(event)" />
            <img src="@/assets/male.png" id="output" />
          </div>
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

@mixin object-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

$circleSize: 165px;
$radius: 100px;
$shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
$fontColor: rgb(250, 250, 250);

.profile-pic {
  color: transparent;
  transition: all 0.3s ease;
  @include object-center;
  position: relative;
  transition: all 0.3s ease;

  input {
    display: none;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: $circleSize;
    height: $circleSize;
    box-shadow: $shadow;
    border-radius: $radius;
    z-index: 0;
  }

  .-label {
    cursor: pointer;
    height: $circleSize;
    width: $circleSize;
  }

  &:hover {
    .-label {
      @include object-center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: $fontColor;
      transition: background-color 0.2s ease-in-out;
      border-radius: $radius;
      margin-bottom: 0;
    }
  }

  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
}

/////////////////////////
// Body styling 🐾
/////////---------->

body {
  height: 100vh;
  background-color: rgb(25, 24, 21);
  @include object-center;

  a:hover {
    text-decoration: none;
  }
}

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

.profile {
  height: 75px;
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

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

export default {
  name: "SetupProfile",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
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
      saved: false,
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
          this.saved = true;
          router.push("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved) next();
    else if (
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
