document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validação básica
        if (!username || !email || !telefone || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Validação de telefone (apenas números e 9 ou 11 dígitos)
        const telefoneRegex = /^\d{9,11}$/;
        if (!telefoneRegex.test(telefone)) {
            alert("Por favor, insira um número de telefone válido (9 a 11 dígitos).");
            return;
        }

        // Validação de senha (mínimo de 6 caracteres)
        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Simula envio de dados (aqui você pode conectar a um backend)
        console.log("Cadastro realizado com sucesso:", { username, email, telefone, password });
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../home/index.html";

        // Limpa o formulário
        form.reset();
    });
});
