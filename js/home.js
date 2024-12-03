document.addEventListener("DOMContentLoaded", () => {
    // Adiciona produtos ao carrinho
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const product = {
                name: productElement.dataset.name,
                price: parseFloat(productElement.dataset.price),
                image: productElement.dataset.image,
                quantity: 1
            };

            // Recupera o carrinho atual do localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Verifica se o produto já está no carrinho
            const existingProductIndex = cart.findIndex(item => item.name === product.name);
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1; // Incrementa a quantidade
            } else {
                cart.push(product); // Adiciona o novo produto
            }

            // Salva o carrinho atualizado no localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} foi adicionado ao carrinho!`);
        });
    });

    // Alternância de tema (modo normal e noturno)
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica o estado salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeToggleButton.textContent = "☀️";
    }

    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Atualiza o ícone e salva o estado
        if (body.classList.contains("dark-mode")) {
            themeToggleButton.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleButton.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});
