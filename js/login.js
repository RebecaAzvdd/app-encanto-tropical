document.addEventListener("DOMContentLoaded", () => {
    const userTypeInputs = document.querySelectorAll('input[name="userType"]');
    const adminTokenGroup = document.getElementById("admin-token-group");

    // Token de administrador válido (pode ser atualizado para integração futura com um backend)
    const validAdminToken = "12345";

    // Exibe ou oculta o campo de token de administrador
    userTypeInputs.forEach((input) => {
        input.addEventListener("change", () => {
            if (input.value === "admin") {
                adminTokenGroup.style.display = "block";
                console.log("Modo administrador selecionado.");
            } else {
                adminTokenGroup.style.display = "none";
                console.log("Modo usuário normal selecionado.");
            }
        });
    });

    // Lida com o envio do formulário de login
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os valores do formulário
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        const token = document.getElementById("admin-token").value;

        // Validações básicas (estas podem ser substituídas por validações de backend)
        if (!username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Lógica para administradores
        if (userType === "admin") {
            if (token !== validAdminToken) {
                alert("Token de administrador inválido.");
                return;
            }
            alert("Administrador autenticado com sucesso.");
        } else {
            alert("Usuário normal autenticado com sucesso.");
        }

        // Redireciona para a página inicial
        window.location.href = "../../pages/home/index.html";
    });
});
