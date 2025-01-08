// Função para abrir o modal com uma mensagem
function mostrarModal(mensagem) {
    var modal = document.getElementById('myModal');
    var mensagemElement = document.getElementById('mensagem');

    // Define a mensagem no elemento do modal
    mensagemElement.textContent = mensagem;

    // Exibe o modal
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Oculta o modal
}

// Exemplo de uso: Chame mostrarModal() com uma mensagem
// Por exemplo, mostrar uma mensagem de sucesso
mostrarModal('Operação realizada com sucesso!');
