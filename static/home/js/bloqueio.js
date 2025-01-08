// Bloquear menu de contexto
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// Detectar abertura do console (F12)
window.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault(); // Impede a ação padrão da tecla F12 (abrir o console)
        // Você também pode adicionar outras ações aqui, se necessário
    }
});