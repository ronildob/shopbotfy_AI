document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('#cont-text-new');

    // Configuração do IntersectionObserver
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Alterna entre as animações para as seções
                if (entry.target.dataset.index % 2 === 0) {
                    entry.target.classList.add('slide-left'); // Seções pares
                } else {
                    entry.target.classList.add('slide-right'); // Seções ímpares
                }
                observer.unobserve(entry.target); // Para de observar após a animação ser aplicada
            }
        });
    }, { threshold: 0.1 }); // O threshold ajusta quando a animação será ativada (0.1 significa 10% visível)

    // Adiciona um índice a cada seção para alternar a animação
    sections.forEach((section, index) => {
        section.dataset.index = index;
        observer.observe(section); // Observa cada seção
    });
});
