document.addEventListener("DOMContentLoaded", function() {
    // Configurações e Voltar
    document.getElementById('settings-icon').addEventListener('click', function() {
        alert('Configurações acionadas');
    });

    document.getElementById('back-icon').addEventListener('click', function() {
        alert('Voltar acionado');
    });

    // Formulário de Vinculação
    const form = document.getElementById('vinculacaoForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Endereço vinculado com sucesso!');
        // Aqui você pode adicionar o código para processar o formulário, por exemplo, enviá-lo para um servidor.
    });
});