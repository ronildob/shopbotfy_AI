function mostrarSpinner() {
    document.getElementById('spinner-overlay').style.display = 'flex';
}

function ocultarSpinner() {
    document.getElementById('spinner-overlay').style.display = 'none';
}

function validarCampos() {
    // Coletar os valores dos campos do formulário
    var email_suporte = document.getElementsByName('email_suporte')[0].value;
    var empresa = document.getElementsByName('empresa')[0].value;
    var telefone = document.getElementsByName('telefone')[0].value;
    var business_hours = document.getElementsByName('business_hours')[0].value;
    //var rua = document.getElementsByName('rua')[0].value;
    //var bairro = document.getElementsByName('bairro')[0].value;
    //var cidade = document.getElementsByName('cidade')[0].value;
    //var estado = document.getElementsByName('estado')[0].value;
    //var cep = document.getElementsByName('cep')[0].value;
    

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (email_suporte && empresa && telefone && business_hours) {
        return true; // Todos os campos obrigatórios estão preenchidos
    } else {
        return false; // Um ou mais campos obrigatórios estão vazios
    }
}

function produzir() {
    // Validar se todos os campos obrigatórios estão preenchidos antes de continuar
    if (!validarCampos()) {
        // Exibir mensagem de erro ou fazer outra ação, se necessário
        console.error('Por favor, preencha todos os campos obrigatórios.');
        return; // Interrompe o processo se os campos obrigatórios não estiverem preenchidos
    }

    // Se todos os campos obrigatórios estiverem preenchidos, mostrar o spinner e enviar os dados
    mostrarSpinner();

    // Construir o objeto de dados para enviar ao programa Python
    var dados = {        
        emailsuporte: email_suporte,
        empresa: empresa,
        telefone: telefone,
        atendimento: business_hours
        //rua: rua,
        //bairro: bairro,
        //cidade: cidade,
        //estado: estado,
        //cep: cep,
        
    };

    // Enviar os dados para o backend
    fetch("{% url 'produzir' %}", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            console.log('Nova executado com sucesso.');
            // Exibir mensagem de sucesso para o usuário
            document.getElementById("confirmationMessage").style.display = "block";
        } else {
            console.error('Erro ao executar produzir:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao executar produzir:', error);
    })
    .finally(() => {
        // Ocultar spinner após o envio bem-sucedido ou falha
        ocultarSpinner();
        // Redirecionar para a página 6 após finalizar o processamento
        window.location.href = "{% url 'lojapronta' %}";
    });
}



//######################//

//MAIUSCULA E MINUSCULA //

document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o elemento de entrada pelo ID usando o seletor de atributo
    let inputNome = document.querySelector('input[id="custom_input[nome]"]');

    // Verificar se o elemento foi encontrado
    if (inputNome) {
        // Adicionar um ouvinte de evento para o evento 'input'
        inputNome.addEventListener('input', function() {
            // Obter o valor do campo de entrada
            let nomeInput = this.value;

            // Chamar a função para formatar o nome
            let nomeFormatado = formatarNome(nomeInput);

            // Atualizar o valor do campo de entrada com o nome formatado
            this.value = nomeFormatado;
        });
    }

    function formatarNome(nome) {
        // Dividir o nome em palavras usando espaço como delimitador
        let palavras = nome.split(' ');

        // Formatar cada palavra (primeira letra maiúscula, restante minúscula)
        let nomeFormatado = palavras.map(function(palavra) {
            if (palavra.trim() !== '') { // Verifica se a palavra não está vazia
                return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
            }
            return ''; // Retorna uma string vazia para espaços adicionais
        });

        // Juntar as palavras formatadas de volta em um único nome, mantendo os espaços originais
        return nomeFormatado.join(' ');
    }
});


//######################//
// Primeira Maiscula //

document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar eventos de formatação
    function adicionarEventoFormatacao(idCampo) {
        let campo = document.querySelector(`input[id="${idCampo}"]`);
        if (campo) {
            campo.addEventListener('input', function() {
                let valorInput = this.value;
                let valorFormatado = formatarTexto(valorInput);
                this.value = valorFormatado;
            });
        }
    }

    // Função para formatar o texto (primeira letra maiúscula, restante minúscula)
    function formatarTexto(texto) {
        let palavras = texto.split(' ');
        let textoFormatado = palavras.map(function(palavra) {
            if (palavra.trim() !== '') {
                return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
            }
            return '';
        });
        return textoFormatado.join(' ');
    }

    // Adicionar eventos de formatação para os campos de rua e bairro
    adicionarEventoFormatacao('custom_input[rua]');
    adicionarEventoFormatacao('custom_input[bairro]');
});


//######################//

// MINUSCULA //
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o elemento de entrada pelo ID usando o seletor de atributo
    let inputEmail = document.querySelector('input[id="custom_input_id[email_suporte]"]');

    // Verificar se o elemento foi encontrado
    if (inputEmail) {
        // Adicionar um ouvinte de evento para o evento 'input'
        inputEmail.addEventListener('input', function() {
            // Obter o valor do campo de entrada
            let emailInput = this.value;

            // Transformar todas as letras em minúsculas
            let emailFormatado = emailInput.toLowerCase();

            // Atualizar o valor do campo de entrada com o e-mail formatado
            this.value = emailFormatado;
        });
    }
});

//######################//

// TELEFONE //
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o elemento de entrada pelo ID usando o seletor de atributo
    let inputTelefone = document.querySelector('input[id="custom_input[telefone]"]');

    // Verificar se o elemento foi encontrado
    if (inputTelefone) {
        // Adicionar um ouvinte de evento para o evento 'input'
        inputTelefone.addEventListener('input', function(event) {
            // Obter o valor atual do campo de entrada
            let telefoneInput = event.target.value;

            // Remover todos os caracteres não numéricos (deixando apenas os números)
            let telefoneNumerico = telefoneInput.replace(/\D/g, '');

            // Atualizar o valor do campo de entrada com o número formatado apenas se houver alterações
            if (telefoneInput !== telefoneNumerico) {
                event.target.value = telefoneNumerico;
            }

            // Verificar se o número de telefone possui 10 ou 11 dígitos
            if (telefoneNumerico.length > 11) {
                // Limitar o número de dígitos para no máximo 11 (para telefones com DDD e código de país)
                event.target.value = telefoneNumerico.slice(0, 11);
            }
        });
    }
});

//######################//

// VALIDAR EMAIL
 //
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o elemento de entrada pelo ID usando o seletor de atributo
    let inputEmail = document.querySelector('input[id="custom_input_id[email_suporte]"]');

    // Verificar se o elemento foi encontrado
    if (inputEmail) {
        // Adicionar um ouvinte de evento para o evento 'input'
        inputEmail.addEventListener('input', function(event) {
            // Obter o valor atual do campo de entrada
            let emailInput = event.target.value;

            // Expressão regular para validar o formato do e-mail
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Verificar se o valor inserido corresponde ao padrão de e-mail
            if (emailPattern.test(emailInput)) {
                // Se for um e-mail válido, remover a marcação de erro (se houver)
                inputEmail.setCustomValidity('');
            } else {
                // Se não for um e-mail válido, definir uma mensagem de erro personalizada
                inputEmail.setCustomValidity('Please enter a valid email address. Ex: support@gmail.com');
            }
        });

        // Adicionar um ouvinte de evento para redefinir a validação quando o campo é corrigido
        inputEmail.addEventListener('change', function(event) {
            event.target.reportValidity(); // Força a exibição da mensagem de erro personalizada, se houver
        });
    }
});