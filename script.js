document.querySelectorAll('.prestige__item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Fechar outros dropdowns
        document.querySelectorAll('.prestige__item.active').forEach(active => {
          if (active !== this) {
            active.classList.remove('active');
          }
        });
        
        // Toggle o atual
        this.classList.toggle('active');
      });
    });
 
    // Fechar ao clicar fora
    document.addEventListener('click', function() {
      document.querySelectorAll('.prestige__item.active').forEach(item => {
        item.classList.remove('active');
      });
    });