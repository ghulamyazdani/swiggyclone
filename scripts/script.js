const user = JSON.parse(localStorage.getItem("user"));
const signupopen = document.getElementById("signupopen");
const loginopen = document.getElementById("loginopen");
// window.onload = () => {
//   // document.getElementById("loading").style.display = "none";
//   if (user && window.location.href.includes("menu.html")) {
//     // window.location.href = "menu.html";
//   } else if (!user && window.location.href.includes("menu.html")) {
//     window.location.href = "index.html";
//   }
// };

// (function () {
//   if (user) {
//     window.location.href = "index.html";
//   } else {
//     window.location.href = "login.html";
//   }
// })(user);

window.onload = () => {
  if (user) {
    document.getElementById(
      "mainop"
    ).innerHTML = `<button id="userbutton">${user.username}</button> <div id="logout" onclick="logout()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></div>`;
  } else {
    // window.location.href = "login.html";
  }
};
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

var arr = [
  "Hungry?",
  "Movie marathon?",
  "Unexpected guests?",
  "Late Night at Office?",
  "Cooking gone wrong?",
  "Game Night?",
  "Late Night at Office?",
];

var i = 0;
let count = 0;
let slideInterval;

function typeWriter() {
  handleOnNextClick();
  slideInterval = setInterval(() => {
    handleOnNextClick();
  }, 3000);
}
typeWriter();

function handleOnNextClick() {
  count = (count + 1) % arr.length;
  document.getElementById("ani").innerHTML = arr[count];
}
