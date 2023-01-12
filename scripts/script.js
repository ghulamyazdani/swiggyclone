const user = JSON.parse(localStorage.getItem("user"));
const signupopen = document.getElementById("signupopen");
const loginopen = document.getElementById("loginopen");

// window.onload = () => {
//   // document.getElementById("loading").style.display = "none";
//   if (
//     user &&
//     !window.location.href.includes("index.html") &&
//     !window.location.href.includes("signup.html")
//   ) {
//     window.location.href = "index.html";
//   } else if (
//     !user &&
//     !window.location.href.includes("login.html") &&
//     !window.location.href.includes("signup.html")
//   ) {
//     window.location.href = "login.html";
//   }
// };

// (function () {
//   if (user) {
//     window.location.href = "index.html";
//   } else {
//     window.location.href = "login.html";
//   }
// })(user);
signupopen.addEventListener("click", handleSignupOpen);
loginopen.addEventListener("click", handleLoginOpen);
var state = "";
function handleSignupOpen() {
  if (document.getElementById("drawer2").style.display === "none") {
    document.getElementById("drawer1").style.display = "none";
    document.getElementById("drawer2").style.display = "flex";
    state = "signup";
  } else {
    document.getElementById("drawer2").style.display = "none";
  }
}

function handleLoginOpen() {
  if (document.getElementById("drawer1").style.display === "none") {
    document.getElementById("drawer2").style.display = "none";
    document.getElementById("drawer1").style.display = "flex";
    state = "login";
  } else {
    document.getElementById("drawer1").style.display = "none";
  }
}

function closeDrawer() {
  if (state === "signup") {
    document.getElementById("drawer2").style.display = "none";
  } else if (state === "login") {
    document.getElementById("drawer1").style.display = "none";
  }
}
