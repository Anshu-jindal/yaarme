var tab = document.getElementsByClassName("block-tab");
var cont = document.getElementsByClassName("continue");
var prev = document.getElementsByClassName("previous");
var lform = document.getElementById("login-form");
var sform = document.getElementById("signup-form");
var login = document.getElementById("login-back");
var signup = document.getElementById("signup-forward");
var smob = document.getElementById("signup-forward-mobile");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");

// Form Required Elements
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");

// Form Validation
function checkForm(type) {
  //    validate form
  //    if(type == 1){
  //        if(first_name.value === ""){
  //            alert("Please fill in your First name");
  //            return 0;
  //        }
  //
  //    }
}

// Update Progress Bar
var progressBar = function (data, type) {
  var lid = "l-" + data;
  var nid = "n-" + data;

  if (type === "c") {
    document.getElementById(lid).classList.add("finish-line");
    document.getElementById(nid).classList.add("finished");
  } else {
    document.getElementById(lid).classList.remove("finish-line");
    if (data !== "1") {
      document.getElementById(nid).classList.remove("finished");
    }
  }
};

for (elem of cont) {
  // For Sliding left Animation
  elem.onclick = function () {
    var data = this.getAttribute("data-id");

    if (checkForm(data) != 0) {
      progressBar(data, "c");
      this.parentElement.parentElement.classList.add("slide-left");
    }

    window.scrollTo(0, 0);
  };
}

for (elem of prev) {
  // For Sliding Right Animation
  elem.onclick = function () {
    var data = this.getAttribute("data-id");
    progressBar(data, "p");

    this.parentElement.parentElement.previousElementSibling.classList.remove(
      "slide-left"
    );
    window.scrollTo(0, 0);
  };
}

// Filling in Date
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  date.appendChild(option);
}

// Filling in Month
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
for (var i = 0; i < 12; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.innerHTML = months[i];
  month.appendChild(option);
}

// Filling in Year
for (var i = 2020; i >= 1940; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  year.appendChild(option);
}

// login varifcation
function animation() {
  document.querySelector(".loader").style.display = "flex";
}
function animation_close() {
  document.querySelector(".loader").style.display = "none";
}

//    show skip option

document.getElementById("date").addEventListener("input", function () {
  showcontinue();
});
document.getElementById("month").addEventListener("input", function () {
  showcontinue();
});
document.getElementById("month").addEventListener("input", function () {
  showcontinue();
});

function showcontinue() {
  if (
    (document.getElementById("date").value &&
      document.getElementById("month").value) ||
    document.getElementById("year").value
  ) {
    document.getElementById("st_1").innerHTML = "Continue";
  }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#profile__pic").attr("src", e.target.result).width(200).height(200);
      $("#profile__pic").addClass("profile-pic");
    };

    reader.readAsDataURL(input.files[0]);
  }
}
