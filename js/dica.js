var russia19 = document.getElementById("idrussia");
russia19.addEventListener("click",function(){
    russia19.classList.toggle("selecionado");
    var russia19info = document.getElementById("info-circuit-pista-piloto-russia");
    russia19info.classList.toggle("hide");     
});
var tabela_circuitos_2019 = document.getElementById("tabela-circuitos-2019");
var f1_2019 = document.getElementById("f1-2019");
    f1_2019.addEventListener("click",function(){
        tabela_circuitos_2019.classList.toggle('hide');
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
  }
 console.log(tabela_circuitos_2019)