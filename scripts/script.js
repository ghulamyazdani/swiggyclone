const user = JSON.parse(localStorage.getItem("user"));

window.onload = () => {
  document.getElementById("loading").style.display = "none";
  if (
    user &&
    !window.location.href.includes("index.html") &&
    !window.location.href.includes("signup.html")
  ) {
    window.location.href = "index.html";
  } else if (
    !user &&
    !window.location.href.includes("login.html") &&
    !window.location.href.includes("signup.html")
  ) {
    window.location.href = "login.html";
  }
};

// (function () {
//   if (user) {
//     window.location.href = "index.html";
//   } else {
//     window.location.href = "login.html";
//   }
// })(user);
