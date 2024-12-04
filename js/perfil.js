document.addEventListener("DOMContentLoaded", () => {
        const themeToggleButton = document.getElementById("theme-toggle");
        const body = document.body;

        // Aplica o tema salvo no localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
            themeToggleButton.textContent = "☀️";
        }

        // Alternância de tema
        themeToggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                themeToggleButton.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggleButton.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    });
