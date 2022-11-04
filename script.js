
var cardLauda = document.querySelector("#Card-Lauda");
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
  });

  cardLauda.addEventListener('click', function(){
    window.location = 'lauda.html'
  });

///


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

const nextRacingHungria = "17 oct 2022 21:30:00 GMT-0300";
const nextRacingFranca = " 24 oct 2022 21:30:00 GMT-0300";
const nextRacingHolanda = "07 nov 2022 21:30:00 GMT-0300";
const nextRacingBelgica = "14 nov 2022 21:30:00 GMT-0300";
const nextRacingJapao = "21 nov 2022 21:30:00 GMT-0300";
const nextRacingAustria = "28 nov 2022 21:30:00 GMT-0300";
const nextRacingEspanha = "05 dec 2022 21:30:00 GMT-0300";
const nextRacingDateHungria = new Date(nextRacingHungria);
const nextRacingDateHolanda = new Date(nextRacingHolanda);
const nextRacingDateFranca = new Date(nextRacingFranca);
const nextRacingDateBelgica = new Date(nextRacingBelgica);
const nextRacingDateJapao = new Date(nextRacingJapao);
const nextRacingDateAustria = new Date(nextRacingAustria);
const nextRacingDateEspanha = new Date(nextRacingEspanha);
const currentDate = new Date();


const nextEtapa = document.getElementById("etapax");
const numberEtapa = document.getElementById("number_etapa");
const dateEtapa = document.getElementById("date_etapa");
const imagemEtapa = document.getElementById("imagem_etapa");

const hungria = "Hungaroring - Hungria"
const brasil = "Interlagos - BRA    SIL";
const miami = "Miami - MIAMI";
const silverstone = "Silverstone - GRÃ BRETANHA";
const eua = "Austin Texas - EUA";
const abuDhabi = "Yas Marina - ABU DHABI";
const franca = "Paul Ricard - França";
const holanda = "Zandvoort - Holanda";
const belgica = "Spa Francochamps - Bélgica";
const japao = "Suzuka - Japão";
const austria = "Red Bull Ring - Áustria";
const espanha = "Barcelona - Espanha";
const bahrein = "Sakhir - Bahrein";

const etapa1 = "ETAPA 1";
const etapa2 = "ETAPA 2";
const etapa3 = "ETAPA 3";
const etapa4 = "ETAPA 4";
const etapa5 = "ETAPA 5";
const etapa6 = "ETAPA 6";
const etapa7 = "ETAPA 7";
const etapa8 = "ETAPA 8";

const date_etapa1 = "17 de Outubro";
const date_etapa2 = "24 de Outubro";
const date_etapa3 = "31 de Outubro";
const date_etapa4 = "07 de Novembro";
const date_etapa5 = "14 de Novembro";
const date_etapa6 = "21 de Novembro";
const date_etapa7 = "28 de Novembro";
const date_etapa8 = "05 de Dezembro";

const teste = src="bandeiras/ec.png"

var img = document.getElementById("img");

function formatTime(time){
    return time < 10 ? `0${time}` :time;
}





if (currentDate < nextRacingDateHungria){
    function countdown(){
        const nextRacing = "17 oct 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = hungria;
        numberEtapa.innerHTML = etapa1;
        dateEtapa.innerHTML = date_etapa1;
        img.setAttribute('src','bandeiras/hu.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateFranca){
    function countdown(){
        const nextRacing = "24 oct 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = franca;
        numberEtapa.innerHTML = etapa2;
        dateEtapa.innerHTML = date_etapa2;
        img.setAttribute('src','bandeiras/fr.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateHolanda){
    function countdown(){
        const nextRacing = "07 nov 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = holanda;
        numberEtapa.innerHTML = etapa3;
        dateEtapa.innerHTML = date_etapa3;
        img.setAttribute('src','bandeiras/holanda.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateBelgica){
    function countdown(){
        const nextRacing = "14 nov 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = belgica;
        numberEtapa.innerHTML = etapa4;
        dateEtapa.innerHTML = date_etapa4;
        img.setAttribute('src','bandeiras/be.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateJapao){
    function countdown(){
        const nextRacing = "21 nov 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = japao;
        numberEtapa.innerHTML = etapa5;
        dateEtapa.innerHTML = date_etapa5;
        img.setAttribute('src','bandeiras/jp.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateAustria){
    function countdown(){
        const nextRacing = "28 nov 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = austria;
        numberEtapa.innerHTML = etapa6;
        dateEtapa.innerHTML = date_etapa6;
        img.setAttribute('src','bandeiras/austria.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateEspanha){
    function countdown(){
        const nextRacing = "05 dec 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = espanha;
        numberEtapa.innerHTML = etapa7;
        dateEtapa.innerHTML = date_etapa7;
        img.setAttribute('src','bandeiras/es.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else{
    function countdown(){
        const nextRacing = "12 dec 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = bahrein;
        numberEtapa.innerHTML = etapa8;
        dateEtapa.innerHTML = date_etapa8;
        img.setAttribute('src','bandeiras/bh.png');
    }
    countdown();
    setInterval(countdown,1000); 
}