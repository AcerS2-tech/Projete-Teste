document.addEventListener("DOMContentLoaded", function() {
    // Adicionando alerta ao clicar em cada opção
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", function() {
            showAlert(option.querySelector("p").innerText + " selecionado.");
        });
    });
    const settingsIcon = document.getElementById("settings-icon");
    settingsIcon.addEventListener("click", function() {
        showAlert("Configurações selecionadas.");
    });

    // Adicionando alerta ao clicar em voltar
    const backIcon = document.getElementById("back-icon");
    backIcon.addEventListener("click", function() {
        showAlert("Voltar selecionado.");
    });

    // Função para exibir alerta sem interromper o código
    function showAlert(message) {
        alert(message);
    }

    // Restante do código...
});