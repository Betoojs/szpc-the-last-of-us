/* 
 Objetivo - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1   Dar um jeito de pegar o elemento HTML  dos botões

    - passo 2   Dar um jeito de indentificar o clique do usuário no botão

    - passo 3   Desmarcar o botão selecionado anteriormente 

    - passo 4   Marcar o botão clicado como se estivesse selecionada
    
    - passo 5   esconder a imagem de fundo anterior 

    - passo 6   Fazer aparecer a imagem correspondente ao botão clicado
*/

// - passo 1   Dar um jeito de pegar o elemento HTML dos botões
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');

// - passo 2   Dar um jeito de indentificar o clique do usuário no botão
    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - passo 3 - Desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - Marcar o botão clicado como se estivesse selecionad0
        selecionarBotaoCarrossel(botao);
        
        // - passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // - passo 6   Fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
} 

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

