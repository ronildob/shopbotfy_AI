// Quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    // Seleciona o wrapper do loader
    var loaderWrapper = document.getElementById('loader-wrapper');

    // Adiciona a classe para fazer a transição de fade-out
    loaderWrapper.classList.add('fade-out');

    // Aguarda 5 segundos após o carregamento completo antes de remover o loader
    setTimeout(function() {
        loaderWrapper.style.display = 'none'; // Remove o loader
        document.getElementById('bg-video').style.display = 'block'; // Mostra o conteúdo
    }, 5500); // 500ms (transição de fade-out) + 3000ms (5 segundos de espera)
});
