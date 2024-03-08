/*=============== SHOW MENU ===============*/



/*===== MENU SHOW =====*/
/* Validate if constant exists */



/*===== MENU HIDDEN =====*/
/* Validate if constant exists */



/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop')
      cartClose = document.getElementById('cart-close') 



/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}


/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}


/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button')
      loginClose = document.getElementById('login-close') 


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}


/*===== LOGIN HIDDEN =====*/
if(loginClose){
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}
/* Validate if constant exists */ 


/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true, // بدون نقل قول

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header= document.getElementById('header')
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',  scrollHeader)


/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
 
  },
);



/*=============== SHOW SCROLL UP ===============*/ 
function scrollup(){
  const scrollup = document.getElementById('scroll-up')
  if(this.scrollY >= 350) scrollup.classList.add('show-scroll');else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/