const emailValidate = document.getElementById("email-validation");
const passValidate = document.getElementById("password-validation");
const confirmValidate = document.getElementById("confirm-validation");

document
  .getElementById("inputEmail4")
  .addEventListener("keyup", pressEmailHandler);

document
  .getElementById("inputPassword4")
  .addEventListener("keyup", pressPassHandler);

document
  .getElementById("inputConfirmPassword4")
  .addEventListener("keyup", pressPassHandler);

function pressEmailHandler(e) {
  console.log(validateEmail(this.value));
  if (!validateEmail(this.value) && this.value.length > 0) {
    emailValidate.innerHTML = `Please fill proper email`;
  } else {
    emailValidate.innerHTML = ``;
  }
}
function pressPassHandler(e) {
  console.log(e.target.id);
  if (this.value.length <= 5 && this.value.length > 0) {
    e.target.id === "inputPassword4"
      ? (passValidate.innerHTML = `Password must contain more than 5 word`)
      : (confirmValidate.innerHTML = `Password must contain more than 5 word`);
  } else {
    e.target.id === "inputPassword4"
      ? (passValidate.innerHTML = ``)
      : (confirmValidate.innerHTML = ``);
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
