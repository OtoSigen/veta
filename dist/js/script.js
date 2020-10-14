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

popupBooked = () => {
  const popup = document.getElementById("popup_overlay-booked");
  const popupCloseBtn = document.getElementById("btn_close");
  const popupOpenBtn = document.querySelectorAll(".uslugi_btn");

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
popupBooked();

popupReviews = () => {
  const popupReviews = document.getElementById("fixed_overlay-reviews");
  const popupCloseBtn = document.getElementById("btn_close");
  const popupOpenBtnReviews = document.getElementById("popup_open-reviews");

  popupOpenBtnReviews.addEventListener("click", function () {
    popupReviews.classList.add("show");
    popupReviews.classList.remove("hide");
  });

  popupCloseBtn.addEventListener("click", function () {
    popupReviews.classList.add("hide");
    popupReviews.classList.remove("show");
  });
};
popupReviews();
