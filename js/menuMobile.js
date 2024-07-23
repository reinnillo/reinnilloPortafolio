const nav = document.querySelector('.nav');
const btnOpenMenu = document.querySelector('.navDiv').firstElementChild;
const btnCloseMenu = nav.firstElementChild;

btnOpenMenu.addEventListener('click', () => {
    nav.style.transform = 'translateX(0%)';
    Array.from(nav.children).forEach(li => {
        Array.from(li.children).forEach(item => {
            if (item.className === 'nav-link') {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    nav.style.transform = 'translateX(-100%)';
                })
            }
        })
    })
});

btnCloseMenu.addEventListener('click', () => {
    nav.style.transform = 'translateX(-100%)';
})