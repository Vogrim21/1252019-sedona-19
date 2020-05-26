var form = document.querySelector(".form");
var popup = document.querySelector(".modal--success");
var popuperror = document.querySelector(".modal--error");
var successСlose = document.querySelector(".modal__btn--success");
var errorСlose = document.querySelector(".modal__btn--error");
var submitBtn = form.querySelector("[type=submit]");
var login = form.querySelector("[name=login]");
var family = form.querySelector("[name=family]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=mail]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (error) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
  if (!login.value || !family.value || !email.value || !tel.value) {
    return
}

evt.preventDefault();

  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    localStorage.setItem("family", family.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("tel", tel.value);
  }

  popup.classList.remove("modal--on");
  popuperror.classList.remove("modal--on");
  popuperror.offsetWidth = popup.offsetWidth;

  //TODO: запрос к серверу, ключ ответа 0/1 вывсести в переменную res
  var res = Math.round(Math.random());
  if (res) {
    popup.classList.add("modal--on")
  } else {
    popuperror.classList.add("modal--on")
  }
});

  errorСlose.addEventListener("click", function (evt){
    evt.preventDefault();
    popuperror.classList.remove("modal--on");
  });

  successСlose.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal--on");
  });
