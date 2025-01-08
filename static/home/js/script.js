

  // Adiciona um ouvinte de evento para o input do nome completo
  document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o elemento existe antes de adicionar o event listener
    let inputElement = document.getElementById('nome_completo');
    if (inputElement) {
        inputElement.addEventListener('input', function() {
            let nome_completoInput = this.value;
            let nome_completoFormatado = formatarNome(nome_completoInput);
            this.value = nome_completoFormatado;
        });
    } else {
        console.error('Elemento com ID "nome_completo" não encontrado.');
    }
});

// Função para formatar o nome com a primeira letra maiúscula
function formatarNome(nome_completo) {
    let palavras = nome_completo.split(' ');

    let nome_completoFormatado = palavras.map(function(palavra) {
        if (palavra.trim() !== '') {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        }
        return '';
    });

    return nome_completoFormatado.join(' ');
}


    document.querySelector('form').addEventListener('submit', function(event) {
        var senha = document.getElementById('senha').value;
        var confirmarSenha = document.getElementById('confirmarSenha').value;
        var msgErro = document.getElementById('msgErro');

        if (senha !== confirmarSenha) {
            msgErro.textContent = 'As Senhas não conferem.';
            event.preventDefault(); // Impede o envio do formulário
        } else {
            msgErro.textContent = ''; // Limpa a mensagem de erro se as senhas correspondem
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        let inputEmail = document.querySelector('input[id="email"]');
        if (inputEmail) {
            inputEmail.addEventListener('input', function() {
                let emailInput = this.value;
                let emailFormatado = emailInput.toLowerCase();
                this.value = emailFormatado;
            });
        }
    });


 

    
    /* Primeira Maiscula */
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


function toggleSenhaVisibility() {
    var campoSenha = document.getElementById('senha');
    var toggleSenhaIcon = document.getElementById('iconSenha');

    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
        toggleSenhaIcon.classList.remove('fa-eye');
        toggleSenhaIcon.classList.add('fa-eye-slash');
    } else {
        campoSenha.type = 'password';
        toggleSenhaIcon.classList.remove('fa-eye-slash');
        toggleSenhaIcon.classList.add('fa-eye');
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var msgErro = document.getElementById('msgErro');

    if (senha !== confirmarSenha) {
        msgErro.textContent = 'As senhas não conferem.';
        event.preventDefault(); // Impede o envio do formulário
    } else {
        msgErro.textContent = ''; // Limpa a mensagem de erro se as senhas correspondem
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let inputEmail = document.querySelector('input[id="email"]');
    if (inputEmail) {
        inputEmail.addEventListener('input', function() {
            let emailInput = this.value;
            let emailFormatado = emailInput.toLowerCase();
            this.value = emailFormatado;
        });
    }
});


