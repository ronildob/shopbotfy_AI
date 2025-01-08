function atualizarNumeros() {
    const spansNumeros = document.querySelectorAll('.span-title-box-dados');
    const metas = [23, 4.5, 17, 13];
    spansNumeros.forEach( (span, index) => {
        const meta = metas[index];
        let numeroAtual = 1;
        let incremento = 1;
        const intervalo = 50;
        if (meta === 4.5) {
            incremento = (meta - numeroAtual) / 45;
        }
        const interval = setInterval( () => {
            numeroAtual += incremento;
            if (numeroAtual >= meta) {
                numeroAtual = meta;
                clearInterval(interval);
            }
            span.textContent = `${Math.round(numeroAtual * 10) / 10}mi`;
        }
        , intervalo);
    }
    );
}
window.onload = function() {
    atualizarNumeros();
}
;
