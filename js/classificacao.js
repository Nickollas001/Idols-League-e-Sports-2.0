var gridSenna = document.getElementById("grid-senna");
var gridGeral = document.getElementById("grid-geral");
var menuGrid = document.getElementById("menuGrid");
var tabelaSenna = document.getElementById("tabelaSenna");
var mais = document.getElementById("mais");
var tabelaGeral = document.getElementById("example");
var tabelaGeral2 = document.getElementById("example_wrapper");

var voltar = document.getElementById("voltar").addEventListener("click",function(){
    $(menuGrid).addClass('mostrar');
    $(tabelaSenna).removeClass('mostrar');
    $(mais).removeClass('mostrar');
})

    gridSenna.addEventListener('click',function(){
        $(menuGrid).removeClass('mostrar');
        $(tabelaSenna).addClass('mostrar');
        $(mais).addClass('mostrar');
    });
    gridGeral.addEventListener('click',function(){
        $(menuGrid).removeClass('mostrar');
        $(tabelaGeral).removeClass('display');
        $(tabelaGeral2).removeClass('dataTables_wrapper');
    });
