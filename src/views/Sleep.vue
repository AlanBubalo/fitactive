<template>
  <!-- Ovo micemo -->
  <div class="advice text-center text-white">
    <p>
      Children need many hours of sleep per day in order to develop and function
      properly: up to 18 hours for newborn babies, with a declining rate as a
      child ages.
    </p>
  </div>
  <div class="container">
    <div class="row g-3 my-3">
      <!-- Sleep Schedule -->
      <div class="col"></div>
      <div class="col-12 col-md-5 mt-0">
        <div class="p-4 bg-white my-rounded h-100 me-0">
          <div class="d-flex justify-content-center">
            <div>
              <h4>When do you want to wake up?</h4>
              <input type="text" class="time-pickable" readonly />
              <div>
                <h4>You should go to sleep at: [22:30]</h4>
              </div>
            </div>
          </div>
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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

function activate() {
  document.head.insertAdjacentHTML(
    "beforeend",
    `
		<style>
			.time-picker {
				position: absolute;
				display: inline-block;
				padding: 10px;
				background: #eeeeee;
				border-radius: 6px;
			}

			.time-picker__select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				outline: none;
				text-align: center;
				border: 1px solid #dddddd;
				border-radius: 6px;
				padding: 6px 10px;
				background: #ffffff;
				cursor: pointer;
				font-family: 'Heebo', sans-serif;
			}
		</style>
	`
  );

  document.querySelectorAll(".time-pickable").forEach((timePickable) => {
    let activePicker = null;

    timePickable.addEventListener("focus", () => {
      if (activePicker) return;

      activePicker = show(timePickable);

      const onClickAway = ({ target }) => {
        if (
          target === activePicker ||
          target === timePickable ||
          activePicker.contains(target)
        ) {
          return;
        }

        document.removeEventListener("mousedown", onClickAway);
        document.body.removeChild(activePicker);
        activePicker = null;
      };

      document.addEventListener("mousedown", onClickAway);
    });
  });
}

function show(timePickable) {
  const picker = buildPicker(timePickable);
  const { bottom: top, left } = timePickable.getBoundingClientRect();

  picker.style.top = `${top}px`;
  picker.style.left = `${left}px`;

  document.body.appendChild(picker);

  return picker;
}

function buildPicker(timePickable) {
  const picker = document.createElement("div");
  const hourOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    numberToOption
  );
  const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
    numberToOption
  );

  picker.classList.add("time-picker");
  picker.innerHTML = `
		<select class="time-picker__select">
			${hourOptions.join("")}
		</select>
		:
		<select class="time-picker__select">
			${minuteOptions.join("")}
		</select>
		<select class="time-picker__select">
			<option value="am">am</option>
			<option value="pm">pm</option>
		</select>
	`;

  const selects = getSelectsFromPicker(picker);

  selects.hour.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );
  selects.minute.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );
  selects.meridiem.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );

  if (timePickable.value) {
    const { hour, minute, meridiem } = getTimePartsFromPickable(timePickable);

    selects.hour.value = hour;
    selects.minute.value = minute;
    selects.meridiem.value = meridiem;
  }

  return picker;
}

function getTimePartsFromPickable(timePickable) {
  const pattern = /^(\d+):(\d+) (am|pm)$/;
  const [hour, minute, meridiem] = Array.from(
    timePickable.value.match(pattern)
  ).splice(1);

  return {
    hour,
    minute,
    meridiem,
  };
}

function getSelectsFromPicker(timePicker) {
  const [hour, minute, meridiem] = timePicker.querySelectorAll(
    ".time-picker__select"
  );

  return {
    hour,
    minute,
    meridiem,
  };
}

function getTimeStringFromPicker(timePicker) {
  const selects = getSelectsFromPicker(timePicker);

  return `${selects.hour.value}:${selects.minute.value} ${selects.meridiem.value}`;
}

function numberToOption(number) {
  const padded = number.toString().padStart(2, "0");

  return `<option value="${padded}">${padded}</option>`;
}

activate();
</script>
