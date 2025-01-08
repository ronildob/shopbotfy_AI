// Dicionário de vídeos por idioma
const videoLinks = {
    'en': 'https://www.youtube.com/embed/ISR72W3lYII',
    'es': 'https://www.youtube.com/embed/YHnoNNDNrvQ',
    'pt': 'https://www.youtube.com/embed/mkGYyq6UzWk',
    // Adicione mais idiomas e links conforme necessário ( ISR72W3lYII  )
};

// Função para atualizar o vídeo com base no idioma selecionado
function updateVideo() {
    const selectedLanguage = document.getElementById('language-select').value;
    const videoSrc = videoLinks[selectedLanguage] || videoLinks['pt']; // Padrão para o vídeo em inglês
    document.getElementById('tutorial-video').src = videoSrc;
}

// Adiciona um evento ao seletor de idioma para atualizar o vídeo quando o idioma for alterado
document.getElementById('language-select').addEventListener('change', updateVideo);

// Carregar o vídeo padrão (Inglês) ao carregar a página
updateVideo();