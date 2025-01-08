// Função para validar todos os campos
function validarCampos() {
    var nome = document.getElementsByName('nome')[0].value;
    var email_suporte = document.getElementsByName('email_suporte')[0].value;
    var empresa = document.getElementsByName('empresa')[0].value;
    var email_shopify = document.getElementsByName('email_shopify')[0].value;
    var senha = document.getElementsByName('senha')[0].value;
    var telefone = document.getElementsByName('telefone')[0].value;
    var business_hours = document.getElementsByName('business_hours')[0].value;
    var pais = document.getElementsByName('pais')[0].value;
    var corSelecionada = document.getElementsByName('cor')[0].value;
    var linkStore = document.getElementsByName('link_store')[0].value;
    var agencia = document.getElementsByName('agencia')[0].value;

    return (nome && email_suporte && empresa && email_shopify && senha && telefone && business_hours && pais && corSelecionada && validarLink());
}

function validarLink() {
    const linkStore = document.getElementById('link_store').value;
    const expectedStart = 'https://admin.shopify.com/store/';
    if (!linkStore.startsWith(expectedStart)) {
        alert('Ops! o URL deve começar com "https://admin.shopify.com/store/".');
        return false;
    }
    return true;
}

function enviarFormulario(event) {
    event.preventDefault();

    if (!validarCampos()) {
        console.error('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var formData = {
        nome: document.getElementsByName('nome')[0].value,
        email_suporte: document.getElementsByName('email_suporte')[0].value,
        empresa: document.getElementsByName('empresa')[0].value,
        email_shopify: document.getElementsByName('email_shopify')[0].value,
        senha: document.getElementsByName('senha')[0].value,
        telefone: document.getElementsByName('telefone')[0].value,
        business_hours: document.getElementsByName('business_hours')[0].value,
        pais: document.getElementsByName('pais')[0].value,
        cor: document.getElementsByName('cor')[0].value,
        link_store: document.getElementsByName('link_store')[0].value,
        agencia: document.getElementsByName('agencia')[0].value
    };

    console.log("Dados enviados:", formData);

    fetch("{% url 'formulario_gringo' %}", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
        },
    })
    .then(response => response.json())
    .then(data => {
        var confirmationMessage = document.getElementById("confirmationMessage");
        if (data.status === 'success') {
            console.log('Formulário enviado com sucesso!');
            confirmationMessage.innerText = "Formulário enviado com sucesso!";
            confirmationMessage.style.color = "green";
            confirmationMessage.style.display = "block";
            confirmationMessage.style.padding = "10px";
            confirmationMessage.style.border = "2px solid green";
            confirmationMessage.style.backgroundColor = "#e6ffe6";
            confirmationMessage.style.borderRadius = "5px";
            // Recarregar a página inicial após alguns segundos
            setTimeout(function() {
                window.location.href = "{% url 'shop_api:pagefinal' %}";
            }, 2000);
        } else {
            console.error('Erro ao enviar formulário:', data.message);
            confirmationMessage.innerText = "Erro ao enviar formulário: " + data.message;
            confirmationMessage.style.color = "red";
            confirmationMessage.style.display = "block";
            confirmationMessage.style.padding = "10px";
            confirmationMessage.style.border = "2px solid red";
            confirmationMessage.style.backgroundColor = "#ffe6e6";
            confirmationMessage.style.borderRadius = "5px";
        }
    })
    .catch(error => {
        var confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.innerText = "Erro ao processar a requisição: " + error.message;
        confirmationMessage.style.color = "red";
        confirmationMessage.style.display = "block";
        confirmationMessage.style.padding = "10px";
        confirmationMessage.style.border = "2px solid red";
        confirmationMessage.style.backgroundColor = "#ffe6e6";
        confirmationMessage.style.borderRadius = "5px";
        console.error('Erro ao processar requisição:', error);
    });
}

document.getElementById("custom-form-id").addEventListener("submit", enviarFormulario);
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
}