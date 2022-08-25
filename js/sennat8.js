
const nextRacingBrasil = "10 aug 2022 21:30:00 GMT-0300";
const nextRacingMiami = " 29 aug 2022 21:30:00 GMT-0300";
const nextRacingSilverstone = "05 sep 2022 21:30:00 GMT-0300";
const nextRacingEua = "12 sep 2022 21:30:00 GMT-0300";
const nextRacingDateBrasil = new Date(nextRacingBrasil);
const nextRacingDateSilverstone = new Date(nextRacingSilverstone);
const nextRacingDateMiami = new Date(nextRacingMiami);
const nextRacingDateEua = new Date(nextRacingEua);
const currentDate = new Date();


const nextEtapa = document.getElementById("etapax");
const dateEtapa = document.getElementById("date_etapa");
const imagemEtapa = document.getElementById("imagem_etapa");


const date_etapa4 = "22 Agosto";
const date_etapa5 = "29 Agosto";
const date_etapa6 = "05 Setembro";
const date_etapa7 = "12 Setembro";
const date_etapa8 = "19 Setembro";

const brasil = "BRASIL"
const miami = "MIAMI"
const silverstone = "GRÃ BETANHA"
const eua = "ESTADOS UNIDOS"
const abudhabi = "ABU DHABI"

const container = document.getElementById("container");



function formatTime(time){
    return time < 10 ? `0${time}` :time;
}

if (currentDate < nextRacingDateBrasil){
    function countdown(){
        nextEtapa.innerHTML = brasil;
        dateEtapa.innerHTML = date_etapa4;
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateMiami){
    function countdown(){
        nextEtapa.innerHTML = miami;
        dateEtapa.innerHTML = date_etapa5;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Miami.jpg.transform/12col-retina/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateSilverstone){
    function countdown(){
        nextEtapa.innerHTML = silverstone;
        dateEtapa.innerHTML = date_etapa6;
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateEua){
    function countdown(){
        nextEtapa.innerHTML = eua;
        dateEtapa.innerHTML = date_etapa7;
    }
    countdown();
    setInterval(countdown,1000); 
}else{
    function countdown(){
        nextEtapa.innerHTML = abudhabi;
        dateEtapa.innerHTML = date_etapa8;
    }
    countdown();
    setInterval(countdown,1000); 
}

