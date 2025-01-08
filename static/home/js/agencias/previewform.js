document.getElementById('apply-style').addEventListener('click', function (event) {
    event.preventDefault();

    // Criação do FormData
     const formData = new FormData();
     const agenciaBgImageInput = document.getElementById('agencia_bg_image');
     const faviconAgenciaInput = document.getElementById('favicon_agencia');
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
    // Verifica se há um arquivo selecionado antes de adicioná-lo ao FormData
    if (agenciaBgImageInput.files.length > 0) {
        formData.append('agencia_bg_image', agenciaBgImageInput.files[0]);
    }
    if (faviconAgenciaInput.files.length > 0) {
        formData.append('favicon_agencia', faviconAgenciaInput.files[0]);
    }

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

    // Adiciona os demais campos ao FormData
    formData.append('agencia_bg_width', document.getElementById('agencia_bg_width').value);
    formData.append('agencia_bg_height', document.getElementById('agencia_bg_height').value);
    formData.append('texto_cabecalho_agencia', document.getElementById('texto_cabecalho_agencia').value);
    formData.append('titulo_agencia', document.getElementById('titulo_agencia').value);
    formData.append('cabecalho_font_size', document.getElementById('cabecalho_font_size').value);
    formData.append('cabecalho_text_color', document.getElementById('cabecalho_text_color').value);
    formData.append('agencia_header_color', document.getElementById('agencia_header_color').value);
    formData.append('agencia_footer_color', document.getElementById('agencia_footer_color').value);
    formData.append('agencia_footer_text_color', document.getElementById('agencia_footer_text_color').value);
    formData.append('agencia_background_color', document.getElementById('agencia_background_color').value);
    formData.append('agencia_explica_color', document.getElementById('agencia_explica_color').value);  
    formData.append('explicacao_text_color', document.getElementById('explicacao_text_color').value);
    formData.append('apresentacao_font_size', document.getElementById('apresentacao_font_size').value);
    formData.append('copy_agencia', document.getElementById('copy_agencia').value);
    formData.append('telefone_agencia', document.getElementById('telefone_agencia').value);
    formData.append('link_site_agencia', document.getElementById('link_site_agencia').value);
    formData.append('contato_agencia', document.getElementById('contato_agencia').value);
    formData.append('link_impact', document.getElementById('link_impact').value);
    formData.append('link_face_agencia', document.getElementById('link_face_agencia').value);
    formData.append('link_insta_agencia', document.getElementById('link_insta_agencia').value);
    formData.append('link_youtube_agencia', document.getElementById('link_youtube_agencia').value);


    formData.append('link_generico_agencia', document.getElementById('link_generico_agencia').value);
    formData.append('link_eletronicos_agencia', document.getElementById('link_eletronicos_agencia').value);
    formData.append('link_casa_agencia', document.getElementById('link_casa_agencia').value);
    formData.append('link_moda_agencia', document.getElementById('link_moda_agencia').value);

    formData.append('link_kids_agencia', document.getElementById('link_kids_agencia').value);
    formData.append('link_pets_agencia', document.getElementById('link_pets_agencia').value);
    formData.append('link_fitness_agencia', document.getElementById('link_fitness_agencia').value);
    formData.append('link_saude_agencia', document.getElementById('link_saude_agencia').value);
    
    formData.append('link_masculino_agencia', document.getElementById('link_masculino_agencia').value);
    formData.append('link_feminino_agencia', document.getElementById('link_feminino_agencia').value);
    
    formData.append('link_oculos_agencia', document.getElementById('link_oculos_agencia').value);
    formData.append('link_relogio_agencia', document.getElementById('link_relogio_agencia').value);
    formData.append('link_joias_agencia', document.getElementById('link_joias_agencia').value);

    // Para os checkboxes, passamos o valor booleano baseado no estado do checkbox 
    formData.append('show_texto_cabecalho_agencia', document.getElementById('show_texto_cabecalho_agencia').checked);  
    formData.append('show_link_site_agencia', document.getElementById('show_link_site_agencia').checked);
    formData.append('show_telefone_agencia', document.getElementById('show_telefone_agencia').checked);
    formData.append('show_contato_agencia', document.getElementById('show_contato_agencia').checked);
    formData.append('show_link_face_agencia', document.getElementById('show_link_face_agencia').checked);
    formData.append('show_link_insta_agencia', document.getElementById('show_link_insta_agencia').checked);
    formData.append('show_link_youtube_agencia', document.getElementById('show_link_youtube_agencia').checked);

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


    formData.append('show_pais_argentina_agencia', document.getElementById('show_pais_argentina_agencia').checked);
    formData.append('show_pais_brasil_agencia', document.getElementById('show_pais_brasil_agencia').checked);  
    formData.append('show_pais_bolivia_agencia', document.getElementById('show_pais_bolivia_agencia').checked);
    formData.append('show_pais_chile_agencia', document.getElementById('show_pais_chile_agencia').checked);
    formData.append('show_pais_colombia_agencia', document.getElementById('show_pais_colombia_agencia').checked);
    formData.append('show_pais_paraguai_agencia', document.getElementById('show_pais_paraguai_agencia').checked);
    formData.append('show_pais_peru_agencia', document.getElementById('show_pais_peru_agencia').checked);
    formData.append('show_pais_uruguai_agencia', document.getElementById('show_pais_uruguai_agencia').checked);
    formData.append('show_pais_venezuela_agencia', document.getElementById('show_pais_venezuela_agencia').checked);
    formData.append('show_pais_equador_agencia', document.getElementById('show_pais_equador_agencia').checked);
    formData.append('show_pais_espanha_agencia', document.getElementById('show_pais_espanha_agencia').checked);
    formData.append('show_pais_eua_agencia', document.getElementById('show_pais_eua_agencia').checked);
    formData.append('show_pais_portugal_agencia', document.getElementById('show_pais_portugal_agencia').checked);

    // Envio do formulário usando fetch com FormData
    fetch("{% url 'painel_agencia' %}", {
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
