const circle = document.querySelector(".circle");
const imgProfile = circle.firstElementChild;
const cv = document.querySelector("#cv-download");

// iconos sociales
const icons = document.querySelectorAll('.icon');

cv.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    imgProfile.classList.add('scale');
});

cv.addEventListener('mouseout', (e) => {
    e.preventDefault();
    imgProfile.classList.remove('scale');
});