// Adicionar interação para botões da tabela
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se os botões de edição existem antes de adicionar os event listeners
    const btnEdit = document.querySelectorAll('.btn-edit');
    if (btnEdit.length) {
        btnEdit.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const userName = this.closest('tr').querySelector('.user-info-text h4').textContent;
                showNotification('Editar Usuário', `Editando usuário: ${userName}`);
            });
        });
    }
    
    const btnDelete = document.querySelectorAll('.btn-delete');
    if (btnDelete.length) {
        btnDelete.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const userName = this.closest('tr').querySelector('.user-info-text h4').textContent;
                if (confirm(`Tem certeza que deseja excluir o usuário ${userName}?`)) {
                    // Aqui você adicionaria o código para excluir o usuário
                    showNotification('Usuário Excluído', `${userName} foi excluído com sucesso.`);
                    // Remover a linha da tabela com animação
                    const row = this.closest('tr');
                    row.style.opacity = '0';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
            });
        });
    }
    
    // Botão para adicionar novo usuário
    const btnAdd = document.querySelector('.btn-add');
    if (btnAdd) {
        btnAdd.addEventListener('click', function() {
            // Aqui você pode mostrar um modal para adicionar usuário
            showNotification('Adicionar Usuário', 'Funcionalidade para adicionar usuário em desenvolvimento.');
        });
    }
    
    // Alterar período do gráfico de vendas
    const salesPeriod = document.getElementById('sales-period');
    if (salesPeriod) {
        salesPeriod.addEventListener('change', function() {
            const period = this.value;
            // Aqui você atualizaria os dados do gráfico com base no período selecionado
            showNotification('Período Alterado', `Exibindo dados de vendas ${period}.`);
        });
    }

    // Função para mostrar notificações
    function showNotification(title, message) {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = 'notification-popup';
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-bell"></i>
            </div>
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Adicionar ao corpo do documento
        document.body.appendChild(notification);
        
        // Mostrar notificação após um pequeno delay
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Adicionar evento para fechar a notificação
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Fechar automaticamente após 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Função para criar overlay na versão mobile
    function createOverlay() {
        if (!document.querySelector('.overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', function() {
                document.body.classList.remove('sidebar-expanded');
                this.remove();
            });
        }
    }

    // Verificar tamanho da tela ao carregar e redimensionar
    window.addEventListener('load', checkScreenSize);
    window.addEventListener('resize', checkScreenSize);

    function checkScreenSize() {
        const isMobile = window.innerWidth < 992;
        
        if (isMobile) {
            document.body.classList.remove('sidebar-expanded');
        }
    }
});
