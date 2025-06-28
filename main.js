document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll para links da barra lateral
  document.querySelectorAll('.barra-lateral a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efeito de fade-in nas seções ao rolar
  const sections = document.querySelectorAll('section');
  
  const fadeInOnScroll = function() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Configura estado inicial
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Executa uma vez no carregamento
  fadeInOnScroll();
  
  // Adiciona listener de scroll
  window.addEventListener('scroll', fadeInOnScroll);
  
  // Atualiza ano do footer
  const currentYear = new Date().getFullYear();
  document.querySelector('footer p').textContent = `© ${currentYear} Jean Ricardo Land Miranda. Todos os direitos reservados.`;
});