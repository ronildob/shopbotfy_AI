function pais() {
    // Coletar os dados do formulário
     var pais = document.getElementsByName('pais')[0].value;
     
     // Construir o objeto de dados para enviar ao programa Python
     var dados = {
         pais: pais,           
     };

     // Enviar os dados para o backend
     fetch("{% url 'pais' %}", {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'X-CSRFToken': getCookie('csrftoken')
         },
         body: JSON.stringify(dados)
     })
     .then(response => {
 if (response.ok) {
     console.log('pais executado com sucesso.');
     
     // Exibir mensagem de sucesso para o usuário
     document.getElementById("confirmationMessage").style.display = "block";
    
 } else {
     console.error('Erro ao executar nicho.');
    
 }
})
 }