function criaracessos() {
    // Validar se todos os campos obrigatórios estão preenchidos antes de continuar
    if (!validarCampos()) {
        // Exibir mensagem de erro ou fazer outra ação, se necessário
        console.error('Por favor, preencha todos os campos obrigatórios.');
        return; // Interrompe o processo se os campos obrigatórios não estiverem preenchidos
    }

    // Coletar os dados do formulário       
    var agencia = document.getElementsByName('agencia')[0].value;


    // Construir o objeto de dados para enviar ao programa Python
    var dados = {            
        agencia: agencia,
    };

    // Enviar os dados para o backend
    fetch("{% url 'criaracessosadmin' %}", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            console.log('ver_conta executado com sucesso.');
            // Ocultar spinner após o envio bem-sucedido
            document.getElementById("confirmationMessage").style.display = "block";
        } else {
            console.error('Erro ao executar a ver_conta.');
           
          
        }
    });
}

