<template>
  <!-- Setup Profile -->
  <div class="advice">
    <p>
      Losing weight is far from being easy every day. It often requires
      challenging ourselves, lifestyle changes, effort, hard work and
      motivation.
    </p>
  </div>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg-3 col-md-6">
        <form @submit.prevent="save">
          <div class="profile-pic">
            <label class="-label" for="file">
              <span>Change Image</span>
            </label>
            <input
              id="file"
              type="file"
              @change="loadFile"
              accept=".png, .jpg, .jpeg"
            />
            <img
              v-if="localImageUrl"
              :src="localImageUrl"
              width="200"
              alt="Profile image"
            />
            <img
              v-else
              src="@/assets/male.png"
              width="200"
              alt="Profile image"
            />
          </div>
          <!-- First Name -->
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
          <!-- Weight (kg) -->
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
            <!-- Height (cm) -->
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
            <!-- Age -->
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
            <!-- Gender -->
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
          <!-- Save Button -->
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

.profile-pic {
  color: transparent;
  transition: all 0.3s ease;
  @include object-center;
  position: relative;

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
    border-radius: $radius;

    &:hover {
      @include object-center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10000;
      color: $white;
      transition: background-color 0.2s ease-in-out;
    }
  }

  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
}

.img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 70%;
  border-radius: 0 0 3rem 3rem;
}
</style>

<script>
import { db } from "@/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import router from "@/router";
const storage = getStorage();

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
      oldImageUrl: null,
      newImageUrl: null,
      localImageUrl: null,
      imageName: null,
      selectedFile: null,
    };
  },
  created() {
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
            this.newImageUrl = doc.data().imageUrl;
            this.oldName = this.newName;
            this.oldWeight = this.newWeight;
            this.oldHeight = this.newHeight;
            this.oldAge = this.newAge;
            this.oldGender = this.newGender;
            this.oldImageUrl = this.newImageUrl;
            this.localImageUrl = this.newImageUrl;
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
      const ImageRef = ref(storage, this.imageName);
      if (this.selectedFile) {
        uploadBytes(ImageRef, this.selectedFile)
          .then((data) => {
            getDownloadURL(ImageRef)
              .then((url) => {
                console.log(url);
                this.setProfile(url);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.setProfile();
      }
    },
    setProfile(url = null) {
      db.collection("profile")
        .doc(this.email)
        .set({
          name: this.newName,
          weight: this.newWeight,
          height: this.newHeight,
          age: this.newAge,
          gender: this.newGender,
          imageUrl: url,
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
    loadFile(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.localImageUrl = URL.createObjectURL(this.selectedFile);
      this.imageName = this.email + "/profile_picture";
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      !this.newName ||
      !this.newWeight ||
      !this.newHeight ||
      !this.newAge ||
      !this.newGender
    ) {
      next(false);
      return;
    }
    if (this.saved) next();
    else if (
      this.oldName != this.newName ||
      this.oldWeight != this.newWeight ||
      this.oldHeight != this.newHeight ||
      this.oldAge != this.newAge ||
      this.oldGender != this.newGender ||
      this.oldImageUrl != this.localImageUrl
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
