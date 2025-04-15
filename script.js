document.addEventListener('DOMContentLoaded', function () {
 
 const botaoDeAcessibilidademm = document.getElementById('botao-acessibilidade')
 const opcoesDeAcessibiliade = document.getElementById ('opcoes-acessibilidade')
 
 botaoDeAcessibilidademm.addEventListener('click', funcion (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 })
 
 
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
   });





});