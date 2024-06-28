document.addEventListener("DOMContentLoaded", function() {
    // Configurações e Voltar
    document.getElementById('settings-icon').addEventListener('click', function() {
        alert('Configurações selecionada');
    });

    document.getElementById('back-icon').addEventListener('click', function() {
        alert('Voltar selecionado');
    });

    // Gráfico de Fazendas Cadastradas
    const ctx = document.getElementById('fazendasChart').getContext('2d');
    const fazendasChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sul/Sudoeste', 'Campo das Vertentes', 'Zona da Mata', 'Oeste de Minas', 'Triângulo Mineiro', 'Metropolitana', 'Central Mineira', 'Vale do Rio Doce', 'Noroeste', 'Norte', 'Jequitinhonha', 'Vale do Mucuri'],
            datasets: [{
                label: 'Fazendas',
                data: [15, 14, 13, 6, 8, 3, 10, 12, 4, 6, 7, 2],
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
