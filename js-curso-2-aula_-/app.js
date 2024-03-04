let listaNumerosSorteados = [];
let numeroMax = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', )
}

function exibirMensagemInicial() {
 exibirTextoNaTela('h1' , 'Jogo do número secreto' );
 exibirTextoNaTela("p" , "Escolha um número entre 1 e " + numeroMax );
}
exibirMensagemInicial();


function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numSecreto){
    exibirTextoNaTela("h1", "Acertou!!");
    let palavraTentativa = tentativas > 1 ? " tentativas" : " tentativa"

    let mensagemTentativas = "Parabéns, acertou o número secreto com " + tentativas + palavraTentativa
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  else{
    if(chute > numSecreto){
      exibirTextoNaTela("h1", "Tente novamente");
      exibirTextoNaTela("p", "O número secreto é menor que " + chute);
      
    } else{
      exibirTextoNaTela("h1", "Tente novamente");
      exibirTextoNaTela("p", "O número secreto é maior que " + chute);
    }
    tentativas++
    limparCampo()
  }
}

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

if(quantidadeElementosLista == numeroMax){
  listaNumerosSorteados = [];

}

    if(listaNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumAleatorio();
     
    } else {
      listaNumerosSorteados.push(numeroEscolhido)
      console.log(listaNumerosSorteados)
      return numeroEscolhido

    }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numSecreto = gerarNumAleatorio();
  limparCampo();
  tentativas = 1;
 exibirMensagemInicial();
 document.getElementById("reiniciar").setAttribute("disabled", true)
}