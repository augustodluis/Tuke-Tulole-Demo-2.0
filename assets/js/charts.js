// charts.js - Implementação otimizada do gráfico de atividades
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento canvas existe na página
    const activityChartCanvas = document.getElementById('activityChart');
    if (activityChartCanvas) {
        // Define uma altura máxima para o gráfico
        activityChartCanvas.style.maxHeight = '300px';
        initActivityChart(activityChartCanvas);
    }
});

/**
 * Inicializa o gráfico de resumo de atividades
 * @param {HTMLCanvasElement} canvas - O elemento canvas para renderizar o gráfico
 */
function initActivityChart(canvas) {
    // Dados de exemplo para o gráfico de atividades
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
            {
                label: 'Tarefas Concluídas',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1, // Reduzido para melhor performance
                data: [65, 59, 80, 81, 56, 55],
                tension: 0.3 // Suavização reduzida
            },
            {
                label: 'Tarefas Pendentes',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1, // Reduzido para melhor performance
                data: [28, 48, 40, 19, 32, 27],
                tension: 0.3 // Suavização reduzida
            }
        ]
    };

    // Configurações do gráfico otimizadas
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true, // Alterado para true para evitar o tremor
            aspectRatio: 2, // Define uma proporção fixa
            animation: {
                duration: 0 // Desativa animações para melhor performance
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Atividades por Mês',
                    font: {
                        size: 14 // Tamanho reduzido
                    },
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12, // Tamanho reduzido das caixas da legenda
                        padding: 10 // Espaçamento reduzido
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    enabled: true,
                    callbacks: {
                        // Simplifica os tooltips
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tarefas',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        maxTicksLimit: 5 // Limita o número de marcações no eixo Y
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mês',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 3, // Pontos menores
                    hoverRadius: 4 // Hover menor
                },
                line: {
                    borderWidth: 1 // Linhas mais finas
                }
            }
        }
    };

    // Cria o gráfico com configurações otimizadas
    const chart = new Chart(canvas, config);
    
    // Desativa a reação automática ao redimensionamento da janela
    // e implementa uma versão com throttle para evitar tremores
    window.addEventListener('resize', debounce(function() {
        chart.resize();
    }, 150));
}

/**
 * Função auxiliar para limitar a frequência das chamadas de redimensionamento
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * Exporta as funções para uso em outros scripts
 */
window.chartFunctions = {
    initActivityChart: initActivityChart
};