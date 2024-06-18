const button = document.getElementById("button");
const wrapper = document.querySelector(".wrapper");
const success = document.querySelector(".successToast");
const successEmail = document.getElementById("succesEmail");
const closeButton = document.getElementById("closeButton");
button.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = false;
  const error = document.getElementById("error");
  const email = document.getElementById("email");

  error.style.display = "none";

  if (email.value.trim() === "" || !email.value.includes("@")) {
    valid = false;
    error.style.display = "block";
    email.classList.add("errorInput");
  } else {
    valid = true;
  }

  if (valid) {
    email.classList.remove("errorInput");
    successEmail.textContent = email.value;
    email.value = "";
    wrapper.classList.add("hidden");
    success.classList.add("open");
  }
});

closeButton.addEventListener("click", () => {
  wrapper.classList.remove("hidden");
  success.classList.remove("open");
});
