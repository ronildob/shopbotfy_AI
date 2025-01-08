function copyUrl(event, url) {
    event.preventDefault(); // Previne o comportamento padrão do botão

    // Obtém a URL base desejada
    var baseUrl = "http://www.shopbotfy.com"; // Ajuste essa URL conforme necessário
    var fullUrl = baseUrl + url; // Concatena a URL base com o template_url
    
    // Cria um elemento temporário para a cópia
    var tempInput = document.createElement("input");
    tempInput.value = fullUrl; // Define o valor como a URL completa
    document.body.appendChild(tempInput); // Adiciona o elemento ao DOM
    tempInput.select(); // Seleciona o texto
    document.execCommand("copy"); // Copia para a área de transferência
    document.body.removeChild(tempInput); // Remove o elemento temporário

    alert("URL copiada: " + fullUrl); // Opcional: notifica o usuário
}