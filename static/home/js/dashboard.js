function mostrarGrafico(id) {
    document.querySelectorAll('.grafico').forEach(div => div.style.display = 'none');
    document.getElementById('grafico-' + id).style.display = 'block';
    document.querySelector('.botao-voltar').style.display = (id === 'todos') ? 'none' : 'inline-block';
}

// Exibir o gráfico com todos os países por padrão
mostrarGrafico('todos');