const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ===== WhatsApp ao clicar no produto =====
const cards = document.querySelectorAll('.card-produto');

const numeroWhatsApp = '5517991954677'; 
// Use apenas números: DDI + DDD + telefone

cards.forEach(card => {
  card.addEventListener('click', () => {
    const produto = card.dataset.produto;

    const mensagem = `Olá! Tenho interesse sobre: ${produto}`;
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre nova aba com proteção contra tabnabbing
    window.open(linkWhatsApp, '_blank', 'noopener,noreferrer');
  });
});