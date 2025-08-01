// Widget de Ajuda - JavaScript Ultra Simples e Funcional
(function() {
    console.log('Carregando widget de ajuda...');
    
    // Aguardar DOM carregar
    function initWidget() {
        const trigger = document.getElementById('helpChatTrigger');
        const menu = document.getElementById('helpChatMenu');
        const closeBtn = document.getElementById('helpMenuClose');
        
        if (!trigger || !menu) {
            console.log('Elementos não encontrados, tentando novamente...');
            setTimeout(initWidget, 500);
            return;
        }
        
        console.log('Widget elementos encontrados!');
        
        let isOpen = false;
        
        // Função para abrir menu
        function openMenu() {
            menu.classList.add('show');
            menu.style.display = 'block';
            isOpen = true;
            console.log('Menu aberto');
        }
        
        // Função para fechar menu
        function closeMenu() {
            menu.classList.remove('show');
            menu.style.display = 'none';
            isOpen = false;
            console.log('Menu fechado');
        }
        
        // Click no trigger
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Clique no trigger detectado');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Click no botão fechar
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Clique no close detectado');
                closeMenu();
            });
        }
        
        // Click fora fecha
        document.addEventListener('click', function(e) {
            if (!trigger.contains(e.target) && !menu.contains(e.target) && isOpen) {
                console.log('Clique fora detectado');
                closeMenu();
            }
        });
        
        // Link de contato
        const contactLink = menu.querySelector('a[href="#contato"]');
        if (contactLink) {
            contactLink.addEventListener('click', function() {
                closeMenu();
            });
        }
        
        console.log('Widget de ajuda inicializado com sucesso!');
    }
    
    // Iniciar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();