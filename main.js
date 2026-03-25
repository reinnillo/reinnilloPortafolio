document.addEventListener("DOMContentLoaded", () => {
    const App = document.getElementById('App');
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
    const footerNav = document.querySelector(".footer-navigation");
    const openFooter_BTN = document.getElementById('openFooter');
    let timeoutID;

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

            const targetId = link.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            const targetIndex = Array.from(sections).indexOf(targetSection);

            const doNavigation = () => {
                sections.forEach((section) => section.classList.remove("active"));
                targetSection.classList.add("active");
                sections.forEach((section, index) => {
                    if (targetIndex === index) {
                        section.style.transform = `translateX(-${targetIndex * 100}vw) scale(1)`;
                        section.style.opacity = "1";
                    } else {
                        section.style.transform = `translateX(-${targetIndex * 100}vw) scale(0.5)`;
                        section.style.opacity = "0.2";
                    }
                });
            };

            // View Transitions API — fallback automático si no está disponible
            if (!document.startViewTransition) {
                doNavigation();
                return;
            }
            document.startViewTransition(() => doNavigation());
        });
    });

    // Establecer la sección inicial activa
    const initialSection = document.getElementById("home");
    initialSection.classList.add("active");
});  