function gera_cor(qtd=1){
    var bg_color = []
    var border_color = []
    for(let i = 0; i < qtd; i++){
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        bg_color.push(`rgba(${r}, ${g}, ${b}, ${0.2})`)
        border_color.push(`rgba(${r}, ${g}, ${b}, ${1})`)
    }
    
    return [bg_color, border_color];
    
}

function total_adquirido(url){  
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('total').innerHTML = data.total
    })

}


function renderiza_grafico(url, canvasId, chartType) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById(canvasId).getContext('2d');
            var cores = gera_cor(12); // Gerar cores para os gráficos

            const myChart = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: data.labels,
                        data: data.data,
                        backgroundColor: cores[0],
                        borderColor: cores[1],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
}
