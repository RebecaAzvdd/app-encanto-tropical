console.log("Página carregada com sucesso!");

// Exibe alerta ao clicar em uma categoria
document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', () => {
    alert(`Você clicou na categoria: ${category.textContent}`);
  });
});
