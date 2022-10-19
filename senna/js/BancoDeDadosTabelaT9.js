var driver1 = document.getElementById("driver1");
var driver1Imagem = document.getElementById("driver1-img");
var lastro1 = document.getElementById("lastro1");
var lastro1Imagem = document.getElementById("lastro1-img");
var pontos1 = document.getElementById("pontos1");

var driver2 = document.getElementById("driver2");
var driver2Imagem = document.getElementById("driver2-img");
var lastro2 = document.getElementById("lastro2");
var lastro2Imagem = document.getElementById("lastro2-img");
var pontos2 = document.getElementById("pontos2");

var driver3 = document.getElementById("driver3");
var driver3Imagem = document.getElementById("driver3-img");
var lastro3 = document.getElementById("lastro3");
var lastro3Imagem = document.getElementById("lastro3-img");
var pontos3 = document.getElementById("pontos3");

var driver4 = document.getElementById("driver4");
var driver4Imagem = document.getElementById("driver4-img");
var lastro4 = document.getElementById("lastro4");
var lastro4Imagem = document.getElementById("lastro4-img");
var pontos4 = document.getElementById("pontos4");

var driver5 = document.getElementById("driver5");
var driver5Imagem = document.getElementById("driver5-img");
var lastro5 = document.getElementById("lastro5");
var lastro5Imagem = document.getElementById("lastro5-img");
var pontos5 = document.getElementById("pontos5");

var driver6 = document.getElementById("driver6");
var driver6Imagem = document.getElementById("driver6-img");
var lastro6 = document.getElementById("lastro6");
var lastro6Imagem = document.getElementById("lastro6-img");
var pontos6 = document.getElementById("pontos6");

var driver7 = document.getElementById("driver7");
var driver7Imagem = document.getElementById("driver7-img");
var lastro7 = document.getElementById("lastro7");
var lastro7Imagem = document.getElementById("lastro7-img");
var pontos7 = document.getElementById("pontos7");

var driver8 = document.getElementById("driver8");
var driver8Imagem = document.getElementById("driver8-img");
var lastro8 = document.getElementById("lastro8");
var lastro8Imagem = document.getElementById("lastro8-img");
var pontos8 = document.getElementById("pontos8");

var driver9 = document.getElementById("driver9");
var driver9Imagem = document.getElementById("driver9-img");
var lastro9 = document.getElementById("lastro9");
var lastro9Imagem = document.getElementById("lastro9-img");
var pontos9 = document.getElementById("pontos9");

var driver10 = document.getElementById("driver10");
var driver10Imagem = document.getElementById("driver10-img");
var lastro10 = document.getElementById("lastro10");
var lastro10Imagem = document.getElementById("lastro10-img");
var pontos10 = document.getElementById("pontos10");

var pilotoDoDia = "1";

//Os pontos nas corridas de 50% dos grid SENNA ->

var PrimeiraPosicaoCorrida = "25"
var SegundaPosicaoCorrida = "21"
var TerceiraPosicaoCorrida = "18"
var QuartaPosicaoCorrida = "16"
var QuintaPosicaoCorrida = "14"
var SextaPosicaoCorrida = "12"
var SetimaPosicaoCorrida = "10"
var OitavaPosicaoCorrida = "08"
var NonaPosicaoCorrida = "07"
var DecimaPosicaoCorrida = "06"
var DecimaPrimeiraPosicaoCorrida = "05"
var DecimaSegundaPosicaoCorrida = "04"
var DecimaTerceiraPosicaoCorrida = "03"
var DecimaQuartaPosicaoCorrida = "02"
var DecimaQuintaPosicaoCorrida = "01"


//Os pontos nas corridas sprint do grid Senna SENNA

var PrimeiraPosicaoSprint = "10";
var SegundaPosicaoSprint = "09";
var TerceiraPosicaoSprint = "08";
var QuartaPosicaoSprint = "07";
var QuintaPosicaoSprint = "06";
var SextaPosicaoSprint = "05";
var SetimaPosicaoSprint = "04";
var OitavaPosicaoSprint = "03";
var NonaPosicaoSprint = "02";
var DecimaPosicaoSprint = "01";
var DecimaPrimeiraPosicaoSprint = "00";
var DecimaSegundaPosicaoSprint = "00";
var DecimaTerceiraPosicaoSprint = "00";
var DecimaQuartaPosicaoSprint = "00";
var DecimaQuintaPosicaoSprint = "00";



// Pilotos ->

var joãoAnselmo = "João <STRONG> ANSELMO </STRONG>";
var joãoAnselmoImagem = "pilotos/anlsemo_camp.jpg";

var felipeSilva = "Felipe <STRONG> SILVA </STRONG>";
var felipeSilvaImagem = "pilotos/FelipeSantos.jpeg";

var talesManso = "Tales <STRONG> MANSO </STRONG>";
var talesMansoImagem = "pilotos/talesManso.png";

var brunoThomaz = "Bruno <STRONG> THOMAZ </STRONG>";
var brunoThomazImagem = "pilotos/mazepin.png";

var guilhermeBarros = "Gui <STRONG> BARROS </STRONG>";
var guilhermeBarrosImagem = "pilotos/guilhermeBarros.jpg";

var jailsonMoura = "Jailson <STRONG> MOURA </STRONG>";
var jailsonMouraImagem = "pilotos/jailson-moura.jpg";

var pabloMuller = "Pablo <STRONG> MULLER </STRONG>";
var pabloMullerImagem = "pilotos/pabloMuller.jpg";

var fredBeder = "Fred <STRONG> BEDER </STRONG>";
var fredBederImagem = "pilotos/fredBeder.jpg";

var raulSilva = "Raul <STRONG> SILVA </STRONG>";
var raulSilvaImagem = "pilotos/mazepin.png";

var nelsonVianna = "Nelson <STRONG> VIANNA </STRONG>";
var nelsonViannaImagem = "pilotos/nelson-vianna.png";

// Fim Pilotos ->


// Carros ->
var ferrari = "Ferrari";
var ferrariImagem = "equipes-f1/Ferrari.png";

var redbull = "Red Bull";
var redbullImagem = "equipes-f1/redbull1.png";

var mercedes = "Mercedes";
var mercedesImagem = "equipes-f1/Mercedes.png";

var alfaRomeo = "Alfa Romeo";
var alfaRomeoImagem = "equipes-f1/Alfaromeo.png";

var mcLaren = "McLaren"
var mcLarenImagem = "equipes-f1/McLaren.png"

var astonMartin = "Aston Martin";
var astonMartinImagem = "equipes-f1/AstonMartin.png";

var williams = "Williams";
var williamsImagem = "equipes-f1/Williams.png";

// Variavel para quando ainda não aconteceu a corrida 'NaC'

var NaC = "0";

// Fim Carros ->


// Posições corrida Hungria ->


var PosicaoTalesMansoHungria = PrimeiraPosicaoCorrida;
var PosicaoJoaoAnselmoHungria = SegundaPosicaoCorrida;
var PosicaoBrunoThomazHungria = TerceiraPosicaoCorrida;
var PosicaoFelipeSilvaHungria = QuartaPosicaoCorrida;
var PosicaoguilhermeBarrosHungria = QuintaPosicaoCorrida;
var PosicaojailsonMouraHungria = SextaPosicaoCorrida;
var PosicaopabloMullerHungria = SetimaPosicaoCorrida;
var PosicaofredBederHungria = OitavaPosicaoCorrida;
var PosicaoraulSilvaHungria = NonaPosicaoCorrida;
var PosicaonelsonViannaHungria = DecimaPosicaoCorrida;



// Posições corrida França ->

var PosicaoTalesMansoFranca = NaC;
var PosicaoBrunoThomazFranca = NaC;
var PosicaoJoaoAnselmoFranca = NaC;
var PosicaoFelipeSilvaFranca = NaC;
var PosicaoguilhermeBarrosFranca = NaC;
var PosicaojailsonMouraFranca = NaC;
var PosicaopabloMullerFranca = NaC;
var PosicaofredBederFranca = NaC;
var PosicaoraulSilvaFranca = NaC;
var PosicaonelsonViannaFranca = NaC;

// Posições corrida Holanda ->

var PosicaoTalesMansoHolanda = NaC;
var PosicaoBrunoThomazHolanda = NaC;
var PosicaoJoaoAnselmoHolanda = NaC;
var PosicaoFelipeSilvaHolanda = NaC;
var PosicaoguilhermeBarrosHolanda = NaC;
var PosicaojailsonMouraHolanda = NaC;
var PosicaopabloMullerHolanda = NaC;
var PosicaofredBederHolanda = NaC;
var PosicaoraulSilvaHolanda = NaC;
var PosicaonelsonViannaHolanda = NaC;

// Posições corrida Belgica ->

var PosicaoTalesMansoBelgica = NaC;
var PosicaoBrunoThomazBelgica = NaC;
var PosicaoJoaoAnselmoBelgica = NaC;
var PosicaoFelipeSilvaBelgica = NaC;
var PosicaoguilhermeBarrosBelgica = NaC;
var PosicaojailsonMouraBelgica = NaC;
var PosicaopabloMullerBelgica = NaC;
var PosicaofredBederBelgica = NaC;
var PosicaoraulSilvaBelgica = NaC;
var PosicaonelsonViannaBelgica = NaC;
// Posições corrida Japão ->

var PosicaoTalesMansoJapao = NaC;
var PosicaoBrunoThomazJapao = NaC;
var PosicaoJoaoAnselmoJapao = NaC;
var PosicaoFelipeSilvaJapao = NaC;
var PosicaoguilhermeBarrosJapao = NaC;
var PosicaojailsonMouraJapao = NaC;
var PosicaopabloMullerJapao = NaC;
var PosicaofredBederJapao = NaC;
var PosicaoraulSilvaJapao = NaC;
var PosicaonelsonViannaJapao = NaC;

// Posições corrida Austria ->

var PosicaoTalesMansoAustria = NaC;
var PosicaoBrunoThomazAustria = NaC;
var PosicaoJoaoAnselmoAustria = NaC;
var PosicaoFelipeSilvaAustria = NaC;
var PosicaoguilhermeBarrosAustria = NaC;
var PosicaojailsonMouraAustria = NaC;
var PosicaopabloMullerAustria = NaC;
var PosicaofredBederAustria = NaC;
var PosicaoraulSilvaAustria = NaC;
var PosicaonelsonViannaAustria = NaC;

// Posições corrida Espanha ->

var PosicaoTalesMansoEspanha = NaC;
var PosicaoBrunoThomazEspanha = NaC;
var PosicaoJoaoAnselmoEspanha = NaC;
var PosicaoFelipeSilvaEspanha = NaC;
var PosicaoguilhermeBarrosEspanha = NaC;
var PosicaojailsonMouraEspanha = NaC;
var PosicaopabloMullerEspanha = NaC;
var PosicaofredBederEspanha = NaC;
var PosicaoraulSilvaEspanha = NaC;
var PosicaonelsonViannaEspanha = NaC;
// Posições corrida Bahrein ->

var PosicaoTalesMansoBahrein = NaC;
var PosicaoBrunoThomazBahrein = NaC;
var PosicaoJoaoAnselmoBahrein = NaC;
var PosicaoFelipeSilvaBahrein = NaC;
var PosicaoguilhermeBarrosBahrein = NaC;
var PosicaojailsonMouraBahrein = NaC;
var PosicaopabloMullerBahrein = NaC;
var PosicaofredBederBahrein = NaC;
var PosicaoraulSilvaBahrein = NaC;
var PosicaonelsonViannaBahrein = NaC;

// FIM CORRIDAS NORMAIS ->



// Corridas Sprint ->


// Posições Sprint Belgica ->

var PosicaoTalesMansoBelgicaSprint = NaC;
var PosicaoBrunoThomazBelgicaSprint = NaC;
var PosicaoJoaoAnselmoBelgicaSprint = NaC;
var PosicaoFelipeSilvaBelgicaSprint = NaC;
var PosicaoguilhermeBarrosBelgicaSprint = NaC;
var PosicaojailsonMouraBelgicaSprint = NaC;
var PosicaopabloMullerBelgicaSprint = NaC;
var PosicaofredBederBelgicaSprint = NaC;
var PosicaoraulSilvaBelgicaSprint = NaC;
var PosicaonelsonViannaBelgicaSprint = NaC;
// Posições Sprint Austria ->

var PosicaoTalesMansoAustriaSprint = NaC;
var PosicaoBrunoThomazAustriaSprint = NaC;
var PosicaoJoaoAnselmoAustriaSprint = NaC;
var PosicaoFelipeSilvaAustriaSprint = NaC;
var PosicaoguilhermeBarrosAustriaSprint = NaC;
var PosicaojailsonMouraAustriaSprint = NaC;
var PosicaopabloMullerAustriaSprint = NaC;
var PosicaofredBederAustriaSprint = NaC;
var PosicaoraulSilvaAustriaSprint = NaC;
var PosicaonelsonViannaAustriaSprint = NaC;

// Posições Sprint Bahrein ->

var PosicaoTalesMansoBahreinSprint = NaC;
var PosicaoBrunoThomazBahreinSprint = NaC;
var PosicaoJoaoAnselmoBahreinSprint = NaC;
var PosicaoFelipeSilvaBahreinSprint = NaC;
var PosicaoguilhermeBarrosBahreinSprint = NaC;
var PosicaojailsonMouraBahreinSprint = NaC;
var PosicaopabloMullerBahreinSprint = NaC;
var PosicaofredBederBahreinSprint = NaC;
var PosicaoraulSilvaBahreinSprint = NaC;
var PosicaonelsonViannaBahreinSprint = NaC;


//POLES

var poleTalesMansoVal = "1";
// GP DA HUNGRIA ETAPA 1 T9 = 1;15.440

var poleBrunoThomazVal = "0";
var poleJoaoAnselmoVal = "0";
var poleFelipeSilvaVal = "0";
var poleguilhermeBarrosVal = "0";
var polejailsonMouraVal = "0";
var polepabloMullerVal = "0";
var polefredBederVal = "0";
var poleraulSilvaVal = "0";
var polenelsonViannaVal = "0";
//Piloto do Dia

var PilotoDoDiaTalesMansoVal = "0";

var PilotoDoDiaBrunoThomazVal = "1";
// GP DA HUNGRIA ETAPA 1 T9

var PilotoDoDiaJoaoAnselmoVal = "0";
var PilotoDoDiaFelipeSilvaVal = "0";
var PilotoDoDiaguilhermeBarrosVal = "0";
var PilotoDoDiajailsonMouraVal = "0";
var PilotoDoDiapabloMullerVal = "0";
var PilotoDoDiafredBederVal = "0";
var PilotoDoDiaraulSilvaVal = "0";
var PilotoDoDianelsonViannaVal = "0";

//Melhor Volta

var MelhorVoltaTalesMansoVal = "0";
var MelhorVoltaBrunoThomazVal = "0";
var MelhorVoltaJoaoAnselmoVal = "0";
var MelhorVoltaFelipeSilvaVal = "0";
var MelhorVoltaguilhermeBarrosVal = "0";
var MelhorVoltajailsonMouraVal = "0";
var MelhorVoltapabloMullerVal = "0";
var MelhorVoltaraulSilvaVal = "0";
var MelhorVoltanelsonViannaVal = "0";
var MelhorVoltafredBederVal = "1";
// GP DA HUNGRIA ETAPA 1 T9 = 1:17.950

//Contagem de Pontos ->

var poinstJoaoAnselmo = parseInt(PilotoDoDiaJoaoAnselmoVal) + parseInt(MelhorVoltaJoaoAnselmoVal) + parseInt(poleJoaoAnselmoVal) + parseInt(PosicaoJoaoAnselmoHungria) + parseFloat(PosicaoJoaoAnselmoFranca) + parseInt(PosicaoJoaoAnselmoHolanda) + parseInt(PosicaoJoaoAnselmoBelgica) + parseInt(PosicaoJoaoAnselmoBelgicaSprint) + parseInt(PosicaoJoaoAnselmoJapao) + parseInt(PosicaoJoaoAnselmoAustria) + parseInt(PosicaoJoaoAnselmoAustriaSprint) + parseInt(PosicaoJoaoAnselmoEspanha) + parseInt(PosicaoJoaoAnselmoBahrein) + parseInt(PosicaoJoaoAnselmoBahreinSprint);
var poinstTalesManso = parseInt(PilotoDoDiaTalesMansoVal) + parseInt(MelhorVoltaTalesMansoVal) + parseInt(poleTalesMansoVal) + parseInt(PosicaoTalesMansoHungria) + parseFloat(PosicaoTalesMansoFranca) + parseInt(PosicaoTalesMansoHolanda) + parseInt(PosicaoTalesMansoBelgica) + parseInt(PosicaoTalesMansoBelgicaSprint) + parseInt(PosicaoTalesMansoJapao) + parseInt(PosicaoTalesMansoAustria) + parseInt(PosicaoTalesMansoAustriaSprint) + parseInt(PosicaoTalesMansoEspanha) + parseInt(PosicaoTalesMansoBahrein) + parseInt(PosicaoTalesMansoBahreinSprint);
var poinstFelipeSilva = parseInt(PilotoDoDiaFelipeSilvaVal) + parseInt(MelhorVoltaFelipeSilvaVal) + parseInt(poleFelipeSilvaVal) + parseInt(PosicaoFelipeSilvaHungria) + parseFloat(PosicaoFelipeSilvaFranca) + parseInt(PosicaoFelipeSilvaHolanda) + parseInt(PosicaoFelipeSilvaBelgica) + parseInt(PosicaoFelipeSilvaBelgicaSprint) + parseInt(PosicaoFelipeSilvaJapao) + parseInt(PosicaoFelipeSilvaAustria) + parseInt(PosicaoFelipeSilvaAustriaSprint) + parseInt(PosicaoFelipeSilvaEspanha) + parseInt(PosicaoFelipeSilvaBahrein) + parseInt(PosicaoFelipeSilvaBahreinSprint);
var poinstBrunoThomaz = parseInt(PilotoDoDiaBrunoThomazVal) + parseInt(MelhorVoltaBrunoThomazVal) + parseInt(poleBrunoThomazVal) + parseInt(PosicaoBrunoThomazHungria) + parseFloat(PosicaoBrunoThomazFranca) + parseInt(PosicaoBrunoThomazHolanda) + parseInt(PosicaoBrunoThomazBelgica) + parseInt(PosicaoBrunoThomazBelgicaSprint) + parseInt(PosicaoBrunoThomazJapao) + parseInt(PosicaoBrunoThomazAustria) + parseInt(PosicaoBrunoThomazAustriaSprint) + parseInt(PosicaoBrunoThomazEspanha) + parseInt(PosicaoBrunoThomazBahrein) + parseInt(PosicaoBrunoThomazBahreinSprint);
var poinstguilhermeBarros = parseInt(PilotoDoDiaguilhermeBarrosVal) + parseInt(MelhorVoltaguilhermeBarrosVal) + parseInt(poleguilhermeBarrosVal) + parseInt(PosicaoguilhermeBarrosHungria) + parseFloat(PosicaoguilhermeBarrosFranca) + parseInt(PosicaoguilhermeBarrosHolanda) + parseInt(PosicaoguilhermeBarrosBelgica) + parseInt(PosicaoguilhermeBarrosBelgicaSprint) + parseInt(PosicaoguilhermeBarrosJapao) + parseInt(PosicaoguilhermeBarrosAustria) + parseInt(PosicaoguilhermeBarrosAustriaSprint) + parseInt(PosicaoguilhermeBarrosEspanha) + parseInt(PosicaoguilhermeBarrosBahrein) + parseInt(PosicaoguilhermeBarrosBahreinSprint);
var poinstjailsonMoura = parseInt(PilotoDoDiajailsonMouraVal) + parseInt(MelhorVoltajailsonMouraVal) + parseInt(polejailsonMouraVal) + parseInt(PosicaojailsonMouraHungria) + parseFloat(PosicaojailsonMouraFranca) + parseInt(PosicaojailsonMouraHolanda) + parseInt(PosicaojailsonMouraBelgica) + parseInt(PosicaojailsonMouraBelgicaSprint) + parseInt(PosicaojailsonMouraJapao) + parseInt(PosicaojailsonMouraAustria) + parseInt(PosicaojailsonMouraAustriaSprint) + parseInt(PosicaojailsonMouraEspanha) + parseInt(PosicaojailsonMouraBahrein) + parseInt(PosicaojailsonMouraBahreinSprint);
var poinstpabloMuller = parseInt(PilotoDoDiapabloMullerVal) + parseInt(MelhorVoltapabloMullerVal) + parseInt(polepabloMullerVal) + parseInt(PosicaopabloMullerHungria) + parseFloat(PosicaopabloMullerFranca) + parseInt(PosicaopabloMullerHolanda) + parseInt(PosicaopabloMullerBelgica) + parseInt(PosicaopabloMullerBelgicaSprint) + parseInt(PosicaopabloMullerJapao) + parseInt(PosicaopabloMullerAustria) + parseInt(PosicaopabloMullerAustriaSprint) + parseInt(PosicaopabloMullerEspanha) + parseInt(PosicaopabloMullerBahrein) + parseInt(PosicaopabloMullerBahreinSprint);
var poinstfredBeder = parseInt(PilotoDoDiafredBederVal) + parseInt(MelhorVoltafredBederVal) + parseInt(polefredBederVal) + parseInt(PosicaofredBederHungria) + parseFloat(PosicaofredBederFranca) + parseInt(PosicaofredBederHolanda) + parseInt(PosicaofredBederBelgica) + parseInt(PosicaofredBederBelgicaSprint) + parseInt(PosicaofredBederJapao) + parseInt(PosicaofredBederAustria) + parseInt(PosicaofredBederAustriaSprint) + parseInt(PosicaofredBederEspanha) + parseInt(PosicaofredBederBahrein) + parseInt(PosicaofredBederBahreinSprint);
var poinstraulSilva = parseInt(PilotoDoDiaraulSilvaVal) + parseInt(MelhorVoltaraulSilvaVal) + parseInt(poleraulSilvaVal) + parseInt(PosicaoraulSilvaHungria) + parseFloat(PosicaoraulSilvaFranca) + parseInt(PosicaoraulSilvaHolanda) + parseInt(PosicaoraulSilvaBelgica) + parseInt(PosicaoraulSilvaBelgicaSprint) + parseInt(PosicaoraulSilvaJapao) + parseInt(PosicaoraulSilvaAustria) + parseInt(PosicaoraulSilvaAustriaSprint) + parseInt(PosicaoraulSilvaEspanha) + parseInt(PosicaoraulSilvaBahrein) + parseInt(PosicaoraulSilvaBahreinSprint);
var poinstnelsonVianna = parseInt(PilotoDoDianelsonViannaVal) + parseInt(MelhorVoltanelsonViannaVal) + parseInt(polenelsonViannaVal) + parseInt(PosicaonelsonViannaHungria) + parseFloat(PosicaonelsonViannaFranca) + parseInt(PosicaonelsonViannaHolanda) + parseInt(PosicaonelsonViannaBelgica) + parseInt(PosicaonelsonViannaBelgicaSprint) + parseInt(PosicaonelsonViannaJapao) + parseInt(PosicaonelsonViannaAustria) + parseInt(PosicaonelsonViannaAustriaSprint) + parseInt(PosicaonelsonViannaEspanha) + parseInt(PosicaonelsonViannaBahrein) + parseInt(PosicaonelsonViannaBahreinSprint);



// inserção das informações ->


// Driver 1 ->
driver1.innerHTML = talesManso;
driver1Imagem.setAttribute("src",talesMansoImagem);
lastro1.innerHTML = ferrari;
lastro1Imagem.setAttribute("src",ferrariImagem);
pontos1.innerHTML = poinstTalesManso;

// Driver 2 ->
driver2.innerHTML = joãoAnselmo;
driver2Imagem.setAttribute("src",joãoAnselmoImagem);
lastro2.innerHTML = ferrari;
lastro2Imagem.setAttribute("src",ferrariImagem);
pontos2.innerHTML = poinstJoaoAnselmo;

// Driver 3 ->
driver3.innerHTML = brunoThomaz;
driver3Imagem.setAttribute("src",brunoThomazImagem);
lastro3.innerHTML = redbull;
lastro3Imagem.setAttribute("src",redbullImagem);
pontos3.innerHTML = poinstBrunoThomaz;


// Driver 4 ->
driver4.innerHTML = felipeSilva;
driver4Imagem.setAttribute("src",felipeSilvaImagem);
lastro4.innerHTML = redbull;
lastro4Imagem.setAttribute("src",redbullImagem);
pontos4.innerHTML = poinstFelipeSilva;

// Driver 5 ->
driver5.innerHTML = guilhermeBarros;
driver5Imagem.setAttribute("src",guilhermeBarrosImagem);
lastro5.innerHTML = mercedes;
lastro5Imagem.setAttribute("src",mercedesImagem);
pontos5.innerHTML = poinstguilhermeBarros;

// Driver 6->
driver6.innerHTML = jailsonMoura;
driver6Imagem.setAttribute("src",jailsonMouraImagem);
lastro6.innerHTML = mercedes;
lastro6Imagem.setAttribute("src",mercedesImagem);
pontos6.innerHTML = poinstjailsonMoura;

// Driver 7->
driver7.innerHTML = pabloMuller;
driver7Imagem.setAttribute("src",pabloMullerImagem);
lastro7.innerHTML = alfaRomeo;
lastro7Imagem.setAttribute("src",alfaRomeoImagem);
pontos7.innerHTML = poinstpabloMuller;

// Driver 8->
driver8.innerHTML = fredBeder;
driver8Imagem.setAttribute("src",fredBederImagem);
lastro8.innerHTML = alfaRomeo;
lastro8Imagem.setAttribute("src",alfaRomeoImagem);
pontos8.innerHTML = poinstfredBeder;

// Driver 9->
driver9.innerHTML = raulSilva;
driver9Imagem.setAttribute("src",raulSilvaImagem);
lastro9.innerHTML = mcLaren;
lastro9Imagem.setAttribute("src",mcLarenImagem);
pontos9.innerHTML = poinstraulSilva;

// Driver 10->
driver10.innerHTML = nelsonVianna;
driver10Imagem.setAttribute("src",nelsonViannaImagem);
lastro10.innerHTML = mcLaren;
lastro10Imagem.setAttribute("src",mcLarenImagem);
pontos10.innerHTML = poinstnelsonVianna;


var joãoAnselmoDriver = document.getElementById("joaoAnselmoDriverSennaT9");
var etapa1Anselmo = document.getElementById("etapa1Anselmo");
var etapa2Anselmo = document.getElementById("etapa2Anselmo");
var etapa2SprintAnselmo = document.getElementById("etapa2SprintAnselmo");
var etapa3Anselmo = document.getElementById("etapa3Anselmo");
var etapa4Anselmo = document.getElementById("etapa4Anselmo");
var etapa4SprintAnselmo = document.getElementById("etapa4SprintAnselmo");
var etapa5Anselmo = document.getElementById("etapa5Anselmo");
var etapa6Anselmo = document.getElementById("etapa6Anselmo");
var etapa6SprintAnselmo = document.getElementById("etapa6SprintAnselmo");
var etapa7Anselmo = document.getElementById("etapa7Anselmo");
var etapa8Anselmo = document.getElementById("etapa8Anselmo");
var etapa8SprintAnselmo = document.getElementById("etapa8SprintAnselmo");


joãoAnselmoDriver.innerHTML = joãoAnselmo;


var pontosAnselmo = document.getElementById("pontosAnselmo") ;
var PilotoDoDiaJoaoAnselmoEl = document.getElementById("PilotoDoDiaJoaoAnselmo");
PilotoDoDiaJoaoAnselmoEl.innerHTML = PilotoDoDiaJoaoAnselmoVal;
pontosAnselmo.innerHTML = poinstJoaoAnselmo;
var MelhorVoltaJoaoAnselmoEl = document.getElementById("MelhorVoltaJoaoAnselmo");
MelhorVoltaJoaoAnselmoEl.innerHTML = MelhorVoltaJoaoAnselmoVal;
var poleJoaoAnselmoEl= document.getElementById("PoleJoaoAnselmo");
poleJoaoAnselmoEl.innerHTML = poleJoaoAnselmoVal;




