document.addEventListener("DOMContentLoaded", () => {
    const App = document.getElementById('App');
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
    const footerNav = document.querySelector(".footer-navigation");
    const openFooter_BTN = document.getElementById('openFooter');
    let timeoutID;

    // Desplazarce al Formulario por medio del ID al cargar la pagina si existe el hash.
    const urlCompleta = window.location.href;
    const hash = window.location.hash;
    Array.from(sections).forEach((section, index) => {
        if(section.id === hash.slice(1)){
            section.style.transform = `translateX(-${index * 100}vw) scale(1)`;
            section.style.opacity = "1";
        } else {
            section.style.transform = `translateX(-${index * 100}vw) scale(0.5)`;
            section.style.opacity = "0";
        }
    });

    // function to active timeOut
    function startTimeout(time, callback) {

        timeoutID = setTimeout(() => {
            callback();
        }, time);
    };
    // function to open Nav Footer
    const enableFooterNav = () => {
        footerNav.classList.add('enable');
        openFooter_BTN.style.bottom = '-4.5rem';
        App.style.transform = 'scale(0.9)';
    };
    // function to close Nav Footer
    const desableFooterNav = () => {
        footerNav.classList.remove('enable');
        // ocultar el footer mientras no se use
        openFooter_BTN.style.bottom = '-1.8rem';
        App.style.transform = 'scale(1)';
    };
    openFooter_BTN.addEventListener('mouseenter', () => {
        startTimeout(500, enableFooterNav);
        startTimeout(8000, desableFooterNav);
    });
    openFooter_BTN.addEventListener('click', () => {
        startTimeout(500, enableFooterNav);
        startTimeout(8000, desableFooterNav);
    });

    // animar el footer nav al abrir la web
    startTimeout(500, enableFooterNav);
    startTimeout(8000, desableFooterNav);

    // navegacion de los elementos
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Obtener el atributo data-target
            const targetId = link.getAttribute("data-target"); // el nombre que tiene el ID
            const targetSection = document.getElementById(targetId); // buscar el elemento por el ID

            // Eliminar la clase active de todas las secciones
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            // Añadir la clase active a la sección objetivo
            targetSection.classList.add("active");

            // Calcular la posición de la sección objetivo y desplazar todas las secciones
            const targetIndex = Array.from(sections).indexOf(targetSection);
            sections.forEach((section, index) => {
                if (targetIndex === index) {
                    section.style.transform = `translateX(-${targetIndex * 100}vw) scale(1)`;
                    section.style.opacity = "1";
                } else {
                    section.style.transform = `translateX(-${targetIndex * 100}vw) scale(0.5)`;
                    section.style.opacity = "0.2";
                }
            });
        });
    });

    // Establecer la sección inicial activa
    const initialSection = document.getElementById("home");
    initialSection.classList.add("active");
});  