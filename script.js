document.addEventListener('DOMContentLoaded', function () {

  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
  })

  const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
  botaoDeAcessibilidade.setAttribute('aria-epanded', !botaoSelecionado);



  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');

  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  })
});

        ScrollRevel (). reveal ('#inicio', {delay: 500})
        ScrollRevel (). reveal ('#galeria', {delay: 500})
        ScrollRevel (). reveal ('#tropicalia', {delay: 500})
        ScrollRevel (). reveal ('#contato', {delay: 500})