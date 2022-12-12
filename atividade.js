<meta charset="utf-8">

<script>

function pulalinha() {
 document.write("<br>");
 document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulalinha();
}


function calculaImc(altura, peso) {
    return peso / (altura * altura);
}

{/*Esta função define a parte do calculo do imc, mostra como esse indice será calculado e quais as informações que serão necessarias para o calculo */}

var nome = prompt("Qual é o seu nome?");
var alturaInformada = prompt("Informe sua altura");
var pesoInformado = prompt("Informe seu peso");

{/* Aqui tem a parte da entrada de dados inseridos pelo usuarios, que serão guardados em variaveis e serão usados depois. */}

var imc = calculaImc(alturaInformada, pesoInformado);

{/*Já nesta parte foi declarada a variavel >imc< que apresenta as outras duas variaveis necesserias para o calculo do Indice de Massa Corporal*/}

document.write(nome + " O seu IMC é " + imc);

{/*Aqui é a parte da saída dos dados (final do algoritmo), personalizados com as informações inseridas pelo usuario*/}

</script>