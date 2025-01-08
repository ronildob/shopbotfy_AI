document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Mostrar o botão quando rolar para baixo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Ajuste o valor conforme necessário
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Rolar suavemente para o topo quando o botão for clicado
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
