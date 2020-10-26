function testWebP(callback) {
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const popupOpen = () => {
  const popup = document.querySelector("#popup");
  const popupCloseBtn = document.querySelector("#popup__close-btn");
  const popupOpenBtn = document.querySelectorAll(".popup-open");

  popupOpenBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("show");
      popup.classList.remove("hide");
    });
  });

  popupCloseBtn.addEventListener("click", function () {
    popup.classList.add("hide");
    popup.classList.remove("show");
  });
};
popupOpen();

const popupPost = () => {
  const popup = document.querySelector("#popup");
  const popupPost = document.querySelector("#popup-post");
  const popupCloseBtnPost = document.querySelector("#popup__close-btn-post");
  const popupPostOpenBtn = document.querySelectorAll(".popup__btn-post");

  popupPostOpenBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      popupPost.classList.add("show");
      popupPost.classList.remove("hide");
      popup.classList.add("hide");
      popup.classList.remove("show");
    });
  });

  popupCloseBtnPost.addEventListener("click", function () {
    popupPost.classList.add("hide");
    popupPost.classList.remove("show");
  });
};

const burgerOpen = () => {
  const burger = document.querySelector("#burger-menu");
  const burgerCloseBtn = document.querySelector(".burger__close-btn");
  const burgerOpenBtn = document.querySelector(".header__burger");

  burgerOpenBtn.addEventListener("click", function () {
    burger.classList.add("show");
    burger.classList.remove("hide");
  });

  burgerCloseBtn.addEventListener("click", function () {
    burger.classList.add("hide");
    burger.classList.remove("show");
  });
};
burgerOpen();

// formValidate = () => {
//   const form = document.querySelector("#validate-form");
//   const name = document.querySelector("#popup-name-form");
//   const phone = document.querySelector("#popup-phone-form");
//   const email = document.querySelector("#popup-email-form");
//   const btn = document.querySelector("#popup__btn-post");
//
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     checkInputs();
//     // popupPost();
//   });
//
//   function checkInputs() {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//
//     if (nameValue === "") {
//       setErrorFor(name, "Введите ваше имя");
//     } else {
//       setSuccessFor(name);
//     }
//     if (phoneValue === "") {
//       setErrorFor(phone, "Введите номер телефона");
//     } else {
//       setSuccessFor(phone);
//     }
//     if (emailValue === "") {
//       setErrorFor(email, "Введите email");
//     } else if (!isEmail(emailValue)) {
//       setErrorFor(email, "Проверьте email");
//     } else {
//       setSuccessFor(email);
//     }
//   }
//   const setErrorFor = (input, message) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     const inputField = document.querySelectorAll(
//       ".content__wrap .form__input-modal"
//     );
//
//     small.innerText = message;
//
//     formControl.classList.add("error");
//     inputField.forEach((item) => {
//       item.style.borderBottom = "2px solid red";
//     });
//   };
//   const setSuccessFor = (input) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     const inputField = document.querySelectorAll(
//       ".content__wrap .form__input-modal"
//     );
//
//     formControl.classList.remove("error");
//     inputField.forEach((item) => {
//       item.style.borderBottom = "2px solid #33cc33";
//     });
//     small.style.display = "none";
//   };
//   function isEmail(email) {
//     return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
//       email
//     );
//   }
// };
// formValidate();

formSubmit = () => {
  const form = document.querySelector("#validate-form");
  const phone = document.querySelector("#popup-phone-form");
  const name = document.querySelector("#popup-name-form");
  const email = document.querySelector("#popup-email-form");

  const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  const validateElem = (elem) => {
    if (elem === name) {
      if (elem.value.length < 3) {
        elem.nextElementSibling.textContent = "Введите своё имя";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }
    if (elem === phone) {
      if (elem.value.length === 0) {
        elem.nextElementSibling.textContent = "Введите номер телефона";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }
    if (elem === email) {
      if (!regExpEmail.test(elem.value)) {
        elem.nextElementSibling.textContent = "Введите корректный email";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }
  };

  for (let elem of form.elements) {
    if (elem.classList.contains("form__input-modal" && "field")) {
      elem.addEventListener("blur", () => {
        validateElem(elem);
      });
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let elem of form.elements) {
      if (elem.classList.contains("form__input-modal" && "field")) {
        if (elem.value === "") {
          elem.nextElementSibling.textContent = "Данное поле не заполнено";
        } else {
          elem.nextElementSibling.textContent = "";
        }
      }
      if (elem === email && elem.value !== "") {
        if (regExpEmail.test(elem.value)) {
          popupPost();
        }
      }
    }
  });
};
formSubmit();
