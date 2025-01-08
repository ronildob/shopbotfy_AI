// Dicionário de URLs de redirecionamento por idioma
const redirectionLinks = {
    'en': 'https://shopify.pxf.io/rQmEZj',
    'es': 'https://shopify.pxf.io/6emxyr',
    'pt': 'https://shopify.pxf.io/rQmEZj',
    // Adicione mais idiomas e links conforme necessário
};

// Função para atualizar o botão de redirecionamento com base no idioma selecionado
function updateRedirection() {
    const selectedLanguage = document.getElementById('language-select').value;
    const redirectionHref = redirectionLinks[selectedLanguage] || '#';
    const redirectionButton = document.getElementById('redirection-button');
    redirectionButton.href = redirectionHref;

    if (selectedLanguage) {
        redirectionButton.classList.add('ativo');
        redirectionButton.removeAttribute('disabled');
        redirectionButton.onclick = null; // Remove o evento de click
        document.getElementById('alert-message').style.display = 'none'; // Esconde a mensagem de alerta
    } else {
        redirectionButton.classList.remove('ativo');
        redirectionButton.setAttribute('disabled', 'true');
        redirectionButton.onclick = function(event) {
            event.preventDefault(); // Previne o comportamento de clique
            document.getElementById('alert-message').style.display = 'block'; // Mostra a mensagem de alerta
        }
    }
}

// Adiciona um evento ao seletor de idioma para atualizar o botão de redirecionamento quando o idioma for alterado
document.getElementById('language-select').addEventListener('change', updateRedirection);

// Carregar o estado padrão do botão (opcional) ao carregar a página
updateRedirection();