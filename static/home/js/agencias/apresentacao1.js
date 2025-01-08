// Função para abrir o modal correspondente
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Eventos de clique para abrir os modais ao clicar nos containers
document.getElementById('video').addEventListener('click', function() {
    openModal('modal_backgound');
}); 
document.getElementById('initial1').addEventListener('click', function() {
    openModal('modal_backgound');
});
document.getElementById('formulario').addEventListener('click', function() {
    openModal('modal_backgound');
});

document.getElementById('header').addEventListener('click', function() {
    openModal('modal_header');
});

document.getElementById('apresentacao1').addEventListener('click', function() {
    openModal('modal_apresentacao1');
});

document.getElementById('apresentacao2').addEventListener('click', function() {
    openModal('modal_apresentacao2');
});
document.getElementById('apresentacao3').addEventListener('click', function() {
    openModal('modal_apresentacao3');
});
document.getElementById('apresentacao4').addEventListener('click', function() {
    openModal('modal_apresentacao4');
});
document.getElementById('apresentacao5').addEventListener('click', function() {
    openModal('modal_apresentacao5');
});

document.getElementById('footer').addEventListener('click', function() {
    openModal('modal_footer');
});

// Fechar o modal se clicar fora dele
window.addEventListener('click', function(event) {
    let modals = ['modal_backgound', 'modal_header', 'modal_apresentacao1', 'modal_apresentacao2', 'modal_apresentacao3', 'modal_apresentacao4', 'modal_apresentacao5', 'modal_apresentacao6'];
    modals.forEach(function(modalId) {
        let modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
