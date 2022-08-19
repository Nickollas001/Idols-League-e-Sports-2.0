
const nextRacingBrasil = "18 aug 2022 21:30:00 GMT-0300";
const nextRacingBelgica = "18 aug 2022 21:30:00 GMT-0300";
const nextRacingImola = "18 aug 2022 21:30:00 GMT-0300";
const nextRacingHungria = "08 sep 2022 21:30:00 GMT-0300";
const nextRacingAustria = "15 sep 2022 21:30:00 GMT-0300";
const nextRacingEspanha = "22 sep 2022 21:30:00 GMT-0300";
const nextRacingItalia = "29 sep 2022 21:30:00 GMT-0300";
const nextRacingDateBrasil = new Date(nextRacingBrasil);
const nextRacingDateBelgica = new Date(nextRacingBelgica);
const nextRacingDateImola = new Date(nextRacingImola);
const nextRacingDateHungria = new Date(nextRacingHungria);
const nextRacingDateAustria = new Date(nextRacingAustria);
const nextRacingDateEspanha = new Date(nextRacingEspanha);
const nextRacingDateItalia = new Date(nextRacingItalia);
const currentDate = new Date();


const nextEtapa = document.getElementById("etapax");
const dateEtapa = document.getElementById("date_etapa");
const imagemEtapa = document.getElementById("imagem_etapa");


const date_etapa2 = "18 Agosto";
const date_etapa3 = "25 Agosto";
const date_etapa4 = "01 Setembro";
const date_etapa5 = "08 Setembro";
const date_etapa6 = "15 Setembro";
const date_etapa7 = "22 Setembro";

const brasil = "BRASIL"
const belgica = "BÉLGICA"
const imola = "IMOLA"
const hungria = "HUNGRIA"
const austria = "ÁUSTRIA"
const espanha = "ESPANHA"
const italia = "ITÁLIA"

const container = document.getElementById("container");



if (currentDate < nextRacingDateBrasil){
    function countdown(){
        nextEtapa.innerHTML = brasil;
        dateEtapa.innerHTML = date_etapa2;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil.jpg.transform/12col-retina/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";

    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateBelgica){
    function countdown(){
        nextEtapa.innerHTML = belgica;
        dateEtapa.innerHTML = date_etapa3;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium.jpg.transform/12col-retina/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateImola){
    function countdown(){
        nextEtapa.innerHTML = imola;
        dateEtapa.innerHTML = date_etapa4;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Emilia%20Romagna.jpg.transform/12col-retina/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateHungria){
    function countdown(){
        nextEtapa.innerHTML = hungria;
        dateEtapa.innerHTML = date_etapa5;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Hungary.jpg.transform/12col-retina/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}