<template>
  <div
    v-if="!this.isMobileDevice()"
    class="container p-4 bg-white my-4 my-rounded"
  >
    <h4>Focus Area:</h4>
    <ul
      class="nav nav-pills nav-fill d-flex justify-content-between text-center mt-4"
    >
      <li class="col p-0">
        <a class="nav-link active" data-bs-toggle="tab" href="#fullbody"
          >Full body</a
        >
      </li>
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#abs">Abs</a>
      </li>
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#arms">Arms</a>
      </li>
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#chest">Chest</a>
      </li>
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#legs">Legs</a>
      </li>
      <li class="col-4 col-md p-0">
        <a class="nav-link" data-bs-toggle="tab" href="#back">Back</a>
      </li>
    </ul>
    <!-- Full Body -->
    <div class="tab-content mt-1">
      <div id="fullbody" class="tab-pane fade in show active">
        <img class="img1" src="@/assets/full-body.jpg" />
        <div class="row">
          <div class="col p-1">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Leg stretch</li>
              <li>Jumping Jacks</li>
              <li>Mill</li>
              <li>Jogging</li>
            </ol>
          </div>
          <div class="col p-1">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Hip Circles</li>
              <li>Arm Circles</li>
              <li>Jump Rope</li>
              <li>Walk-Outs</li>
              <li>Squats</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Chest-to-floor burpee</li>
              <li>Turkish get-up</li>
              <li>Wall balls</li>
              <li>Crocodile walk</li>
              <li>Medicine ball slam</li>
            </ol>
          </div>
          <div class="col p-1">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Man maker</li>
              <li>Deadlift</li>
              <li>Medicine ball over the shoulder</li>
              <li>Barbell thruster</li>
              <li>Kettlebell snatch</li>
              <li>Burpee pull-up</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Abs -->
      <div id="abs" class="tab-pane fade">
        <img class="img2" src="@/assets/abs.jpg" />
        <div class="row">
          <div class="col">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Abs</h4>
            <div>Exercises</div>
            <ol>
              <li>Jumping Jacks</li>
              <li>Sit-Ups</li>
              <li>Leg Hold</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Mountain Climbers</li>
              <li>Criss Cross Crunches</li>
              <li>Scissor Skier</li>
              <li>Hip Circles</li>
              <li>Bent Over Twist</li>
            </ol>
            <h4 class="text-center pb-3">Abs</h4>
            <div>Exercises</div>
            <ol>
              <li>Leg raise</li>
              <li>Abs roll-out</li>
              <li>Bird-dog</li>
              <li>Hanging knee raise</li>
              <li>Flutter kicks</li>
              <li>Walking plank</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Abs</h4>
            <div>Exercises</div>
            <ol>
              <li>Pallof press</li>
              <li>Hollow body rock</li>
              <li>Bicycle Crunch</li>
              <li>V-sit</li>
              <li>L-sit</li>
              <li>Medicine ball crunch</li>
              <li>Dragon flag</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Arms -->
      <div id="arms" class="tab-pane fade">
        <img class="img3" src="@/assets/arms.jpg" />
        <div class="row">
          <div class="col">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Arms</h4>
            <div>Exercises</div>
            <ol>
              <li>Bench Press</li>
              <li>Pull-Ups</li>
              <li>Hammer Curls</li>
              <li>Standing Barbell Curl</li>
              <li>Push-Ups</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Arm Circles</li>
              <li>Overhead Shoulder Stretch</li>
              <li>Arm Crossovers</li>
              <li>Incline Push-Up</li>
              <li>Thread the Needle</li>
            </ol>
            <h4 class="text-center pb-3">Arms</h4>
            <div>Exercises</div>
            <ol>
              <li>Triceps dip</li>
              <li>Press-up</li>
              <li>Zottman curl</li>
              <li>Chin-up</li>
              <li>Concentration curl</li>
              <li>Battle rope wave</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Arms</h4>
            <div>Exercises</div>
            <ol>
              <li>Ring dip</li>
              <li>Close-grip triceps press-up</li>
              <li>Handstand press-up</li>
              <li>Bench press</li>
              <li>Spider curl</li>
              <li>Zercher carry</li>
              <li>Close-grip chin-up</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Chest -->
      <div id="chest" class="tab-pane fade">
        <img class="img4" src="@/assets/chest.jpg" />
        <div class="row">
          <div class="col">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Hands-elevated press-up</li>
              <li>Incline dumbbell press</li>
              <li>Press-up</li>
              <li>Shoulder tap</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Dips</li>
              <li>Plyo Push Ups</li>
              <li>Incline Dumbbell Flyes</li>
              <li>Svend Press</li>
              <li>Barbell Pushup</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Barbell bench press</li>
              <li>Cable cross-over</li>
              <li>Gym ball press-up</li>
              <li>Floor press</li>
              <li>Dumbbell flyes</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Guillotine press</li>
              <li>Clap press-up</li>
              <li>Divebomber press-up</li>
              <li>Landmine press</li>
              <li>Kettlebell incline flye</li>
              <li>Weighted dip</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Legs -->
      <div id="legs" class="tab-pane fade">
        <img class="img5" src="@/assets/legs.jpg" />
        <div class="row">
          <div class="col">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Goblet squat</li>
              <li>Dumbbell step-up</li>
              <li>Glute bridge</li>
              <li>Calf raise</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Jumping Jack</li>
              <li>Glute Bridge</li>
              <li>Hip Circle</li>
              <li>Leg Stretches (calves, quadriceps, hamstrings)</li>
              <li>Hip Switch</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Hex bar deadlift</li>
              <li>Walking lunge with dumbbells</li>
              <li>Split squat</li>
              <li>Kettlebell swing</li>
              <li>Sumo deadlift</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Overhead squat</li>
              <li>Hang clean</li>
              <li>Thruster</li>
              <li>Deadlift</li>
              <li>Box jump</li>
              <li>Sled push</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Back -->
      <div id="back" class="tab-pane fade">
        <img class="img6" src="@/assets/back.jpg" />
        <div class="row">
          <div class="col">
            <h3 class="text-center">Beginner</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Pull-up</li>
              <li>Bird-dog</li>
              <li>Superman</li>
              <li>Shrug</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Intermediate</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Foam Roller Back Extension</li>
              <li>Toe Touch</li>
              <li>Rockback Rotation</li>
              <li>Cat Stretch</li>
              <li>Ladders</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Deadlift</li>
              <li>Bent over barbell rows</li>
              <li>Pull Ups and Chin Ups</li>
              <li>Face Pulls</li>
              <li>Seated Cable Rows</li>
            </ol>
          </div>
          <div class="col">
            <h3 class="text-center">Advanced</h3>
            <h4 class="text-center pb-3">Warm up</h4>
            <div>Exercises</div>
            <ol>
              <li>Squats</li>
              <li>Sit-Ups</li>
              <li>Push-Ups</li>
              <li>Pull-Ups</li>
              <li>Plank</li>
            </ol>
            <h4 class="text-center pb-3">Full Body</h4>
            <div>Exercises</div>
            <ol>
              <li>Barbell Deadlifts</li>
              <li>Wide-Grip Seated Cable Rows</li>
              <li>Single Arm Dumbbell Rows</li>
              <li>Reverse Hyperextensions</li>
              <li>Renegade row</li>
              <li>Single-arm cable row</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Mobile!!</div>
</template>

<style scoped lang="scss">
@import "@/colors";

.nav-pills {
  & .nav-link {
    color: $black;
  }
  & .nav-link:hover {
    background-color: #dadada !important;
  }
  & .nav-link.active {
    color: $white;
    background-color: $primary !important;
  }
  & > * {
    padding: 0.25rem 0.5rem;
  }
}

img {
  border-radius: 0.5rem;
}

.img1 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 70%;
}

.img2 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 50%;
}

.img3 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 80%;
}

.img4 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 80%;
}

.img5 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 100%;
}

.img6 {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
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
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "Workout",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      userName: "",
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
      db.collection("workout")
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
