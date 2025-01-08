 // Função para buscar endereço por CEP
 async function buscarEnderecoPorCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado. Por favor, verifique e tente novamente.');
            limparCamposEndereco();
        } else {
            preencherCamposEndereco(data);
        }
    } catch (error) {
        console.error('Erro ao buscar endereço:', error);
    }
}

// Função para preencher os campos de endereço com os dados obtidos do CEP
function preencherCamposEndereco(data) {
    document.getElementById('custom_input[rua]').value = data.logradouro || '';
    document.getElementById('custom_input[bairro]').value = data.bairro || '';
    document.getElementById('custom_input[cidade]').value = data.localidade || '';
    document.getElementById('estado').value = data.uf || '';
}

// Função para limpar os campos de endereço
function limparCamposEndereco() {
    document.getElementById('custom_input[rua]').value = '';
    document.getElementById('custom_input[bairro]').value = '';
    document.getElementById('custom_input[cidade]').value = '';
    document.getElementById('estado').value = '';
}

// Evento para acionar a busca do endereço ao inserir o CEP
document.getElementById('custom_input[cep]').addEventListener('change', (event) => {
    const cep = event.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
        buscarEnderecoPorCEP(cep);
    } else {
        alert('Formato de CEP inválido. O CEP deve conter 8 dígitos.');
        limparCamposEndereco();
    }
});