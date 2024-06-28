document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Temperatura (°C)',
                data: [15, 14, 13, 13, 14, 16, 18, 20, 22, 24, 26, 28, 29, 30, 29, 28, 26, 24, 22, 20, 18, 17, 16, 15], // Exemplo de dados de temperatura por hora
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Hora'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    },
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    // Funções para os ícones de configuração e voltar
    const settingsIcon = document.getElementById("settings-icon");
    settingsIcon.addEventListener("click", function() {
        showAlert("Configurações selecionadas.");
    });

    const backIcon = document.getElementById("back-icon");
    backIcon.addEventListener("click", function() {
        showAlert("Voltar selecionado.");
    });

    function showAlert(message) {
        alert(message);
    }
});
