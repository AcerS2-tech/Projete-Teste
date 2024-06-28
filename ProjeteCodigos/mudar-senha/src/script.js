document.addEventListener("DOMContentLoaded", function() {
    // Configurações e Voltar
    document.getElementById('settings-icon').addEventListener('click', function() {
        alert('Configurações acionadas');
    });

    document.getElementById('back-icon').addEventListener('click', function() {
        alert('Voltar acionado');
    });

    // Formulário de Mudança de Senha
    const form = document.getElementById('mudarSenhaForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert('A nova senha e a confirmação de senha não coincidem.');
            return;
        }

        alert('Senha alterada com sucesso!');
        // Aqui você pode adicionar o código para processar a mudança de senha, por exemplo, enviá-la para um servidor.
    });
});
