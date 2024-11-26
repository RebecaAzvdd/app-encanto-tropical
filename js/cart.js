document.addEventListener("DOMContentLoaded", () => {
    const cartItemsSection = document.querySelector('.cart-details');
    const totalPriceElement = document.getElementById('summary-total');
    const subtotalElement = document.getElementById('summary-subtotal');
    const checkoutBtn = document.querySelector('.checkout-button');

    // Carregar os itens do carrinho a partir do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartUI() {
        cartItemsSection.innerHTML = ''; // Limpa a lista de produtos
        let subtotal = 0;

        // Itera pelos itens no carrinho e exibe cada um deles
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
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        ${item.quantity}
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeItem(${index})">Remover</button>
            `;
            cartItemsSection.appendChild(cartItemElement);

            subtotal += item.price * item.quantity;
        });

        // Atualiza os valores do resumo
        subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
        totalPriceElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    }

    // Função para atualizar a quantidade de um item
    window.updateQuantity = function (index, delta) {
        const item = cart[index];
        if (item.quantity + delta > 0) { // Impede quantidade negativa
            item.quantity += delta;
            saveCart();
            updateCartUI();
        }
    }

    // Função para remover um item do carrinho
    window.removeItem = function (index) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }

    // Função para salvar o carrinho no localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Função para finalizar a compra (simulação)
    checkoutBtn.addEventListener("click", () => {
        alert("Finalizando a compra...");
    });

    // Inicializa a UI do carrinho
    updateCartUI();
});
