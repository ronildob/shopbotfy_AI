

    document.addEventListener('DOMContentLoaded', function () {
        // Inicializar carrossel horizontal
        var horizontalSwiper = new Swiper('.swiper-container-horizontal', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                enabled: true,
            },
            effect: 'slide',
            coverflowEffect:
                {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        });
        var swiperContainer = document.querySelector('.swiper-container-horizontal');

            // Pausa o autoplay quando o mouse estiver sobre o carrossel
            swiperContainer.addEventListener('mouseover', function() {
                horizontalSwiper.autoplay.stop();
            });

            // Retoma o autoplay quando o mouse é retirado do carrossel
            swiperContainer.addEventListener('mouseout', function() {
                horizontalSwiper.autoplay.start();
            });

            // Inicializar carrossel vertical
        var verticalSwiper = new Swiper('.swiper-container-vertical', {
            direction: 'vertical', // Direção vertical: rolar de cima para baixo
            slidesPerView: 3,
            spaceBetween: 5,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                enabled: true,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper-button-next', // Botão "Próximo"
                prevEl: '.swiper-button-prev', // Botão "Anterior"
            },
        });
    

        // Ajuste o posicionamento dos botões de navegação ao inicializar
        verticalSwiper.on('init', function() {
            var nextButton = document.querySelector('.swiper-button-next');
            var prevButton = document.querySelector('.swiper-button-prev');

            // Posicionar o botão "Próximo" abaixo dos slides
            nextButton.style.bottom = '20px'; // Ajustar distância do fundo

            // Posicionar o botão "Anterior" acima dos slides
            prevButton.style.top = '20px'; // Ajustar distância do topo
        });
    });
    
    function expandirImagem() {
        var imagem = document.getElementById('imagemExpansivel');
        // Obtém as dimensões atuais da imagem
                var alturaAtual = imagem.clientHeight;

        // Define a nova largura e altura (dobrando as dimensões atuais)        
        var novaAltura = alturaAtual * 2;

        // Aplica as novas dimensões à imagem        
        imagem.style.height = novaAltura + 'px';
    }

