function tema_base() {
    // Coletar os dados do formulário
     var tema_base = document.getElementsByName('tema_base')[0].value;
     
     // Construir o objeto de dados para enviar ao programa Python
     var dados = {
        tema_base: tema_base,           
     };

     // Enviar os dados para o backend
     fetch("{% url 'tema_padrao' %}", {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'X-CSRFToken': getCookie('csrftoken')
         },
         body: JSON.stringify(dados)
     })
     .then(response => {
 if (response.ok) {
     console.log('tema_base executado com sucesso.');
     
     // Exibir mensagem de sucesso para o usuário
     document.getElementById("confirmationMessage").style.display = "block";
     // Redirecionar para a página 2
     window.location.href = "{% url 'acessos' %}";
 } else {
     console.error('Erro ao executar tema_base.');
     // Redirecionar para a página de erro
     window.location.href = "{% url 'pagina_aerro' %}";
 }
})
 }