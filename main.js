document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // animar el footer nav al abrir la web
    setTimeout(() => {
        const footerNav = document.querySelector('.footer-navigation');
        footerNav.style.transform = 'translate(-50%,0%)';
        footerNav.style.width = '55vw';
    }, 700)

    // navegacion de los elementos
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Obtener el atributo data-target
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            // Eliminar la clase active de todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Añadir la clase active a la sección objetivo
            targetSection.classList.add('active');
            
            // Calcular la posición de la sección objetivo y desplazar todas las secciones
            const targetIndex = Array.from(sections).indexOf(targetSection);
            sections.forEach((section, index) => {
                section.style.transform = `translateX(-${targetIndex * 100}vw)`;
            });
        });
    });
    
    // Establecer la sección inicial activa
    const initialSection = document.getElementById('home');
    initialSection.classList.add('active');
});