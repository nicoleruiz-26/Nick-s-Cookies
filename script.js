// Interatividade elegante para a seleção de produtos
function selecionarProduto(nomeProduto) {
  // Mensagem refinada de confirmação
  alert(`Obrigado pelo interesse no ${nomeProduto} da NICK'S COOKIES!\n\nEm breve você será redirecionado para o nosso atendimento.`);
}

// Pequena animação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150 * index);
  });
});
