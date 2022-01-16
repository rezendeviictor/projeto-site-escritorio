/*
quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a proxima imagem

    A imagem atual começa em 0 pq a primeira imagem, assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens para poder saber quer agora eu vou mostrar a segunda imagem

    Esconder todas as imagens 
        pegar todas as imagens usando oo DOM e remover a classe 'mostrar'

    Mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima, e coolocar a classe 'mostrar' nela
*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;


function esconderImagens() {
    imagensPainel.forEach((imagem) => {
        imagem.classList.remove("mostrar");
      });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');     
}

/*
quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a proxima imagem
*/
setaAvancar.addEventListener("click", function () {

    //teste se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais');
    return;
    }
  /* 
        A imagem atual começa em 0 pq a primeira imagem, assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens para poder saber quer agora eu vou mostrar a segunda imagem
    */
  imagemAtual++;

  /*
        Esconder todas as imagens 
        pegar todas as imagens usando oo DOM e remover a classe 'mostrar'
    */
    esconderImagens();

    mostrarImagem();

  /*
         Mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima, e coolocar a classe 'mostrar' nela
    */
    imagensPainel[imagemAtual].classList.add('mostrar'); 
});

/*
quando clicar na seta para voltar, temos que esconder todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    /*
        Esconder todas as imagens 
        pegar todas as imagens usando oo DOM e remover a classe 'mostrar'

         Mostrar a imagem anterior
        pegar todas as imagens, descobrir qual é a a anterior, e coolocar a classe 'mostrar' nela
    */
    esconderImagens();
    mostrarImagem();

});
