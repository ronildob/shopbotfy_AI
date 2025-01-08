// Função genérica para atualizar cor e valor do input de texto
function createColorHandler(colorInputId, textInputId, cssVariableName) {
    const colorInput = document.getElementById(colorInputId);
    const textInput = document.getElementById(textInputId);

    // Atualiza a cor no campo de texto e na variável CSS correspondente
    colorInput.addEventListener('input', function () {
        const colorValue = this.value;
        textInput.value = colorValue;
        document.documentElement.style.setProperty(`--${cssVariableName}`, colorValue);
    });

    // Atualiza o campo de cor baseado no input de texto
    textInput.addEventListener('input', function () {
        const colorValue = this.value;
        colorInput.value = colorValue;
        document.documentElement.style.setProperty(`--${cssVariableName}`, colorValue);
    });
}

// Quando o DOM estiver carregado, inicialize os handlers de cores
document.addEventListener("DOMContentLoaded", function() {
createColorHandler('agencia_header_color', 'agencia_header_color_input', 'agencia_header_color');
createColorHandler('cabecalho_text_color', 'cabecalho_text_color_input', 'cabecalho_text_color');
createColorHandler('agencia_footer_color', 'agencia_footer_color_input', 'agencia_footer_color');
createColorHandler('agencia_footer_text_color', 'agencia_footer_text_color_input', 'agencia_footer_text_color');
createColorHandler('agencia_background_color', 'agencia_background_color_input', 'agencia_background_color');
createColorHandler('agencia_explica_color', 'agencia_explica_color_input', 'agencia_explica_color');
createColorHandler('explicacao_text_color', 'explicacao_text_color_input', 'explicacao_text_color');
});