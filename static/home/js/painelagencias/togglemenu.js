function toggleContent(element) {
    var content = element.nextElementSibling;
    var allContents = document.querySelectorAll('.container-content');
    
    // Fecha todos os containers, exceto o que foi clicado
    allContents.forEach(function(item) {
        if (item !== content) {
            item.style.display = 'none';
        }
    });

    // Alterna a visibilidade do conteúdo do container clicado
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}