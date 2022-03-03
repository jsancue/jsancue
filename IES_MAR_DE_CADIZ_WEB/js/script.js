let navbar = document.querySelector('.header .navbar');
let btnRegister = document.querySelector('.formularios .register-btn');
let btnLogin = document.querySelector('.formularios .login-btn');
let formularios = document.querySelector('.formularios');
let formLogin = document.querySelector('.formularios .login-form');
let formRegister = document.querySelector('.formularios .register-form');
let acordeon = document.querySelectorAll('.faq .contenedor-acordeones .acordeon');

//Formualarios
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

//Acordeones
acordeon.forEach(acor =>{
  acor.onclick = () =>{
    acordeon.forEach(deon => deon.classList.remove('activo'));
    acor.classList.toggle('activo');
  };

});

//SWIPER
var swiper = new Swiper(".inicio-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursos:true,
  });

//AUDIO-PLAYER
const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
  "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
);

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
