var vizualizarTabela = document.getElementById("vizualizarTabela");

vizualizarTabela.addEventListener("click",function(){
    let tabela = document.getElementById('tabela');
    if(tabela.classList.contains('show-tabela')){
        tabela.classList.remove('show-tabela');
    }else{
        tabela.classList.add('show-tabela');
    }
});


