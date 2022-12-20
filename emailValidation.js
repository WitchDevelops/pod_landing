const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
  //if email is valid, there is no message
  email.Error.textContent = "";
  email.Error.className ="error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
// Then we prevent the form from being sent by canceling the event
event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      // If the field is empty, display the following error message.
      emailError.textContent = "Oops! Please check your email";
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address, display the following error message.
      emailError.textContent = "Oops! Please check your email";
    }
  
    // Set the styling appropriately
    emailError.className = "error active";
  }