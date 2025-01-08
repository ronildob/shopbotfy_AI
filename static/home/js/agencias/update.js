
    // Função principal para atualizar a visualização em tempo real
    function updatePreview() {
        // Atualizar links de pré-visualização
        document.getElementById('copy_agencia-preview').textContent = document.getElementById('copy_agencia').value;
        document.getElementById('telefone_agencia-preview').textContent = document.getElementById('telefone_agencia').value;
        document.getElementById('link_site_agencia-preview').href = document.getElementById('link_site_agencia').value;
        document.getElementById('contato_agencia-preview').href = document.getElementById('contato_agencia').value;
        document.getElementById('link_face_agencia-preview').href = document.getElementById('link_face_agencia').value;
        document.getElementById('link_insta_agencia-preview').href = document.getElementById('link_insta_agencia').value;
        document.getElementById('link_youtube_agencia-preview').href = document.getElementById('link_youtube_agencia').value;


        // Atualizar imagem 
        const bgImage = document.getElementById('agencia_bg_image').files[0];
        if (bgImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('main-title-preview').style.backgroundImage = `url('${e.target.result}')`;
            }
            reader.readAsDataURL(bgImage);
        } else {
            const bgImageUrl = document.getElementById('agencia_bg_image_url').value;
            if (bgImageUrl) {
                document.getElementById('main-title-preview').style.backgroundImage = `url('${bgImageUrl}')`;
            }
        }
        // Atualizar largura e altura da imagem
        const bgWidth = document.getElementById('agencia_bg_width').value || '0px';
        const bgHeight = document.getElementById('agencia_bg_height').value || '0px';
        document.getElementById('main-title-preview').style.width = bgWidth;
        document.getElementById('main-title-preview').style.height = bgHeight;
        // Atualizar posição da imagem
        document.getElementById('main-title-preview').style.backgroundPosition = document.getElementById('agencia_bg_position').value || 'center';

        
        
        // Atualizar cor e tamanho dos textos
        const fontSize = document.getElementById('font_size').value || '16px';
            document.getElementById('title-preview').style.fontSize = fontSize;

            
    // Atualiza o texto do elemento selecionado em tempo real
    document.getElementById('text-input').addEventListener('input', function() {
        if (selectedElement) {
            selectedElement.textContent = this.value; // Atualiza o texto do elemento
        }
    });
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


        
    }

    
    // Função para ajustar a posição dos elementos
    function adjustPosition(elementId, direction, value) {
        const element = document.getElementById(elementId);
        if (!element) return;
        // Obtenha a posição atual do elemento
        const currentPos = parseInt(window.getComputedStyle(element).getPropertyValue(direction)) || 0;
        // Atualize a posição
        element.style[direction] = (currentPos + value) + 'px';
    }

    

    // Funções para alterar os valores de largura, altura e tamanho da fonte
    function changeValue(inputId, increment) {
        const inputElement = document.getElementById(inputId);
        let currentValue = parseInt(inputElement.value, 10);

        if (isNaN(currentValue)) {
            currentValue = 0;
        }

        currentValue += increment;

        // Impedir valores negativos para largura, altura e tamanho da fonte
        if (inputId !== 'font_size' && currentValue < 1) {
            currentValue = 1;
        }

        // Adicionar 'px' ao final do valor
        inputElement.value = currentValue + 'px';

        // Chamar a função de atualização
        updatePreview();
    }

    // Atualizar texto conforme mudanças no campo
    function updateTextContent(value) {
        document.getElementById('title-preview').textContent = value;
    }

    // Atualizar tamanho da fonte
    function updateFontSize(value) {
        document.getElementById('title-preview').style.fontSize = value + 'px';
    }

    

