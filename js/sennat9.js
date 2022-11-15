
const nextRacingHolanda = "07 nov 2022 21:30:00 GMT-0300";
const nextRacingBelgica = "14 nov 2022 21:30:00 GMT-0300";
const nextRacingJapao = " 21 nov 2022 21:30:00 GMT-0300";
const nextRacingAustria = "28 nov 2022 21:30:00 GMT-0300";
const nextRacingEspanha = "05 dec 2022 21:30:00 GMT-0300";
const nextRacingDateHolanda = new Date(nextRacingHolanda);
const nextRacingDateBelgica = new Date(nextRacingBelgica);
const nextRacingDateAustria = new Date(nextRacingAustria);
const nextRacingDateJapao = new Date(nextRacingJapao);
const nextRacingDateEspanha = new Date(nextRacingEspanha);
const currentDate = new Date();


const nextEtapa = document.getElementById("etapax");
const dateEtapa = document.getElementById("date_etapa");
const imagemEtapa = document.getElementById("imagem_etapa");


const date_etapa3 = "07 Novembro";
const date_etapa4 = "14 Novembro";
const date_etapa5 = "21 Novembro";
const date_etapa6 = "28 Novembro";
const date_etapa7 = "05 Dezembro";
const date_etapa8 = "12 Dezembro";

const brasil = "BRASIL";
const franca = "FRANÇA";
const holanda = "HOLANDA";
const belgica = "BÉLGICA";
const japao = "JAPÃO";
const austria = "ÁUSTRIA";
const espanha = "ESPANHA";
const bahrein = "BAHREIN";
const hungria = "HUNGRIA";
const miami = "MIAMI";
const silverstone = "GRÃ BRETANHA";
const eua = "ESTADOS UNIDOS";
const abudhabi = "ABU DHABI";

const container = document.getElementById("container");



function formatTime(time){
    return time < 10 ? `0${time}` :time;
}

if (currentDate < nextRacingDateHolanda){
    function countdown(){
        nextEtapa.innerHTML = holanda;
        dateEtapa.innerHTML = date_etapa3;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateBelgica){
    function countdown(){
        nextEtapa.innerHTML = belgica;
        dateEtapa.innerHTML = date_etapa4;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateJapao){
    function countdown(){
        nextEtapa.innerHTML = japao;
        dateEtapa.innerHTML = date_etapa5;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateAustria){
    function countdown(){
        nextEtapa.innerHTML = austria;
        dateEtapa.innerHTML = date_etapa6;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Austria.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else if (currentDate < nextRacingDateEspanha){
    function countdown(){
        nextEtapa.innerHTML = espanha;
        dateEtapa.innerHTML = date_etapa7;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Barcelona%20Test.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}else{
    function countdown(){
        nextEtapa.innerHTML = bahrein;
        dateEtapa.innerHTML = date_etapa8;
        container.style.background = "url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Bahrain.jpg.transform/12col/image.jpg')"
        container.style.backgroundSize = "cover"
        container.style.backgroundPosition = "center";
    }
    countdown();
    setInterval(countdown,1000); 
}
