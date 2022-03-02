let navbar = document.querySelector('.header .navbar');
let btnRegister = document.querySelector('.formularios .register-btn');
let btnLogin = document.querySelector('.formularios .login-btn');
let formularios = document.querySelector('.formularios');
let formLogin = document.querySelector('.formularios .login-form');
let formRegister = document.querySelector('.formularios .register-form');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('activo');
};

document.querySelector('#cerrar-menu').onclick = () =>{
    navbar.classList.remove('activo');
};

document.querySelector('#cuenta-btn').onclick = () =>{
    formularios.classList.add('activo');
};

document.querySelector('#cerrar-form').onclick = () =>{
    formularios.classList.remove('activo');
};

btnRegister.onclick = () =>{
    btnRegister.classList.add('activo');
    btnLogin.classList.remove('activo');
    formLogin.classList.remove('activo');
    formRegister.classList.add('activo');
};

btnLogin.onclick = () =>{
    btnRegister.classList.remove('activo');
    btnLogin.classList.add('activo');
    formLogin.classList.add('activo');
    formRegister.classList.remove('activo');
};

//SWIPER
var swiper = new Swiper(".inicio-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursos:true,
  });