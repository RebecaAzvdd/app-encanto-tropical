// js/products.js

// Dados dos produtos
const products = [
    { id: 1, name: "Ginger Vermelha", price: "R$ 25,00 - 30,00", img: "../../assets/images/flor1.png" },
    { id: 2, name: "Protea", price: "R$ 45,00 - 60,00", img: "../../assets/images/flor2.png" },
    { id: 3, name: "Antúrio", price: "R$ 30,00 - 35,00", img: "../../assets/images/flor3.png" },
    { id: 4, name: "Helicônia", price: "R$ 20,00 - 40,00", img: "../../assets/images/flor4.png" },
    { id: 5, name: "Hibisco", price: "R$ 15,00", img: "../../assets/images/flor5.png" },
    { id: 6, name: "Azaleia", price: "R$ 18,00", img: "../../assets/images/flor6.png" },
];

// Renderizar produtos na Home
function renderProductsHome(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products
        .map(
            (product) => `
        <a href="../produto/index.html?id=${product.id}" class="product">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </a>
    `
        )
        .join("");
}

// Renderizar detalhes do produto
function renderProductDetails(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Obter o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get("id"));

    // Encontrar o produto correspondente
    const product = products.find((p) => p.id === productId);

    if (product) {
        container.innerHTML = `
            <div class="product-detail">
                <img src="${product.img}" alt="${product.name}">
                <h1>${product.name}</h1>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
        `;
    } else {
        container.innerHTML = `<p>Produto não encontrado.</p>`;
    }
}

// Adicionar produto ao carrinho (exemplo)
function addToCart(productId) {
    alert(`Produto com ID ${productId} adicionado ao carrinho!`);
}
