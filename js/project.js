import { projectDefault } from '../array-simulacion.js';
import { API_KEY, API_URL } from './data.js';
import { fetchAPI, getDataProject } from './fetchAPI.js';
import { imgOnLoad } from './utils.js';
// elementos del DOM
const desktop = document.getElementById('img-desktop');
const mobile = document.getElementById('img-mobile');
const slide = document.getElementById('slide');
const arrow = document.querySelectorAll('.arrow');
const counter = document.getElementById('counter-slider').children[1];
const prevBTN = document.querySelector('.prev');
const nextBTN = document.querySelector('.next');

let current = 0;

// funcion para crear un boton
const createButton = (href, className )=> {
    const button = document.createElement('a');
    button.textContent = 'Visitar';
    button.classList.add(className);
    button.classList.add('button');
    button.href = href;
    button.rel = 'noopener';
    button.target = 'blank';
    return button;
}
// CREACIONES PARA DESKTOP
const createProjectDesktop = (parentID, image_desktop, alt, title, description, href) => {
    parentID.innerHTML = '';
    // imagen
    const imgDesktop = imgOnLoad(image_desktop, alt, title);
    // figcantion - class='desc-proj'
    const figcantion = document.createElement('figcaption');
    figcantion.classList.add('desc-proj');
    // div - class='text'
    const div = document.createElement('div');
    div.classList.add('text');
    // p
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    // const paragraphReadMore = document.createElement('span');
    // paragraphReadMore.textContent = ' Ver más';

    const button = createButton(href, 'button-1');

    // paragraph.appendChild(paragraphReadMore);
    div.appendChild(paragraph);
    figcantion.appendChild(div);
    figcantion.appendChild(button);
    parentID.appendChild(imgDesktop);
    parentID.appendChild(figcantion);
};

// CREACIONES PARA MOBILE
const createProjectMobile = (parentID, image_mobile, alt, title, href) => {
    parentID.innerHTML = '';
    const button = createButton(href, 'button-2');
    // imagen
    const imgMobile = imgOnLoad(image_mobile, alt, title);
    parentID.appendChild(imgMobile);
    parentID.appendChild(button);
};

// CREACIONES PARA sLIDES
const createSlide = (parentID, project_name, listImage, alt, title) => {
    parentID.innerHTML = '';

    const titleSlide = document.createElement('div');
    titleSlide.classList.add('title-slide');
    // H2 dentro de : title-slide
    const h2 = document.createElement('h2');
    h2.textContent = project_name;
    titleSlide.appendChild(h2);

    const imageSlide = document.createElement('div');
    imageSlide.classList.add('image-slide');

    Array.from(listImage).forEach(imgProjectSlide => {
        // img dentro de : image-slide
        const imgSlide = imgOnLoad(imgProjectSlide, alt, title);
        imageSlide.appendChild(imgSlide);
    });
    parentID.appendChild(titleSlide);
    parentID.appendChild(imageSlide);

    // ANIMACION PARA SLIDES
    const listSlideImg = imageSlide.querySelectorAll('img');
    let indexSlide = 0;
    let interval = 0;
    interval = setInterval(() => {
        Array.from(listSlideImg).forEach((img, i) => {
            if (i === indexSlide) {
                img.style.transform = 'translateY(0) scale(1)';
                img.style.opacity = '1';
            } else {
                img.style.transform = 'translateY(5px) scale(0.95)';
                img.style.opacity = '0';
            };
        });
        indexSlide = indexSlide === listSlideImg.length - 1 ? 0 : indexSlide + 1;

    }, 4000);
};

// animar el contador
Array.from(arrow).forEach(a => {
    a.addEventListener('mouseover', () => {
        counter.style.textShadow = 'none';
        counter.style.transform = 'scale(0.95)';
    })
});
Array.from(arrow).forEach(a => {
    a.addEventListener('mouseout', () => {
        counter.style.textShadow = 'var(--shadow-00)';
        counter.style.transform = 'scale(1)';
    })
});


// api
const data = fetchAPI(API_URL, API_KEY);
data.then(records => {

    // get list image
    const dataList = getDataProject(records.records);

    const callCreatorProject = (index) => {
        Array.from(dataList).forEach((project, i) => {
            if (index === i) {
                createProjectDesktop(desktop, project.imageDesktop, project.alt, project.title, project.description, project.href);
                createProjectMobile(mobile, project.imageMobile, project.alt, project.title, project.href);
                createSlide(slide, project.projectName, project.slideImages, project.alt, project.title);
            };
        });
    };
    
    // CONTADOR DE PROYECTOS
    const counterProject = document.querySelector('.counter');
    counterProject.textContent = `${current + 1}/${dataList.length}`;
    
    // BOTONES NEXT Y PREV
    nextBTN.addEventListener('click', () => {
        current = (current + 1) % dataList.length;
        callCreatorProject(current);
        counterProject.textContent = `${current + 1}/${dataList.length}`;
    });
    prevBTN.addEventListener('click', () => {
        current = current === 0 ? dataList.length - 1 : current - 1;
        callCreatorProject(current);
        counterProject.textContent = `${current + 1}/${dataList.length}`;
    });

    callCreatorProject(current);

}).catch(error => {
    console.error(error);
    console.error('Cargando datos de emergencia...')
    createProjectDesktop(desktop, projectDefault[0].imageDesktop, projectDefault[0].alt, projectDefault[0].title, projectDefault[0].description, projectDefault[0].href);
    createProjectMobile(mobile, projectDefault[0].imageMobile, projectDefault[0].alt, projectDefault[0].title, projectDefault[0].href);
    createSlide(slide, projectDefault[0].projectName, projectDefault[0].slideImages, projectDefault[0].alt, projectDefault[0].title);
    [...arrow].forEach(a => {
        a.addEventListener('click', () => {
            alert('Estás viendo el proyecto por defecto, debido que hubo un problema al cargar los proyectos o tu navegador no soporte JavaScript.');
        });
    });
});