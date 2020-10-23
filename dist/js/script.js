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

// formValidate = () => {
//   const form = document.querySelector('#validate-form')
//   const nameValue = document.querySelector('#popup-name-form')
//   const phoneValue = document.querySelector('#popup-phone-form')
//   const emailValue = document.querySelector('#popup-email-form')
//   const fields = document.querySelectorAll('.field')
//   const btn = document.querySelector('#popup__btn-post')


//   form.addEventListener('submit', function (event) {
//     event.preventDefault()

//     let errors = form.querySelectorAll('.error')

//     for (var i = 0; i < errors.length; i++) {
//       errors[i].remove()
//     }

//     fields.forEach((item) => {
//       if(!item.value){
//         let error = document.createElement('div')
//         error.className='error'
//         error.classList.add = 'error'
//         error.innerHTML = 'Поле не может быть пустым'
//         item.parentElement.insertBefore(error, item)
//       }
//     })

//     if(nameValue.length || emailValue.length || phoneValue.length <0){
//       btn.setAttribute("disabled", "disabled");
//     }
    
//   })
  
// }
// formValidate()

Validate = () => {
  const form = document.querySelector('#validate-form')
  form.addEventListener('submit', formSend)

  async function formSend(e){
    e.preventDefault();
 

  let error = formValidate(form)

}

function formValidate (form){
  let error = 0;
  let formReq = document.querySelectorAll('._req')
  
  for (let index = 0; index < formReq.length; index++){
    const input = formReq[index];
    formRemoveError(input);
  
  if(input.classList.contains('email')){
    if(emailTest(input)){
      formAddError(input)
      error++
    }
    else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
      formAddError(input)
      error++
    }
    else {
      if(input.value === ''){
        formAddError(input)
        error++
      }
    }
   }
  }
}

function formAddError(input)  {
  input.parentElement.classList.add('error');
  input.classList.add('error');
}
function formRemoveError(input)  {
  input.parentElement.classList.remove('error');
  input.classList.remove('error');
}
// function emailTest(input){
//   return
// }
}

Validate()