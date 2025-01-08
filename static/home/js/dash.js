function mostrarGrafico(id) {
    // Oculta todos os gráficos
    document.querySelectorAll('.grafico').forEach(div => div.style.display = 'none');
    
    // Exibe o gráfico selecionado
    document.getElementById('grafico-' + id).style.display = 'block';
    
    // Ajusta a visibilidade do botão de voltar
    document.querySelector('.botao-voltar').style.display = (id === 'total') ? 'none' : 'inline-block';
}

// Exibir o gráfico total geral por padrão
mostrarGrafico('total');