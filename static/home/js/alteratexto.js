let selectedElement = null; // Elemento atualmente selecionado

// Função para abrir a paleta de texto
function openTextPalette() {
    document.getElementById('palette_texto_agencia').style.display = 'block';
    document.getElementById('text-input').value = selectedElement.textContent; // Define o valor do campo de texto
}

// Atualiza o texto do elemento selecionado em tempo real
document.getElementById('text-input').addEventListener('input', function() {
    if (selectedElement) {
        selectedElement.textContent = this.value; // Atualiza o texto do elemento
    }
});

// Fechar a paleta ao clicar fora, exceto se clicar dentro da paleta
window.addEventListener('click', function(event) {
    const palette = document.getElementById('palette_texto_agencia');
    if (!palette.contains(event.target) && event.target !== selectedElement) {
        palette.style.display = 'none';
    }
});

// Fechar a paleta ao clicar no botão de fechar
document.getElementById('close-text-palette').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    document.getElementById('palette_texto_agencia').style.display = 'none';
});

// Impede que cliques dentro da paleta fechem a paleta
document.getElementById('palette_texto_agencia').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique feche a paleta
});

// Aplicar texto ao clicar no botão de aplicar
document.getElementById('apply-text').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    if (selectedElement) {
        selectedElement.textContent = document.getElementById('text-input').value; // Atualiza o texto do elemento
    }
    document.getElementById('palette_texto_agencia').style.display = 'none'; // Fecha a paleta
});

// Função para adicionar eventos de clique para todas as áreas de texto
function addClickEventToText(id) {
    const element = document.getElementById(id);
    element.addEventListener('click', function(event) {
        selectedElement = element; // Define o elemento clicado como o selecionado
        openTextPalette(); // Abre a paleta de texto
        event.stopPropagation(); // Impede que o clique feche a paleta
    });
}

// Adicionar evento de clique para cada área de texto
addClickEventToText('texto_apresentacao_agencia');
addClickEventToText('texto_explicacao1_agencia');
addClickEventToText('texto_explicacao2_agencia');
addClickEventToText('texto_explicacao3_agencia');
addClickEventToText('texto_explicacao4_agencia');
addClickEventToText('texto_explicacao5_agencia');
addClickEventToText('title');
