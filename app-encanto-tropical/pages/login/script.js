document.addEventListener("DOMContentLoaded", () => {
    const userTypeInputs = document.querySelectorAll('input[name="userType"]');
    const adminTokenGroup = document.getElementById("admin-token-group");

    // visibilidade de input para admin
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
    
      // lidando com o envio do formulário
      const form = document.getElementById("login-form");

      const validAdminToken = "12345"; //token admin teste

      form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        const token = document.getElementById("admin-token").value;
        
        console.log(`Tentativa de login: Tipo de usuário - ${userType}, Usuário - ${username}`);

        
        if (userType === "admin" && token !== validAdminToken) {
            alert("Token de administrador inválido.");
          return;
        }

        // processando o login do tipó de usuario
        alert(`Login realizado como ${userType}.`);
    });
  });