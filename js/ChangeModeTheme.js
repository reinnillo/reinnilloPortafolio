// Variables CSS para manejar los temas de color y estilos recurrentes
const root = document.documentElement;
const darkModeButton = document.getElementById('dark-mode-button');
const lightModeButton = document.getElementById('light-mode-button');

const rectBox = document.querySelector('#box-btn').getBoundingClientRect();
const boxSizeBtn = rectBox.width - darkModeButton.getBoundingClientRect().width;


// Función para cambiar el modo DARCK
function enableDarkMode() {
    // al documento le asignamos el atributo del tema elegido
    document.documentElement.setAttribute('data-theme', 'dark');
    // almacenamos en memoria el tema elegido
    localStorage.setItem('theme', 'dark');

    lightModeButton.style.zIndex = 1;
    lightModeButton.style.display = 'block';
    lightModeButton.style.transform = `translateX(0px)`;
    lightModeButton.style.transition = 'transform 2s ease';
    
    darkModeButton.style.transform = `translateX(0px)`;
    darkModeButton.style.zIndex = 0;
}

// Funcion para cambiar el modo claro
function enableLightMode() {
    // al documento le asignamos el atributo del tema elegido
    document.documentElement.setAttribute('data-theme', 'light');
    // almacenamos en memoria el tema elegido
    localStorage.setItem('theme', 'light');
    
    // mostramos el boton
    darkModeButton.style.zIndex = 1;
    darkModeButton.style.display = 'block';
    darkModeButton.style.transform = `translateX(${boxSizeBtn}px)`;
    darkModeButton.style.transition = 'transform 2s ease';

    lightModeButton.style.transform = `translateX(${boxSizeBtn}px)`;
    lightModeButton.style.zIndex = 0;
}

// Eventos para los botones de cambio de tema
darkModeButton.addEventListener('click', enableDarkMode);
lightModeButton.addEventListener('click', enableLightMode);


// DETECTAR LA ESQUEMA DE COLORES DE PREFERENCIAS DEL SISTEMA
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

// Aplicar el tema segun la preferencia del usuario o la configuracion guardada
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    else if (savedTheme === 'light') {
        enableLightMode();
    }
}
else if (userPrefersDark) {
    enableDarkMode();
}
else if (userPrefersLight) {
    enableLightMode();
}