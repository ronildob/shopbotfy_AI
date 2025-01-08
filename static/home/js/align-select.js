



// Aplicar o alinhamento em tempo real
document.getElementById('align-select').addEventListener('input', function() {
    if (selectedMoveElement) {
        updateElementAlignment(this.value);
    }
});

// Função para atualizar o alinhamento do elemento
function updateElementAlignment(alignment) {
    const header = document.getElementById('header');
    if (alignment === 'left') {
        selectedMoveElement.style.justifyContent = 'flex-start';
    } else if (alignment === 'center') {
        selectedMoveElement.style.justifyContent = 'center';
    } else if (alignment === 'right') {
        selectedMoveElement.style.justifyContent = 'flex-end';
    }

    // Aplicar a mudança no header (pai)
    header.style.display = 'flex';
    header.style.justifyContent = selectedMoveElement.style.justifyContent;
}

// Fechar a paleta ao clicar no botão de fechar
document.getElementById('close-move-palette').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    document.getElementById('palette_move').style.display = 'none';
});

// Aplicar o alinhamento ao clicar no botão de aplicar
document.getElementById('apply-move').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    if (selectedMoveElement) {
        const alignmentValue = document.getElementById('align-select').value;
        updateElementAlignment(alignmentValue);
    }
    document.getElementById('palette_move').style.display = 'none'; // Fecha a paleta
});

// Fechar a paleta ao clicar fora, exceto se clicar dentro da paleta
window.addEventListener('click', function(event) {
    const palette = document.getElementById('palette_move');
    if (!palette.contains(event.target) && event.target !== selectedMoveElement) {
        palette.style.display = 'none';
    }
});

// Impede que cliques dentro da paleta fechem a paleta
document.getElementById('palette_move').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique feche a paleta
});

// Função para adicionar eventos de clique para os elementos que podem ser movidos
function addClickEventToMoveElement(id) {
    const element = document.getElementById(id);
    element.addEventListener('click', function(event) {
        selectedMoveElement = element; // Define o elemento clicado como o selecionado
        openMovePalette(); // Abre a paleta de movimentação
        event.stopPropagation(); // Impede que o clique feche a paleta
    });
}

// Adicionar evento de clique para os elementos que podem ser movidos
addClickEventToMoveElement('main-title');
addClickEventToMoveElement('title');
