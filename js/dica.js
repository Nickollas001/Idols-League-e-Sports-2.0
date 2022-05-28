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

  var seletor_f1_mob = document.getElementById("seletor-f1-mob");
  var seletor_f2_mob = document.getElementById("seletor-f2-mob");
  var seletor_f1_2019_f1_2021 = document.getElementById("seletor-f1-2019-f1-2021");
  var seletor_f2_2021 = document.getElementById("seletor-f2-2021");
  var seletor_f1_2019_mob = document.getElementById("seletor-f1-2019-mob");
  var lista_f1_2019_mob = document.getElementById("lista-f1-2019-mob");
  var russia_mob_2019 = document.getElementById("russia-mob-2019");
  var russia_f1_2019_mob_info = document.getElementById("russia-f1-2019-mob-info"); 
  var pista_mob = document.getElementById("pista-mob"); 
  var pista_mob_2021 = document.getElementById("pista-mob-2021"); 
  var seletor_f1_2021_mob = document.getElementById("seletor-f1-2021-mob");
  var lista_f1_2021_mob = document.getElementById("lista-f1-2021-mob");
  var imola_mob_2021 = document.getElementById("imola-mob-2021");
  var imola_f1_2019_mob_info = document.getElementById("imola-f1-2019-mob-info");
  
  seletor_f1_mob.addEventListener("click",function(){
      seletor_f1_2019_f1_2021.classList.toggle('hide');
      seletor_f1_mob.classList.toggle('selecionado-mob');
      seletor_f2_2021.classList.remove('hide');
      lista_f1_2019_mob.classList.remove('hide');
      seletor_f2_mob.classList.remove('selecionado-mob');
      seletor_f1_2019_mob.classList.remove('selecionado-mob');
      seletor_f1_2021_mob.classList.remove('selecionado-mob');
      lista_f1_2021_mob.classList.remove('hide');
      pista_mob_2021.classList.remove('selecionado-mob');
      imola_f1_2019_mob_info.classList.remove('hide');
  });
  
  seletor_f2_mob.addEventListener("click",function(){
      seletor_f2_2021.classList.toggle('hide');
      seletor_f1_2019_f1_2021.classList.remove('hide');
      lista_f1_2019_mob.classList.remove('hide');
      seletor_f1_mob.classList.remove('selecionado-mob');
      seletor_f2_mob.classList.toggle('selecionado-mob');
      seletor_f1_2019_mob.classList.remove('selecionado-mob');
      russia_f1_2019_mob_info.classList.remove('hide');
      pista_mob.classList.remove('selecionado-mob');
      lista_f1_2021_mob.classList.remove('hide');
      pista_mob_2021.classList.remove('selecionado-mob');
      imola_f1_2019_mob_info.classList.remove('hide');
  });
  
  seletor_f1_2019_mob.addEventListener("click",function(){
      lista_f1_2019_mob.classList.toggle('hide');
      seletor_f1_2019_mob.classList.toggle('selecionado-mob');
      seletor_f1_2021_mob.classList.remove('selecionado-mob');
      lista_f1_2021_mob.classList.remove('hide');
  });
  
  russia_mob_2019.addEventListener("click",function(){
      pista_mob.classList.toggle('selecionado-mob');
      russia_f1_2019_mob_info.classList.toggle('hide');
  });
  seletor_f1_2021_mob.addEventListener("click",function(){
      lista_f1_2021_mob.classList.toggle('hide');
      seletor_f1_2021_mob.classList.toggle('selecionado-mob');
      russia_f1_2019_mob_info.classList.remove('hide');
      pista_mob.classList.remove('selecionado-mob');
      seletor_f1_2019_mob.classList.remove('selecionado-mob');
      lista_f1_2019_mob.classList.remove('hide');
      pista_mob_2021.classList.remove('selecionado-mob');
      imola_f1_2019_mob_info.classList.remove('hide');
  });
  imola_mob_2021.addEventListener("click",function(){
      pista_mob_2021.classList.toggle('selecionado-mob');
      imola_f1_2019_mob_info.classList.toggle('hide');
  
  });
  