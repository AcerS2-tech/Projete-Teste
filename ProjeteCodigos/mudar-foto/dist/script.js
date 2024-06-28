document.addEventListener("DOMContentLoaded", function() {
    // Configurações e Voltar
    document.getElementById('settings-icon').addEventListener('click', function() {
        alert('Configurações acionadas');
    });

    document.getElementById('back-icon').addEventListener('click', function() {
        alert('Voltar acionado');
    });

    // Formulário de Mudança de Foto
    const form = document.getElementById('mudarFotoForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fileInput = document.getElementById('profilePicture');
        const file = fileInput.files[0];

        if (file) {
            alert('Foto alterada com sucesso!');
            // Aqui você pode adicionar o código para processar o upload da foto, por exemplo, enviá-la para um servidor.
        } else {
            alert('Por favor, selecione uma foto.');
        }
    });
});