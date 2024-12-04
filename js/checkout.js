document.addEventListener("DOMContentLoaded", () => {
    const checkoutItemsSection = document.getElementById('checkout-items');
    const subtotalElement = document.getElementById('checkout-subtotal');
    const totalElement = document.getElementById('checkout-total');
    const confirmOrderBtn = document.getElementById('confirm-order');

    // Carrega os itens do carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Atualiza a interface de finalização de compra
    function updateCheckoutUI() {
        checkoutItemsSection.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('checkout-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>Preço: R$ ${item.price.toFixed(2)}</p>
                    <p>Quantidade: ${item.quantity}</p>
                </div>
            `;
            checkoutItemsSection.appendChild(itemElement);

            subtotal += item.price * item.quantity;
        });

        subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
        totalElement.textContent = `R$ ${subtotal.toFixed(2)}`; // Assume frete grátis
    }

    // Confirmação de pedido (simulada)
    confirmOrderBtn.addEventListener('click', () => {
        alert('Pedido confirmado! Obrigado pela compra.');
        localStorage.removeItem('cart'); // Limpa o carrinho
        window.location.href = '../home/index.html'; // Redireciona para a página inicial
    });

    updateCheckoutUI();
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;
    
        // Verificar o estado do tema e aplicar a classe correspondente
        if(localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = '🌞'; // Alterar o ícone para o modo diurno
        }
    
        // Adicionar evento de clique para alternar entre os modos
        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Atualizar o ícone
            if (body.classList.contains('dark-mode')) {
                themeToggleButton.textContent = '🌞'; // Modo diurno
                localStorage.setItem('theme', 'dark'); // Salvar preferências no localStorage
            } else {
                themeToggleButton.textContent = '🌙'; // Modo noturno
                localStorage.removeItem('theme'); // Remover preferência se o modo noturno for desativado
            }
        });
    });
    
});