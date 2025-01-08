function loadPage(event, url) {
    event.preventDefault(); // Previne o comportamento padrão do link
    var iframe = document.getElementById("contentFrame");
    iframe.src = url; // Define o novo src para o iframe
}