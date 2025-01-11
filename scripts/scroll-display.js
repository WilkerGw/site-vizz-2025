document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do clique
      const targetId = this.getAttribute('href'); // Obtém o ID do destino
      const targetElement = document.querySelector(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animação suave
        block: 'start' // Alinha o início da seção no topo
      });
    });
  });
  