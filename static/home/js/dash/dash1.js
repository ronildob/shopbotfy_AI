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


function renderiza_finalizado(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('finalizado').getContext('2d');
        var cores_finalizado = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_finalizado[0],
                    borderColor: cores_finalizado[1],
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


    })
}


function renderiza_reservado(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('reservado').getContext('2d');
        var cores_reservado = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_reservado[0],
                    borderColor: cores_reservado[1],
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


    })
}


function renderiza_respondido(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('respondido').getContext('2d');
        var cores_respondido = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_respondido[0],
                    borderColor: cores_respondido[1],
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


    })
}


function renderiza_pendencia(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('pendencia').getContext('2d');
        var cores_pendencia = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_pendencia[0],
                    borderColor: cores_pendencia[1],
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


    })
}


function renderiza_produzindo(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('produzindo').getContext('2d');
        var cores_produzindo = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_produzindo[0],
                    borderColor: cores_produzindo[1],
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


    })
}
   

function renderiza_erro(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        const ctx = document.getElementById('erro').getContext('2d');
        var cores_erro = gera_cor(qtd=12)
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: cores_erro[0],
                    borderColor: cores_erro[1],
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


    })
}
