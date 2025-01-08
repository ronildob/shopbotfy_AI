document.getElementById('apply-nicho').addEventListener('click', function (event) {
    event.preventDefault();


     // Criação do FormData
     const formData = new FormData();
     const genericoAgenciaInput = document.getElementById('generico_agencia');
     const eletronicosAgenciaInput = document.getElementById('eletronicos_agencia');
     const casaAgenciaInput = document.getElementById('casa_agencia');
     const modaAgenciaInput = document.getElementById('moda_agencia');
     const kidsAgenciaInput = document.getElementById('kids_agencia');
     const petsAgenciaInput = document.getElementById('pets_agencia');
     const fitnessAgenciaInput = document.getElementById('fitness_agencia');
     const saudeAgenciaInput = document.getElementById('saude_agencia');
     const masculinoAgenciaInput = document.getElementById('masculino_agencia');
     const femininoAgenciaInput = document.getElementById('feminino_agencia');
     const oculosAgenciaInput = document.getElementById('oculos_agencia');
     const relogioAgenciaInput = document.getElementById('relogio_agencia');
     const joiasAgenciaInput = document.getElementById('joias_agencia');
 
    if (genericoAgenciaInput.files.length > 0) {
        formData.append('generico_agencia', genericoAgenciaInput.files[0]);
    }
    if (eletronicosAgenciaInput.files.length > 0) {
        formData.append('eletronicos_agencia', eletronicosAgenciaInput.files[0]);
    }
    if (casaAgenciaInput.files.length > 0) {
        formData.append('casa_agencia', casaAgenciaInput.files[0]);
    }
    if (modaAgenciaInput.files.length > 0) {
        formData.append('moda_agencia', modaAgenciaInput.files[0]);
    }
    if (kidsAgenciaInput.files.length > 0) {
        formData.append('kids_agencia', kidsAgenciaInput.files[0]);
    }
    if (petsAgenciaInput.files.length > 0) {
        formData.append('pets_agencia', petsAgenciaInput.files[0]);
    }
    if (fitnessAgenciaInput.files.length > 0) {
        formData.append('fitness_agencia', fitnessAgenciaInput.files[0]);
    }
    if (saudeAgenciaInput.files.length > 0) {
        formData.append('saude_agencia', saudeAgenciaInput.files[0]);
    }
    if (masculinoAgenciaInput.files.length > 0) {
        formData.append('masculino_agencia', masculinoAgenciaInput.files[0]);
    }
    if (femininoAgenciaInput.files.length > 0) {
        formData.append('feminino_agencia', femininoAgenciaInput.files[0]);
    }
    if (oculosAgenciaInput.files.length > 0) {
        formData.append('oculos_agencia', oculosAgenciaInput.files[0]);
    }
    if (relogioAgenciaInput.files.length > 0) {
        formData.append('relogio_agencia', relogioAgenciaInput.files[0]);
    }
    if (joiasAgenciaInput.files.length > 0) {
        formData.append('joias_agencia', joiasAgenciaInput.files[0]);
    }



    // Adiciona os links ao FormData
    formData.append('link_generico', document.getElementById('link_generico').value);
    formData.append('link_eletronicos', document.getElementById('link_eletronicos').value);
    formData.append('link_casa', document.getElementById('link_casa').value);
    formData.append('link_moda', document.getElementById('link_moda').value);

    formData.append('link_kids', document.getElementById('link_kids').value);
    formData.append('link_pets', document.getElementById('link_pets').value);
    formData.append('link_fitness', document.getElementById('link_fitness').value);
    formData.append('link_saude', document.getElementById('link_saude').value);
    
    formData.append('link_masculino', document.getElementById('link_masculino').value);
    formData.append('link_feminino', document.getElementById('link_feminino').value);
    formData.append('link_oculos', document.getElementById('link_oculos').value);
    formData.append('link_relogio', document.getElementById('link_relogio').value);
    formData.append('link_joias', document.getElementById('link_joias').value);


    // Para os checkboxes, passamos o valor booleano baseado no estado do checkbox 
    formData.append('show_nicho_generico_agencia', document.getElementById('show_nicho_generico_agencia').checked);
    formData.append('show_nicho_eletronicos_agencia', document.getElementById('show_nicho_eletronicos_agencia').checked);  
    formData.append('show_nicho_casa_agencia', document.getElementById('show_nicho_casa_agencia').checked);
    formData.append('show_nicho_moda_agencia', document.getElementById('show_nicho_moda_agencia').checked);
    formData.append('show_nicho_kids_agencia', document.getElementById('show_nicho_kids_agencia').checked);
    formData.append('show_nicho_pets_agencia', document.getElementById('show_nicho_pets_agencia').checked);
    formData.append('show_nicho_fitness_agencia', document.getElementById('show_nicho_fitness_agencia').checked);
    formData.append('show_nicho_saude_agencia', document.getElementById('show_nicho_saude_agencia').checked);
    formData.append('show_nicho_masculino_agencia', document.getElementById('show_nicho_masculino_agencia').checked);
    formData.append('show_nicho_feminino_agencia', document.getElementById('show_nicho_feminino_agencia').checked);
    formData.append('show_nicho_oculos_agencia', document.getElementById('show_nicho_oculos_agencia').checked);
    formData.append('show_nicho_relogio_agencia', document.getElementById('show_nicho_relogio_agencia').checked);
    formData.append('show_nicho_joias_agencia', document.getElementById('show_nicho_joias_agencia').checked);


  
   // Envio do formulário usando fetch com FormData
   fetch("{% url 'painel_nicho' %}", {
    method: 'POST',
    headers: {
        'X-CSRFToken': '{{ csrf_token }}' // Inclui o token CSRF
    },
    body: formData, // Usa FormData para enviar o arquivo e dados
})
.then(response => response.json())
.then(data => {
    if (data.error) {
        alert('Erro: ' + data.error);
    } else {
        console.log('Dados enviados com sucesso:', data);
        alert(data.message || 'Atualização feita com sucesso!');
    }
})
.catch(error => console.error('Erro:', error));
});
