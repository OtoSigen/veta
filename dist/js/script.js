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
popupOpen();

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
