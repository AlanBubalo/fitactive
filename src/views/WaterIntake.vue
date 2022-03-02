<template>
  <div class="advice text-center text-white">
    <p>
      The amount of drinking water required to maintain good health varies, and
      depends on physical activity level, age, health-related issues, and
      environmental conditions.
    </p>
  </div>
  <div class="container">
    <div class="row g-3 my-3">
      <!-- Water Intake -->
      <div class="col"></div>
      <div class="col-12 col-md-5 mt-0">
        <div class="p-4 bg-white my-rounded h-100 me-0">
          <div class="d-flex">
            <form @submit.prevent="save">
              <h4>Total Glasses:</h4>
              <input
                v-model="newGlassesTotal"
                id="demoInput"
                type="number"
                min="0"
                max="15"
              />
              <div>
                <button type="submit" class="btn my-btn bg-primary box-shadow">
                  Save
                </button>
              </div>
            </form>
          </div>
          <button
            type="button"
            @click="reset()"
            class="btn bg-primary box-shadow"
          >
            Reset
          </button>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

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
