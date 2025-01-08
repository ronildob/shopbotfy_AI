let selectedElement = null; // Elemento atualmente selecionado

    // Função para abrir a paleta de estilos
    function openPalette() {
        document.getElementById('palette_texto_agencia').style.display = 'block';

        // Definir valores iniciais para os estilos do elemento selecionado
        document.getElementById('text-color').value = rgbToHex(getComputedStyle(selectedElement).color);
        document.getElementById('font-size').value = parseInt(getComputedStyle(selectedElement).fontSize);
        document.getElementById('text-align').value = getComputedStyle(selectedElement).textAlign;
    }

    // Função para converter rgb para hex
    function rgbToHex(rgb) {
        const result = rgb.match(/\d+/g);
        return result ? "#" + result.map(x => {
            const hex = parseInt(x).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("") : "#000000";
    }

    // Aplicar estilo em tempo real
    document.getElementById('text-color').addEventListener('input', function() {
        selectedElement.style.color = this.value;
    });

    document.getElementById('font-size').addEventListener('input', function() {
        selectedElement.style.fontSize = this.value + 'px';
    });

    document.getElementById('text-align').addEventListener('input', function() {
        selectedElement.style.textAlign = this.value;
    });

    // Fechar a paleta ao clicar fora, exceto se clicar dentro da paleta
    window.addEventListener('click', function(event) {
        const palette = document.getElementById('palette_texto_agencia');
        if (!palette.contains(event.target) && event.target !== selectedElement) {
            palette.style.display = 'none';
        }
    });

    // Fechar a paleta ao clicar no botão de fechar
    document.getElementById('close-palette').addEventListener('click', function(event) {
        event.preventDefault(); // Evita recarregar a página
        document.getElementById('palette_texto_agencia').style.display = 'none';
    });

    // Impede que cliques dentro da paleta fechem a paleta (inclui o campo de texto)
    document.getElementById('palette_texto_agencia').addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique feche a paleta
    });

    // Aplicar estilo e fechar a paleta ao clicar no botão de aplicar
    document.getElementById('apply-style').addEventListener('click', function(event) {
        event.preventDefault(); // Evita recarregar a página
        document.getElementById('palette_texto_agencia').style.display = 'none';
    });

    // Função para adicionar eventos de clique para todas as áreas de texto
    function addClickEventToText(id) {
        const element = document.getElementById(id);
        element.addEventListener('click', function(event) {
            selectedElement = element; // Define o elemento clicado como o selecionado
            openPalette(); // Abre a paleta de estilos
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