var gridSenna = document.getElementById("grid-senna");
var gridLauda = document.getElementById("grid-lauda");
var gridGeral = document.getElementById("grid-geral");
var menuGrid = document.getElementById("menuGrid");
var tabelaSenna = document.getElementById("tabelaSenna");
var tabelaLauda = document.getElementById("tabelaLauda");
var mais = document.getElementById("mais");
var maisLauda = document.getElementById("maisLauda");

var voltar = document.getElementById("voltar").addEventListener("click",function(){
    $(menuGrid).addClass('mostrar');
    $(tabelaSenna).removeClass('mostrar');
    $(mais).removeClass('mostrar');

})
var voltarLauda = document.getElementById("voltarLauda").addEventListener("click",function(){
    $(menuGrid).addClass('mostrar');
    $(tabelaLauda).removeClass('mostrar');
    $(maisLauda).removeClass('mostrar');  
})

    gridSenna.addEventListener('click',function(){
        $(menuGrid).removeClass('mostrar');
        $(tabelaSenna).addClass('mostrar');
        $(mais).addClass('mostrar');
    });
    gridLauda.addEventListener('click',function(){
        $(menuGrid).removeClass('mostrar');
        $(tabelaLauda).addClass('mostrar');
        $(maisLauda).addClass('mostrar');
    });