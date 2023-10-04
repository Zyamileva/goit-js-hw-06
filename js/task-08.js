const formUser = document.querySelector(".login-form");
formUser.addEventListener("submit", obSubmit);

function obSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Не все поля введены. Повторите ввод заново.");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  evt.currentTarget.reset();
}
