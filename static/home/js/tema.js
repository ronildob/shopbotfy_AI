function tema() {
    // Coletar o valor da cor selecionada
    var corSelecionada = document.getElementsByName('cor')[0].value;

    // Verificar se a cor foi selecionada
    if (!corSelecionada) {
        console.error('Por favor, selecione uma cor antes de continuar.');
        return; // Interrompe o processo se a cor não foi selecionada
    }

    // Mostrar o spinner antes de enviar os dados
    mostrarSpinner();

    // Construir o objeto de dados para enviar ao backend
    var dados = {
        cor: corSelecionada,
    };

    // Enviar os dados para o backend usando fetch
    fetch("{% url 'tema' %}", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            console.log('Tema executado com sucesso.');
            // Ocultar o spinner após o envio bem-sucedido
            ocultarSpinner();
            // Exibir mensagem de confirmação para o usuário
            document.getElementById("confirmationMessage").style.display = "block";
            // Redirecionar para a página 2 após finalizar o processamento
        } else {
            console.error('Erro ao executar tema.');
            // Redirecionar para a página de erro em caso de falha
        }
    })
    .catch(error => {
        console.error('Erro ao executar tema:', error);
        // Redirecionar para a página de erro em caso de erro
    });
}