let isModalOpen = false;

// Função para alternar a abertura e fechamento do modal
function toggleModal() {
  const modal = document.getElementById('whatsappModal');
  const whatsappIcon = document.querySelector('.whatsapp-icon');

  if (isModalOpen) {
    // Fechar o modal e restaurar a rotação da imagem
    modal.style.display = 'none';
    whatsappIcon.classList.remove('rotate');
    isModalOpen = false;
  } else {
    // Abrir o modal e girar a imagem
    modal.style.display = 'block';
    whatsappIcon.classList.add('rotate');
    isModalOpen = true;
  }
}

// Enviar Mensagem para o WhatsApp
function sendMessage(event) {
  event.preventDefault();
  var message = document.getElementById('whatsappMessage').value;
  var whatsappNumber = '5513996327826'; // Substitua pelo número do WhatsApp da empresa, com o código do país
  var whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toggleModal(); // Fecha o modal após o envio e restaura a imagem
}