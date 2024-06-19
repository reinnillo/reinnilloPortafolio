const btnOpenMenu = document.querySelector('.navDiv').firstElementChild;
const nav = document.querySelector('.nav');
const btnCloseMenu = nav.firstElementChild;

btnOpenMenu.addEventListener('click', () => {
    nav.style.transform = 'translateX(0%)';
});

btnCloseMenu.addEventListener('click', () => {
    nav.style.transform = 'translateX(-100%)';
})