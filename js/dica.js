var russia19info = document.getElementById("info-circuit-pista-piloto-russia");
var russia19 = document.getElementById("idrussia");
russia19.addEventListener("click",function(){
    russia19.classList.toggle("selecionado");
    russia19info.classList.toggle("hide");   
});
var imola2021info = document.getElementById("info-circuit-pista-piloto-imola2021");
var imola2021 = document.getElementById("idimola2021");
imola2021.addEventListener("click",function(){
    imola2021.classList.toggle("selecionado");
    imola2021info.classList.toggle("hide");  
});

var tabela_circuitos_2019 = document.getElementById("tabela-circuitos-2019");
var f1_2019 = document.getElementById("f1-2019");
    f1_2019.addEventListener("click",function(){
        tabela_circuitos_2019.classList.toggle('hide');
        tabela_circuitos_2021.classList.remove('hide');
        imola2021info.classList.remove('hide');
        russia19.classList.remove("selecionado");
        russia19info.classList.remove("hide");  
});

var tabela_circuitos_2021 = document.getElementById("tabela-circuitos-2021");
var f1_2021 = document.getElementById("f1-2021");
    f1_2021.addEventListener("click",function(){
        tabela_circuitos_2021.classList.toggle('hide');
        tabela_circuitos_2019.classList.remove('hide');
        russia19info.classList.remove('hide');
        imola2021.classList.remove("selecionado");
        imola2021info.classList.remove("hide");  
});
var menuBar = document.querySelector('.container-menu-mob');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault;
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    }else{
        menuMobile.classList.add('show-menu');
    }
})
function myFunction(x) {
    x.classList.toggle("change");
  };

