console.log("loaded");

const $email = document.getElementById("email");
const $myForm = document.getElementById("myForm");
const $errorMessage = document.querySelector(".error-message");
const $errorIcon = document.querySelector(".error-icon");
let $isValid = false;

const validateEmail = (email) => {
  const $mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match($mailFormat);
};

const validate = () => {
  if (validateEmail($email.value)) {
    $errorMessage.style.display = "none";
    $errorIcon.style.display = "none";
    $email.style.borderColor = "#ce9797";
    $isValid = true;
  } else {
    $email.style.borderColor = "red";
    $errorMessage.textContent = "Please provide a valid email";
    $errorMessage.style.display = "block";
    $errorIcon.style.display = "block";
    $isValid = false;
  }

  if ($email.value === "") {
    $errorMessage.style.display = "none";
    $errorIcon.style.display = "none";
    $email.style.borderColor = "#ce9797";
  }
}

$email.addEventListener("input", validate);

$myForm.addEventListener("submit", function (e) { 
  e.preventDefault();
  if ($isValid) { 
    this.reset();
    console.log("email is valid");
  }
})