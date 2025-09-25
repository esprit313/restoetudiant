
document.addEventListener("DOMContentLoaded", () => {
      const options = { threshold: 0.2 };
      const observateur = new IntersectionObserver((entrees, observateur) => {
        entrees.forEach(entree => {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            observateur.unobserve(entree.target);
          }
        });
      }, options);

      document.querySelectorAll(".texte-apropos, .image-apropos").forEach(el => {
        observateur.observe(el);
      });
    });

    const basculeMenu = document.getElementById('menu-bascule');
    const navigation = document.querySelector('.navigation');

    basculeMenu.addEventListener('click', () => {
      navigation.classList.toggle('active');
      basculeMenu.querySelector('i').classList.toggle('bx-x');
    });

    document.querySelectorAll('.navigation a').forEach(lien => {
      lien.addEventListener('click', () => {
        navigation.classList.remove('active');
        basculeMenu.querySelector('i').classList.remove('bx-x');
      });
    });