function validarLink() {
    const linkStore = document.getElementById('link_store').value;
    const expectedStart = 'https://admin.shopify.com/store/';
    if (!linkStore.startsWith(expectedStart)) {
        alert('Ops! o URL deve começar com "https://admin.shopify.com/store/".');
        return false;
    }
    return true;
    
    // Coletar os dados do formulário
    var link_store = document.getElementsByName('link_store')[0].value;
        
        // Construir o objeto de dados para enviar ao programa Python
        var dados = {
            link_store: link_store,           
        };

        // Enviar os dados para o backend
        fetch("{% url 'indice' %}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
    if (response.ok) {
        console.log('executado com sucesso.');
        
        // Exibir mensagem de sucesso para o usuário
        document.getElementById("confirmationMessage").style.display = "block";
    
    } else {
        console.error('Erro ao executar.');
    
    }
})
    }