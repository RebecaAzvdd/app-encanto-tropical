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
});
