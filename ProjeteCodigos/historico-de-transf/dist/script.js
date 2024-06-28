document.addEventListener("DOMContentLoaded", function() {
    // Configurações e Voltar
    document.getElementById('settings-icon').addEventListener('click', function() {
        alert('Configurações selecionadas');
    });

    document.getElementById('back-icon').addEventListener('click', function() {
        alert('Voltar selecionado');
    });

    // Gráfico de Histórico de Transferências
    const ctx2 = document.getElementById('transferenciasChart').getContext('2d');
    const transferenciasChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Sul/Sudoeste', 'Campo das Vertentes', 'Zona da Mata', 'Oeste de Minas', 'Triângulo Mineiro', 'Metropolitana', 'Central Mineira', 'Vale do Rio Doce', 'Noroeste', 'Norte', 'Jequitinhonha', 'Vale do Mucuri'],
            datasets: [{
                label: 'Transferências',
                data: [30, 25, 20, 15, 20, 10, 25, 15, 10, 20, 25, 5],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toString().split('').join('\n');
                        }
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});