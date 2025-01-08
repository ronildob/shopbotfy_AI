
    function syncColorInputs(element) {
        const syncId = element.getAttribute('data-sync');
        const colorValue = element.value;
        const inputs = document.querySelectorAll(`input[data-sync="${syncId}"]`);
        
        inputs.forEach(input => {
            input.value = colorValue;
        });

        document.documentElement.style.setProperty(`--${syncId}`, colorValue);
    }

    // Inicializa a sincronização após o DOM estar totalmente carregado
    document.addEventListener("DOMContentLoaded", function() {
        const colorInputs = document.querySelectorAll('input[data-sync]');
        
        colorInputs.forEach(input => {
            input.addEventListener('input', function() {
                syncColorInputs(this);
            });
        });
    });

