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
      <div class="col-12 col-md-5 mt-0">
        <div class="p-4 bg-white my-rounded h-100 me-0">
          <div class="d-flex justify-content-between">
            <div>
              <h4>Total Glasses</h4>
              <input id="demoInput" type="number" min="100" max="110" />
              <button onclick="increment()">+</button>
              <button onclick="decrement()">-</button>
              <!-- treba dodati gumb ili nesto slicno za vrijeme -->
              <div>
                <h4>ml: [2200]</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default {};

function increment() {
  document.getElementById("demoInput").stepUp();
}
function decrement() {
  document.getElementById("demoInput").stepDown();
}
</script>
