/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  const cartaUsuarioUm = comprarCarta();
  const cartaUsuarioDois = comprarCarta();
  const cartaComputadorUm = comprarCarta();
  const cartaComputadorDois = comprarCarta();
  const resultadoUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor;
  const resultadoPc = cartaComputadorUm.valor + cartaComputadorDois.valor;

  console.log(
    `Usuário - Cartas: ${cartaUsuarioUm.texto} ${
      cartaUsuarioDois.texto
    } - Pontuação ${resultadoUsuario} `
  );

  console.log(
   `Computador - Cartas: ${cartaComputadorUm.texto} ${
     cartaComputadorDois.texto
   } - Pontuação ${resultadoPc} `
 );


   if(resultadoUsuario > resultadoPc) {
      console.log('O usuário ganhou!')
   } else if(resultadoPc > resultadoUsuario) {
      console.log('O computador ganhou!')
   } else{
      console.log('Empate!')
   }
 
} else {
  console.log("O Jogo acabou !");
}
