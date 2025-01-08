function acessos() {
    // Validar se todos os campos obrigatórios estão preenchidos antes de continuar
    if (!validarCampos()) {
        // Exibir mensagem de erro ou fazer outra ação, se necessário
        console.error('Por favor, preencha todos os campos obrigatórios.');
        return; // Interrompe o processo se os campos obrigatórios não estiverem preenchidos
    }

    // Se todos os campos obrigatórios estiverem preenchidos, mostrar o spinner e enviar os dados
    mostrarSpinner();

    // Coletar os dados do formulário       
    var token_senha = document.getElementsByName('token_senha')[0].value;
    var chave_de_api = document.getElementsByName('chave_de_api')[0].value;
    var chave_secreta = document.getElementsByName('chave_secreta')[0].value;

    // Construir o objeto de dados para enviar ao programa Python
    var dados = {            
        PRIVATE_APP_PASSWORD: token_senha,
        API_KEY: chave_de_api,
        API_SECRET: chave_secreta,
    };

    // Enviar os dados para o backend
    fetch("{% url 'acessos' %}", {
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
            ocultarSpinner();
            // Exibir mensagem de sucesso para o usuário
            document.getElementById("confirmationMessage").style.display = "block";
        } else {
            console.error('Erro ao executar a ver_conta.');
           
          
        }
    });
}

function validarCampos() {
    // Coletar os valores dos campos do formulário
    var token_senha = document.getElementsByName('token_senha')[0].value;
    var chave_de_api = document.getElementsByName('chave_de_api')[0].value;
    var chave_secreta = document.getElementsByName('chave_secreta')[0].value;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (token_senha && chave_de_api && chave_secreta) {
        return true; // Todos os campos obrigatórios estão preenchidos
    } else {
        return false; // Um ou mais campos obrigatórios estão vazios
    }
}