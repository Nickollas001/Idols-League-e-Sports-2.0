var russia19 = document.getElementById("idrussia");
russia19.addEventListener("click",function(){
    russia19.classList.toggle("selecionado");
    var russia19info = document.getElementById("info-circuit-pista-piloto-russia");
    russia19info.classList.toggle("hide");     
});
var menuBar = document.querySelector('#menu-mobile-btn');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault;
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    }else{
        menuMobile.classList.add('show-menu');
    }
})