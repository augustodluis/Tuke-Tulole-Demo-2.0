// Espera o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o gráfico de vendas por província
    initSalesChart();
    
    // Inicializa o gráfico de usuários por localização
    initUsersChart();
    
    // Adiciona event listener para o seletor de período
    document.getElementById('sales-period').addEventListener('change', function() {
        updateSalesChart(this.value);
    });
    
    // Adiciona event listeners para os botões de localização
    const locationButtons = document.querySelectorAll('.chart-btn');
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            locationButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
            // Atualiza o gráfico com a localização selecionada
            updateUsersChart(this.textContent);
        });
    });
});

// Função para inicializar o gráfico de vendas
function initSalesChart() {
    const ctx = document.getElementById('sales-chart').getContext('2d');
    
    // Dados de exemplo - substitua pelos seus dados reais
    const monthlyData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas por Província',
            data: [12000, 19000, 15000, 17000, 22000, 24000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    
    window.salesChart = new Chart(ctx, {
        type: 'bar',
        data: monthlyData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para atualizar o gráfico de vendas com base no período selecionado
function updateSalesChart(period) {
    // Dados de exemplo para diferentes períodos - substitua pelos seus dados reais
    let chartData;
    
    switch(period) {
        case 'weekly':
            chartData = {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                datasets: [{
                    label: 'Vendas Semanais',
                    data: [1200, 1900, 1500, 1700, 2200, 2400, 1800],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            };
            break;
        case 'monthly':
            chartData = {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Vendas Mensais',
                    data: [12000, 19000, 15000, 17000, 22000, 24000],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            };
            break;
        case 'yearly':
            chartData = {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Vendas Anuais',
                    data: [120000, 150000, 180000, 210000, 250000],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            };
            break;
    }
    
    window.salesChart.data = chartData;
    window.salesChart.update();
}

// Função para inicializar o gráfico de usuários
function initUsersChart() {
    const ctx = document.getElementById('users-chart').getContext('2d');
    
    // Dados de exemplo - substitua pelos seus dados reais
    const userData = {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
            label: 'Usuários em Maputo',
            data: [3000, 5000, 800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    window.usersChart = new Chart(ctx, {
        type: 'pie',
        data: userData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Função para atualizar o gráfico de usuários com base na localização selecionada
function updateUsersChart(location) {
    // Dados de exemplo para diferentes localizações - substitua pelos seus dados reais
    let chartData;
    
    switch(location) {
        case 'Maputo':
            chartData = {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    label: 'Usuários em Maputo',
                    data: [3000, 5000, 800],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            break;
        case 'Beira':
            chartData = {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    label: 'Usuários na Beira',
                    data: [2200, 4500, 600],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            break;
        case 'Nampula':
            chartData = {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    label: 'Usuários em Nampula',
                    data: [1800, 3900, 500],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            break;
        case 'Outras':
            chartData = {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    label: 'Usuários em Outras Localidades',
                    data: [1500, 4200, 400],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            break;
    }
    
    window.usersChart.data = chartData;
    window.usersChart.update();
}