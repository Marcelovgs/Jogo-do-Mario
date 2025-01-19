const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    // Remove a classe se ela já estiver aplicada
    mario.classList.remove('jump');

    // Força o navegador a reinicializar a classe (reflow/reset do ciclo)
    void mario.offsetWidth;

    // Adiciona a classe novamente para reiniciar a animação
    mario.classList.add('jump');

    // Classe será automaticamente removida ao final da animação no CSS
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição do cano
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom); // Altura do Mario

    // Verifica colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Para a animação do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Parando a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Opcional: Para o loop e exibe mensagem de fim de jogo
        clearInterval(loop);

    }
}, 10);

// Adiciona o evento de tecla pressionada para o pulo
document.addEventListener('keydown', jump);
