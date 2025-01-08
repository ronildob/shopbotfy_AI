function animateText() {
    const textContainer = document.getElementById('text-container');
    const mainTitle = document.getElementById('main-title');
   
    // Define os textos e o intervalo de troca
    const texts = [mainTitle, subtitle1, subtitle2];
    const interval = 2000; // Tempo de pausa entre cada troca (em milissegundos)

    // Função para trocar os textos
    function switchText() {
        const currentText = textContainer.querySelector(':not([style*="display: none;"])');
        const currentIndex = texts.indexOf(currentText);

        // Esconde o texto atual
        currentText.style.display = 'none';

        // Calcula o próximo índice para exibir o próximo texto
        const nextIndex = (currentIndex + 1) % texts.length;

        // Exibe o próximo texto
        texts[nextIndex].style.display = 'block';

        // Agendamento da próxima troca de texto
        setTimeout(switchText, interval);
    }

    // Inicia a troca de texto
    switchText();
}

// Chama a função de animação quando o documento estiver totalmente carregado
document.addEventListener('DOMContentLoaded', animateText);