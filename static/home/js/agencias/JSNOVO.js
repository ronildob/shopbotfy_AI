// Alterar tamanho da fonte
  function changeFontSize(step, fontSizeId, targetId) {
    const fontSizeElement = document.getElementById(fontSizeId);
    const targetElement = document.getElementById(targetId);
    
    let currentSize = parseInt(fontSizeElement.value.replace('px', ''));
    currentSize += step;
    fontSizeElement.value = currentSize + 'px';
    targetElement.style.fontSize = fontSizeElement.value;
  }

  // Aplicar todas as mudanças de estilo
  function applyStyles() {
    const textElement = document.getElementById('texto_explicacao5_agencia');
    const textColor = document.getElementById('explicacao5_text_color').value;
    const bgColor = document.getElementById('apresentacao5_color').value;
    const textAlign = document.getElementById('align_explicacao5_text_color').value;
    
    textElement.style.color = textColor;
    textElement.style.backgroundColor = bgColor;
    textElement.style.textAlign = textAlign;
  }

  // Aplicar estilos ao clicar no botão
  document.getElementById('apply-bg-style').addEventListener('click', applyStyles);
