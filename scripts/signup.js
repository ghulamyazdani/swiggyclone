// Signup
const signupForm = document.getElementById("signupForm");
var finalValidation = document.getElementById("final-validation");
var signupdata = {};

signupForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const email = data.get("email");
  const username = data.get("username");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");
  //   console.log({ email, username, password, confirmPassword });
  signupdata = { email, username, password, confirmPassword };
  console.log(signupdata);
  if (password === confirmPassword) {
    if (
      (password.length > 0 && email.length > 0 && username.length > 0,
      confirmPassword.length > 0)
    ) {
      signup(signupdata);
    } else {
      finalValidation.innerHTML = `Please fill all the required fields`;
    }
  } else {
    finalValidation.innerHTML = `Password and Confirm Password must be same`;
  }
  setTimeout(() => {
    finalValidation.innerHTML = ``;
  }, 2000);
}

function signup(data) {
  var userData = JSON.parse(localStorage.getItem("usersData")) || [];
  if (userData.length > 0) {
    userData = userData.filter(
      (user) => user.email !== data.email || user.username !== data.username
    );
  }
  console.log(userData);
  userData.push(data);
  localStorage.setItem("usersData", JSON.stringify(userData));
  signupForm.innerHTML = `<h1>Signup Successful</h1>`;

  //   localStorage.setItem("user", JSON.stringify(data));
  // window.location.href = "login.html";
}
