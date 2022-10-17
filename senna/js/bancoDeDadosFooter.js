var patrocinadores = document.getElementById("patrocinadores");
var ico1 = document.getElementById("ico1");
var ico1Imagem = document.getElementById("ico1-img")
var ico2 = document.getElementById("ico2");
var ico2Imagem = document.getElementById("ico2-img");
var ico3 = document.getElementById("ico3")
var ico3Imagem = document.getElementById("ico3-img")
var ico4 = document.getElementById("ico4")
var ico4Imagem = document.getElementById("ico4-img")



// Dados
var nickCodeAlt = "Nick Code";
var nickCodeUrl = "https://www.instagram.com/nick_code_/";
var nickCodeImagem = "https://idolsleaguesports.com/patrocinadores/nickcode_logo.jpg";

var gameCenterAlt = "Game Center"
var gameCenterUrl = "https://www.instagram.com/gamecenterpaulista/";
var gameCenterImagem = "https://idolsleaguesports.com/patrocinadores/gamecenter-patrocinador.png"

var EspetaculArtAlt = "Espetacul Art";
var EspetaculArtUrl = "https://www.instagram.com/espetacul.art/";
var EspetaculArtImagem = "https://idolsleaguesports.com/patrocinadores/espetacul-art.jpg";

var cepacImagemAlt = "Cepac Imagem";
var cepacImagemUrl = "https://www.instagram.com/cepac_fronteiras/";
var cepacImagemImagem = "https://idolsleaguesports.com/patrocinadores/cepac_imagem.jpg";


// Icone 1
ico1.href = nickCodeUrl;
ico1.setAttribute("alt",nickCodeAlt);
ico1Imagem.setAttribute("src", nickCodeImagem);

// Icone 2
ico2.href = gameCenterUrl;
ico2.setAttribute("alt",gameCenterAlt)
ico2Imagem.setAttribute("src",gameCenterImagem);

// Icone 3
ico3.href = EspetaculArtUrl;
ico3.setAttribute("alt",EspetaculArtAlt);
ico3Imagem.setAttribute("src", EspetaculArtImagem);

// Icone 4
ico4.href = cepacImagemUrl;
ico4.setAttribute("alt",cepacImagemAlt);
ico4Imagem.setAttribute("src", cepacImagemImagem);