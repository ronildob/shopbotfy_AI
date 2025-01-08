let selectedElementBg = null; // Elemento atualmente selecionado para fundo

// Função para abrir a paleta de cores de fundo
function openBgPalette() {
    document.getElementById('palette_background_agencia').style.display = 'block';
    if (selectedElementBg) {
        document.getElementById('bg-color').value = rgbToHex(getComputedStyle(selectedElementBg).backgroundColor);
    }
}

// Função para converter rgb para hex
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    return result ? "#" + result.map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("") : "#000000";
}

// Aplicar estilo de fundo em tempo real
document.getElementById('bg-color').addEventListener('input', function() {
    if (selectedElementBg) {
        selectedElementBg.style.backgroundColor = this.value;
    }
});

// Fechar a paleta de fundo ao clicar no botão de fechar
document.getElementById('close-bg-palette').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('palette_background_agencia').style.display = 'none';
});

// Aplicar estilos ao clicar no botão
document.getElementById('apply-bg-style').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('palette_background_agencia').style.display = 'none';
});

// Fechar as paletas ao clicar fora
window.addEventListener('click', function(event) {
    const bgPalette = document.getElementById('palette_background_agencia');
    
    if (!bgPalette.contains(event.target) && selectedElementBg && event.target !== selectedElementBg) {
        bgPalette.style.display = 'none';
    }
});

// Adicionar eventos de clique para os containers
function addClickEventToContainer(id) {
    const element = document.getElementById(id);
    element.addEventListener('click', function(event) {
        selectedElementBg = element;
        openBgPalette();
        event.stopPropagation();
    });
}

// Adicionar eventos de clique para os containers
addClickEventToContainer('apresentacao1'); // Verifique se esse ID está correto no seu HTML
addClickEventToContainer('apresentacao2');
addClickEventToContainer('apresentacao3');
addClickEventToContainer('apresentacao4');
addClickEventToContainer('apresentacao5');
addClickEventToContainer('main'); // Verifique se esse ID está correto no seu HTML
addClickEventToContainer('header'); // Verifique se esse ID está correto no seu HTML
addClickEventToContainer('footer'); // Verifique se esse ID está correto no seu HTML
