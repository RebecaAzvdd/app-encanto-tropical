console.log("Página carregada com sucesso!");
// Exibe alerta ao clicar em uma categoria
document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', () => {
    alert(`Você clicou na categoria: ${category.textContent}`);
  });
});
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggleButton = document.getElementById("theme-toggle");
        const body = document.body;

        // Aplica o tema salvo no localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
            themeToggleButton.textContent = "☀️";  // Troca o ícone para sol no modo noturno
        }

        // Alternância de tema
        themeToggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                themeToggleButton.textContent = "☀️";  // Ícone de sol para modo claro
                localStorage.setItem("theme", "dark"); // Salva a escolha do usuário
            } else {
                themeToggleButton.textContent = "🌙";  // Ícone de lua para modo noturno
                localStorage.setItem("theme", "light"); // Salva a escolha do usuário
            }
        });
    });
