<template>
  <div class="advice text-center text-white">
    <p>
      Health benefits of walking: increased cardiovascular and pulmonary (heart
      and lung) fitness. reduced risk of heart disease and stroke. Better cardio
      health. Running for at least 10 minutes a day can significantly lower your
      risk of cardiovascular disease.
    </p>
  </div>
  <div v-if="!this.isMobileDevice()">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg col-md"></div>
        <div class="col-lg col-md-6">
          <form @submit.prevent="cardio">
            <div class="form-group my-4">
              <h4 class="py-1">Select what you want to track:</h4>
              <div class="d-flex justify-content-between bd-highlight">
                <div class="flex-grow-1 bd-highlight">
                  <select
                    v-model="target"
                    class="form-select form-control box-shadow"
                    id="exampleInputTarget"
                    placeholder=""
                    name="target"
                  >
                    <option value="target_distance">Target Distance</option>
                    <option value="target_duration">Target Duration</option>
                    <option value="open_target">Open Target</option>
                  </select>
                </div>
              </div>
            </div>
            <div v-if="target == 'target_distance'" class="form-group my-4">
              <h4 class="py-1">Select cardio distance: (in kilometers)</h4>
              <div class="d-flex justify-content-between bd-highlight">
                <div class="flex-grow-1 bd-highlight">
                  <input
                    type="number"
                    v-model="distance"
                    class="form-control box-shadow"
                    id="exampleInputDistance"
                    min="0"
                  />
                </div>
              </div>
            </div>
            <div v-if="target == 'target_duration'" class="form-group my-4">
              <h4 class="py-1">Select cardio timeout:</h4>
              <div class="d-flex justify-content-between bd-highlight">
                <div class="flex-grow-1 bd-highlight">
                  <input
                    type="time"
                    v-model="timeout"
                    class="form-control box-shadow"
                    id="exampleInputTimeout"
                  />
                </div>
              </div>
            </div>
            <div class="form-group d-flex justify-content-between my-4">
              <h5>GPS Tracker</h5>
              <!-- Rectangular switch -->
              <label class="switch">
                <input type="checkbox" v-model="gps" />
                <span class="slider rounded-pill"></span>
              </label>
            </div>

            <router-link to="/cardio" class="">
              <button class="btn my-btn bg-primary box-shadow">
                Start
              </button></router-link
            >
          </form>
        </div>
        <div class="col-lg col-md"></div>
      </div>
    </div>
  </div>
  <div v-else>Mobile</div>
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #cccccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    border-radius: 999px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked {
  & + .slider {
    background-color: $primary;

    &:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
}

/*
input:focus + .slider {
  box-shadow: 0 0 10px $primary;
}
*/
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "Cardio",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      userName: "",
      target: "target_distance",
      distance: 2,
      timeout: null,
      gps: false,
    };
  },
  components: {
    HeaderImage,
  },
  mounted() {
    this.getName();
  },
  methods: {
    getName() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.userName = doc.data().name;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    isMobileDevice() {
      var check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
  },
};
</script>
