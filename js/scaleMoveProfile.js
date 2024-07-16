const circle = document.querySelector(".circle");
const imgProfile = circle.firstElementChild;
const cv = document.querySelector("#cv-download");

cv.addEventListener("mouseover", () => {
    imgProfile.classList.add('scale');
    setTimeout(function () {
        imgProfile.classList.remove('scale');
    }, 2000)
});


