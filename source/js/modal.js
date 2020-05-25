var link = document.querySelector(".form__submit");
var close = document.querySelector(".modal__btn");
var form = document.querySelector(".form");
var popup = document.querySelector(".page__main .modal--success");
var popuperror = document.querySelector(".page__main .modal--error");
var login = form.querySelector("[name=login]");
var family = form.querySelector("[name=family]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=mail]");
var submitBtn = form.querySelector("[type=submit]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--on");
});

submitBtn.addEventListener("click", function (evt) {
  if (!login.value || !family.value || !email.value ||!tel.value) {
    evt.preventDefault();
    popup.classList.remove("modal--on");
    popuperror.classList.remove("modal--on");
    popuperror.offsetWidth = popup.offsetWidth;
    popuperror.classList.add("modal--on");
} else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    localStorage.setItem("family", family.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("tel", tel.value);
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--on");
  popuperror.classList.remove("modal--on");
});
