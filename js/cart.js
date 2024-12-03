document.addEventListener("DOMContentLoaded", () => {
    const cartItemsSection = document.querySelector('.cart-details');
    const totalPriceElement = document.getElementById('summary-total');
    const subtotalElement = document.getElementById('summary-subtotal');
    const checkoutBtn = document.querySelector('.checkout-button');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica o estado salvo no localStorage e aplica o tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️';
    }

    // Alternância de tema
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Carrega os itens do carrinho a partir do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Atualiza a interface do carrinho
    function updateCartUI() {
        cartItemsSection.innerHTML = ''; // Limpa os itens exibidos
        let subtotal = 0;

        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Preço: R$ ${item.price.toFixed(2)}</p>
                    <div>
                        Quantidade: 
                        <button class="quantity-btn" data-index="${index}" data-delta="-1">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-index="${index}" data-delta="1">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-index="${index}">Remover</button>
            `;
            cartItemsSection.appendChild(cartItemElement);

            subtotal += item.price * item.quantity; // Calcula o subtotal
        });

        // Atualiza os valores no resumo
        subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
        totalPriceElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    }

    // Atualiza a quantidade de um item
    function updateQuantity(index, delta) {
        const item = cart[index];
        if (item.quantity + delta > 0) {
            item.quantity += delta;
            saveCart();
            updateCartUI();
        }
    }

    // Remove um item do carrinho
    function removeItem(index) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }

    // Salva o carrinho no localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Finaliza a compra (simulação)
    checkoutBtn.addEventListener('click', () => {
        saveCart();
        window.location.href = '../checkout/index.html';
    });

    // Delegação de eventos para quantidade e remoção
    cartItemsSection.addEventListener('click', (event) => {
        const button = event.target;

        if (button.classList.contains('quantity-btn')) {
            const index = parseInt(button.dataset.index, 10);
            const delta = parseInt(button.dataset.delta, 10);
            updateQuantity(index, delta);
        } else if (button.classList.contains('remove-btn')) {
            const index = parseInt(button.dataset.index, 10);
            removeItem(index);
        }
    });

    // Inicializa a interface do carrinho
    updateCartUI();
});
