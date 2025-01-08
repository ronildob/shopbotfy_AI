const board = document.querySelector('.board');

let isDown = false;  // Flag para saber se o botão do mouse está pressionado
let startX;          // Posição inicial do cursor do mouse no eixo X
let scrollLeft;      // Posição inicial do scroll no eixo X

board.addEventListener('mousedown', (e) => {
    isDown = true;                          // Ativa o flag de "mouse pressionado"
    board.classList.add('active');           // Opcional: pode adicionar uma classe quando pressionar
    startX = e.pageX - board.offsetLeft;     // Calcula a posição inicial X
    scrollLeft = board.scrollLeft;           // Pega a posição atual do scroll
    board.style.cursor = 'grabbing';         // Altera o cursor para o de arrasto
    e.preventDefault();                      // Evita o comportamento padrão do mouse
});

board.addEventListener('mouseleave', () => {
    isDown = false;                          // Se o mouse sair da área, desativa o flag
    board.classList.remove('active');        // Remove a classe ativa
    board.style.cursor = 'grab';             // Volta o cursor para o estado inicial
});

board.addEventListener('mouseup', () => {
    isDown = false;                          // Quando soltar o botão do mouse, desativa o flag
    board.classList.remove('active');
    board.style.cursor = 'grab';             // Volta o cursor para o estado inicial
});

board.addEventListener('mousemove', (e) => {
    if (!isDown) return;                     // Se não estiver pressionado, não faz nada
    e.preventDefault();                      // Evita seleção de texto ou comportamento padrão
    const x = e.pageX - board.offsetLeft;    // Calcula a posição X atual
    const walk = (x - startX) * 1.5;         // Reduz a velocidade do arrasto para suavidade
    board.scrollLeft = scrollLeft - walk;    // Aplica o scroll na posição horizontal
});