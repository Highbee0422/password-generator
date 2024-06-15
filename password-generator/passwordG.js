const btnEl = document.querySelector(".button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!£$%^&*()_+}{][@?/|#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLenght = 14;
  let password = "";
  for (let index = 0; index < passwordLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, index, password + 1);
  }

  inputEl.value = password;
  alertEl.textContent = `${password} Copied!`;
}

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  if (inputEl.value) {
    copyPassword();
    alertEl.classList.remove("active");
    setTimeout(() => alertEl.classList.add("active"), 1000);
  } else {
  }
});

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
