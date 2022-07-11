
var cardSenna = document.querySelector("#Card-Senna");

cardSenna.addEventListener("mouseover",function(){
    var imagemCardSenna = document.querySelector(".categoria-card-imagem");
    imagemCardSenna.style.height= "250px";
});
cardSenna.addEventListener("mouseout",function(){
    var imagemCardSenna = document.querySelector(".categoria-card-imagem");
    imagemCardSenna.style.height= "300px";
});
document.querySelector('.categoria-card-imagem').addEventListener('click', () => {
    window.location = 'senna.html'
  })

///
var cardLauda = document.querySelector("#Card-Lauda");

cardLauda.addEventListener("mouseover",function(){
    var imagemCardLauda = document.querySelector(".categoria-card-imagem2");
    imagemCardLauda.style.height= "250px";
});
cardLauda.addEventListener("mouseout",function(){
    var imagemCardLauda = document.querySelector(".categoria-card-imagem2");
    imagemCardLauda.style.height= "300px";
});
//
var cardVolante = document.querySelector("#Card-Volante");

cardVolante.addEventListener("mouseover",function(){
    var imagemCardVolante = document.querySelector(".categoria-card-imagem3");
    imagemCardVolante.style.height= "250px";
});
cardVolante.addEventListener("mouseout",function(){
    var imagemCardVolante = document.querySelector(".categoria-card-imagem3");
    imagemCardVolante.style.height= "300px";
});
//
var cardF2 = document.querySelector("#Card-F2")
cardF2.addEventListener("mouseover",function(){
    var imagemCardF2 = document.querySelector(".categoria-card-imagem4");
    imagemCardF2.style.height= "250px";
});
cardF2.addEventListener("mouseout",function(){
    var imagemCardF2 = document.querySelector(".categoria-card-imagem4");
    imagemCardF2.style.height= "300px";
});

document.querySelector('#Card-F2').addEventListener('click', () => {
    window.location = 'f2.html'
  })

  //
var aniversarioIdols = document.querySelector("#Card-aniversario")
aniversarioIdols.addEventListener("mouseover",function(){
    var imagemCardAniversarioIdols = document.querySelector(".categoria-card-imagem-aniversario-idols");
    imagemCardAniversarioIdols.style.height= "250px";
});
aniversarioIdols.addEventListener("mouseout",function(){
    var imagemCardAniversarioIdols = document.querySelector(".categoria-card-imagem-aniversario-idols");
    imagemCardAniversarioIdols.style.height= "300px";
});

document.querySelector('#Card-aniversario').addEventListener('click', () => {
    window.location = 'eventos/2anosidols.html'
  })


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const nextRacing = "01 aug 2022 12:20:00 GMT-0300";

function countdown(){
    const nextRacingDate = new Date(nextRacing);
    const currentDate = new Date();

    const totalSeconds = (nextRacingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds /60) %60;
    const seconds = Math.floor(totalSeconds) %60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` :time;
}
countdown();
setInterval(countdown,1000);