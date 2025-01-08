let selectedImageElement = null; // Elemento de imagem atualmente selecionado

// Função para abrir a paleta de imagem
function openImagePalette() {
    document.getElementById('palette_image_upload').style.display = 'block';

    // Define valores iniciais para largura e altura
    document.getElementById('image-width').value = selectedImageElement.style.width ? parseInt(selectedImageElement.style.width) : 50; // Definindo o valor inicial para 50
    document.getElementById('image-height').value = selectedImageElement.style.height ? parseInt(selectedImageElement.style.height) : 50; // Definindo o valor inicial para 50
}

// Atualizar a imagem ao escolher um arquivo
document.getElementById('image-upload').addEventListener('change', function(event) {
    const imageFile = event.target.files[0];
    if (imageFile && selectedImageElement) {
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImageElement.style.backgroundImage = `url(${e.target.result})`;
            selectedImageElement.style.backgroundSize = 'cover'; // Para garantir que a imagem cubra o elemento
        };
        reader.readAsDataURL(imageFile);
    }
});

// Atualizar largura em tempo real
document.getElementById('image-width').addEventListener('input', function() {
    if (selectedImageElement) {
        selectedImageElement.style.width = this.value + 'px';
    }
});

// Atualizar altura em tempo real
document.getElementById('image-height').addEventListener('input', function() {
    if (selectedImageElement) {
        selectedImageElement.style.height = this.value + 'px';
    }
});

// Aumentar largura em 10px
document.getElementById('increase-width').addEventListener('click', function(event) {
    event.preventDefault();
    const widthInput = document.getElementById('image-width');
    widthInput.value = parseInt(widthInput.value) + 10; // Aumenta em 10
    widthInput.dispatchEvent(new Event('input')); // Aciona o evento de input para atualizar a imagem
});

// Diminuir largura em 10px
document.getElementById('decrease-width').addEventListener('click', function(event) {
    event.preventDefault();
    const widthInput = document.getElementById('image-width');
    widthInput.value = Math.max(parseInt(widthInput.value) - 10, 0); // Diminui em 10, garantindo que não fique negativo
    widthInput.dispatchEvent(new Event('input')); // Aciona o evento de input para atualizar a imagem
});

// Aumentar altura em 10px
document.getElementById('increase-height').addEventListener('click', function(event) {
    event.preventDefault();
    const heightInput = document.getElementById('image-height');
    heightInput.value = parseInt(heightInput.value) + 10; // Aumenta em 10
    heightInput.dispatchEvent(new Event('input')); // Aciona o evento de input para atualizar a imagem
});

// Diminuir altura em 10px
document.getElementById('decrease-height').addEventListener('click', function(event) {
    event.preventDefault();
    const heightInput = document.getElementById('image-height');
    heightInput.value = Math.max(parseInt(heightInput.value) - 10, 0); // Diminui em 10, garantindo que não fique negativo
    heightInput.dispatchEvent(new Event('input')); // Aciona o evento de input para atualizar a imagem
});

// Aplicar a imagem e redimensionar
document.getElementById('apply-image').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    // Não precisa fazer nada aqui, pois já atualizamos em tempo real
    document.getElementById('palette_image_upload').style.display = 'none'; // Fechar a paleta
});

// Fechar a paleta ao clicar no botão de fechar
document.getElementById('close-image-palette').addEventListener('click', function(event) {
    event.preventDefault(); // Evita recarregar a página
    document.getElementById('palette_image_upload').style.display = 'none';
});

// Impede que cliques dentro da paleta fechem a paleta
document.getElementById('palette_image_upload').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique feche a paleta
});

// Função para adicionar eventos de clique para o elemento de imagem
function addClickEventToImage(id) {
    const element = document.getElementById(id);
    element.addEventListener('click', function(event) {
        selectedImageElement = element; // Define o elemento clicado como o selecionado
        openImagePalette(); // Abre a paleta de imagem
        event.stopPropagation(); // Impede que o clique feche a paleta
    });
}

// Adicionar evento de clique para o título principal
addClickEventToImage('main-title');
