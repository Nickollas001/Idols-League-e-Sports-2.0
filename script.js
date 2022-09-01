
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

const nextRacingBrasil = "22 aug 2022 21:30:00 GMT-0300";
const nextRacingMiami = " 29 aug 2022 21:30:00 GMT-0300";
const nextRacingSilverstone = "05 sep 2022 21:30:00 GMT-0300";
const nextRacingEua = "12 sep 2022 21:30:00 GMT-0300";
const nextRacingDateBrasil = new Date(nextRacingBrasil);
const nextRacingDateSilverstone = new Date(nextRacingSilverstone);
const nextRacingDateMiami = new Date(nextRacingMiami);
const nextRacingDateEua = new Date(nextRacingEua);
const currentDate = new Date();


const nextEtapa = document.getElementById("etapax");
const numberEtapa = document.getElementById("number_etapa");
const dateEtapa = document.getElementById("date_etapa");
const imagemEtapa = document.getElementById("imagem_etapa");

const brasil = "Interlagos - BRASIL";
const miami = "Miami - MIAMI";
const silverstone = "Silverstone - GRÃ BRETANHA";
const eua = "Austin Texas - EUA";
const abuDhabi = "Yas Marina - ABU DHABI";

const etapa4 = "ETAPA 4";
const etapa5 = "ETAPA 5";
const etapa6 = "ETAPA 6";
const etapa7 = "ETAPA 7";
const etapa8 = "ETAPA 8";

const date_etapa4 = "22 de Agosto";
const date_etapa5 = "29 de Agosto";
const date_etapa6 = "05 de Setembro";
const date_etapa7 = "12 de Setembro";
const date_etapa8 = "19 de Setembro";

const teste = src="bandeiras/ec.png"

var img = document.getElementById("img");

function formatTime(time){
    return time < 10 ? `0${time}` :time;
}





if (currentDate < nextRacingDateBrasil){
    function countdown(){
        const nextRacing = "22 aug 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = brasil;
        numberEtapa.innerHTML = etapa4;
        dateEtapa.innerHTML = date_etapa4;
        img.setAttribute('src','bandeiras/br.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateMiami){
    function countdown(){
        const nextRacing = "29 aug 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = miami;
        numberEtapa.innerHTML = etapa5;
        dateEtapa.innerHTML = date_etapa5;
        img.setAttribute('src','bandeiras/us.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateSilverstone){
    function countdown(){
        const nextRacing = "05 sep 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = silverstone;
        numberEtapa.innerHTML = etapa6;
        dateEtapa.innerHTML = date_etapa6;
        img.setAttribute('src','bandeiras/gb.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else if(currentDate < nextRacingDateEua){
    function countdown(){
        const nextRacing = "12 sep 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = eua;
        numberEtapa.innerHTML = etapa7;
        dateEtapa.innerHTML = date_etapa7;
        img.setAttribute('src','bandeiras/us.png');
    }
    countdown();
    setInterval(countdown,1000); 
}else{
    function countdown(){
        const nextRacing = "19 sep 2022 21:30:00 GMT-0300";
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
        nextEtapa.innerHTML = abuDhabi;
        numberEtapa.innerHTML = etapa8;
        dateEtapa.innerHTML = date_etapa8;
        img.setAttribute('src','bandeiras/abudhabi-emirados.png');
    }
    countdown();
    setInterval(countdown,1000); 
}