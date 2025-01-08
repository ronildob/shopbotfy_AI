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


// MINUSCULA
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar os elementos de entrada pelos IDs usando o seletor de atributo
    let inputEmailSuporte = document.querySelector('input[id="custom_input_id[email_suporte]"]');
    let inputEmailShopify = document.querySelector('input[id="custom_input_id[email_shopify]"]');

    // Função para transformar o valor do campo em minúsculas
    function transformarMinusculas(inputElement) {
        if (inputElement) {
            inputElement.addEventListener('input', function() {
                let emailInput = this.value;
                let emailFormatado = emailInput.toLowerCase();
                this.value = emailFormatado;
            });
        }
    }

    // Verificar e transformar ambos os campos de email
    transformarMinusculas(inputEmailSuporte);
    transformarMinusculas(inputEmailShopify);
});


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


// VALIDAR EMAIL
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