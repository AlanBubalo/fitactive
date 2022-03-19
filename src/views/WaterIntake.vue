<template>
  <div class="advice">
    <p>
      The amount of drinking water required to maintain good health varies, and
      depends on physical activity level, age, health-related issues, and
      environmental conditions.
    </p>
  </div>
  <div class="container-fluid">
    <div class="row g-3 my-3">
      <!-- Water Intake -->
      <div class="col"></div>
      <div class="col-12 col-md-3 col-sm-8 mt-3">
        <form @submit.prevent="save" class="">
          <h4>Total Glasses:</h4>
          <input
            v-model="newGlassesTotal"
            id="demoInput"
            type="number"
            min="0"
            max="15"
            class="form-control box-shadow my-3"
          />
          <!-- Reset Button -->
          <div class="row">
            <div class="col mx-auto">
              <button
                type="button"
                @click="reset()"
                class="btn my-btn border box-shadow p-2"
              >
                Reset
              </button>
            </div>
            <!-- Save Button -->
            <div class="col">
              <button
                type="submit"
                class="btn my-btn bg-primary box-shadow p-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <!-- Picture -->
        <div class="container mt-4">
          <img src="@/assets/water.jpg" alt="Water" class="image" />
          <div class="overlay">
            <div class="text">Stay hydrated throughout the entire day!</div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e63369;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.75s ease;
}

.container:hover .overlay {
  height: 100%;
}

.text {
  white-space: nowrap;
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.my-rounded {
  border: 1px solid lighten($black, 70%) !important;
  border-radius: 0.5rem;
}

.panel-default {
  //border-color: green !important;
  border-radius: 0.5rem 0.5rem 0rem 0rem !important;
  border-color: lighten($black, 70%);

  .my-btn {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .card {
    border-top: 1px solid lighten($black, 10%);
    border-radius: 0;
  }
}

.text-shadow {
  font-weight: bold;
}

.plus-minus-input {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.plus-minus-input .input-group-field {
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
}

.plus-minus-input .input-group-field::-webkit-inner-spin-button,
.plus-minus-input .input-group-field ::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

.plus-minus-input .input-group-button .circle {
  border-radius: 50%;
  padding: 0.25em 0.8em;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "WaterIntake",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      newGlassesTotal: null,
      oldGlassesTotal: null,
      newGlassesDrank: null,
      saved: false,
    };
  },
  mounted() {
    this.getGlassesTotal();
  },
  methods: {
    getGlassesTotal() {
      db.collection("waterIntake")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.newGlassesTotal = doc.data().glassesTotal;
            this.newGlassesDrank = doc.data().glassesDrank;
            this.oldGlassesTotal = this.newGlassesTotal;
            console.log(
              "old=",
              this.oldGlassesTotal,
              "new=",
              this.newGlassesTotal
            );
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
      if (this.newGlassesTotal < this.oldGlassesTotal) {
        this.newGlassesDrank = this.newGlassesTotal;
      }
      db.collection("waterIntake")
        .doc(this.email)
        .set({
          glassesTotal: this.newGlassesTotal,
          glassesDrank: this.newGlassesDrank,
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
    reset() {
      const answer = window.confirm(
        "Are you sure you want to reset your progress?"
      );
      if (answer) {
        db.collection("waterIntake")
          .doc(this.email)
          .set({
            glassesTotal: this.newGlassesTotal,
            glassesDrank: 0,
          })
          .then((doc) => {
            console.log("Saved.");
            this.saved = true;
            router.push("/home");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved) next();
    else if (this.oldGlassesTotal != this.newGlassesTotal) {
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
