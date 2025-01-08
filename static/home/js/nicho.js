function nicho() {
    // Coletar os dados do formulário
     var nicho = document.getElementsByName('nicho')[0].value;
     
     // Construir o objeto de dados para enviar ao programa Python
     var dados = {
         estilo: nicho,           
     };

     // Enviar os dados para o backend
     fetch("{% url 'nicho' %}", {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'X-CSRFToken': getCookie('csrftoken')
         },
         body: JSON.stringify(dados)
     })
     .then(response => {
 if (response.ok) {
     console.log('nicho executado com sucesso.');
     
     // Exibir mensagem de sucesso para o usuário
     document.getElementById("confirmationMessage").style.display = "block";
     // Redirecionar para a página 2
     window.location.href = "{% url 'tema_padrao' %}";
 } else {
     console.error('Erro ao executar nicho.');
     // Redirecionar para a página de erro
     window.location.href = "{% url 'pagina_aerro' %}";
 }
})
 }