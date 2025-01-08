function pegarPlano(plano) {
    function configurarDetalhesDoPlano(titulo, subtitulo, valor, fidelidade) {
        document.getElementById("title-plano").innerText = titulo;
        document.getElementById("subtitle-plano").innerHTML = subtitulo;
        document.getElementById("valor-plano").innerText = valor;
        document.getElementById("fidelidade-plano").innerText = fidelidade;
    }
    function atualizarCamposHidden(titulo, subtitulo, valor, fidelidade) {
        document.getElementById("form-plano_input_hidden").innerHTML = `<input type="hidden" name="plano_form_title" value="${titulo}">
            <input type="hidden" name="plano_form_subtitle" value="${subtitulo}">
            <input type="hidden" name="plano_form_value" value="${valor}">
            <input type="hidden" name="plano_form_fidelidade" value="${fidelidade}">
            <input type="hidden" name="plano_form" value="plan_form">
            <input type="hidden" name="type_form" value="plan_form">`;
    }
    switch (plano) {
    case 'basicoAnual':
        configurarDetalhesDoPlano('Primeiros passos', 'Quero entender como esse canal consegue me ajudar a escalar os resultados de vendas da minha empresa.', 'R$719,00/mês', 'Fidelidade de 12 meses');
        atualizarCamposHidden('Primeiros passos', 'Quero entender como esse canal consegue me ajudar a escalar os resultados de vendas da minha empresa.', 'R$719,00/mês', 'Fidelidade de 12 meses');
        break;
    case 'avancadoAnual':
        configurarDetalhesDoPlano('Iniciante', 'Entendo o potencial desse canal, mas ainda estou sofrendo para trazer bons resultados nesse canal.', 'R$1.079,00/mês', 'Fidelidade de 12 meses');
        atualizarCamposHidden('Iniciante', 'Entendo o potencial desse canal, mas ainda estou sofrendo para trazer bons resultados nesse canal.', 'R$1.079,00/mês', 'Fidelidade de 12 meses');
        break;
    case 'profissionalAnual':
        configurarDetalhesDoPlano('Quero expandir', 'Já tenho resultados e quero muito escalar esse canal. Preciso maximizar os resultados vindos do outbound!', 'R$1.379,00/mês', 'Fidelidade de 12 meses');
        atualizarCamposHidden('Quero expandir', 'Já tenho resultados e quero muito escalar esse canal. Preciso maximizar os resultados vindos do outbound!', 'R$1.379,00/mês', 'Fidelidade de 12 meses');
        break;
    case 'premiumAnual':
        configurarDetalhesDoPlano('Customizado', 'Plano personalizado de acordo com a necessidade do seu negócio', 'Fale conosco', '');
        atualizarCamposHidden('Customizado', 'Plano personalizado de acordo com a necessidade do seu negócio', 'Fale conosco', '');
        break;
    default:
    }
}
