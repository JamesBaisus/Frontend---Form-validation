const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error").forEach((el) => {
    el.style.display = "none";
    el.textContent = "";
  });

  document.querySelectorAll("error-border").forEach((el) => {
    el.classList.remove("error-border");
  });

  const firstName = document.getElementById("firstName");

  if (firstName.value.trim() === "") {
    valid = false;
    const firstNameError = document.getElementById("firstNameError");
    firstNameError.style.display = "block";
    firstNameError.textContent = "This field is required";
    firstName.classList.add("error-border");
  }
  const lastName = document.getElementById("lastName");

  if (lastName.value.trim() === "") {
    valid = false;
    const lastNameError = document.getElementById("lastNameError");
    lastNameError.style.display = "block";
    lastNameError.textContent = "This field is required";
    lastName.classList.add("error-border");
  }

  const email = document.getElementById("email");

  if (email.value.trim() === "") {
    valid = false;
    const emailError = document.getElementById("emailError");

    emailError.style.display = "block";
    emailError.textContent = "please enter a valid email address";
    email.classList.add("error-border");
  }

  const choice = document.querySelector("input[ name = 'choices' ]:checked");

  if (!choice) {
    valid = false;
    const choicesError = document.getElementById("choicesError");
    choicesError.style.display = "block";
    choicesError.textContent = "Please select a query type";
  }

  const message = document.getElementById("message");

  if (message.value.trim() === "") {
    valid = false;
    const messageError = document.getElementById("messageError");
    messageError.style.display = "block";
    messageError.textContent = "This field is required";
    message.classList.add("error-border");
  }

  const agreement = document.getElementById("chekies").checked;

  if (!agreement) {
    valid = false;
    const chekiesError = document.getElementById("chekiesError");
    chekiesError.style.display = "block";
    chekiesError.textContent =
      "To submit this form please consent to being contacted";
  }

  if (valid) {
    const toastBox = document.getElementById("toastBox");

    console.log("Form submitted succsesfully!!");
    message.classList.remove("error-border");
    const inputs = document.querySelectorAll(
      "input[type='checkbox'], input[type='radio'], input[type='text'], input[type='email']"
    );
    inputs.forEach((input) => {
      input.classList.remove("error-border");
      input.value = "";
      message.value = "";
      choice.checked = false;
      chekies.checked = false;
    });

    toastBox.classList.add("show");
    setTimeout(() => {
      setTimeout(() => {
        toastBox.classList.remove("show");
      }, 300);
    }, 3000);
  }
});
