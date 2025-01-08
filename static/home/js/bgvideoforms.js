document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");

    // Quando o vídeo começar a ser carregado, esconder a imagem de fundo
    video.oncanplay = function() {
        document.querySelector('.main-with-video-bg').style.backgroundImage = 'none';
        video.play();
    };
});