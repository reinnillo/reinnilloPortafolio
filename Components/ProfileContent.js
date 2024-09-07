import { instagramIcon, linkedinIcon, githubIcon, whatsappIcon, emailIcon, platziIcon } from "./icons";

export const dataProfile = {
    img: './asset/img/profile/alex.webp',
};

export const ProfileContact = [
    { name: 'instagram', href: 'https://instagram.com/reinnillo/', icon: instagramIcon },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/alexander-d-reina-p-737626318/', icon: linkedinIcon },
    { name: 'GitHub', href: 'https://github.com/reinnillo/', icon: githubIcon },
    { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=50768439588&text=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.', icon: whatsappIcon },
    { name: 'Email', href: 'mailto:30todev@gmail.com?subject=Solicitud%20de%20Servicio&body=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.', icon: emailIcon },
    { name: 'Referencias de cursos en Tecnologia', href: 'https://platzi.com/p/reinnillo/', icon: platziIcon },
];

export const AboutMe = [
    {
        title: 'Sobre mí',
        text: `Soy un desarrollador front-end junior apasionado por la
        tecnología y el aprendizaje continuo. He trabajado en varios
        proyectos personales que me han permitido mejorar mis
        habilidades en JavaScript, LitElement, HTML, CSS y otros. Me encanta
        crear interfaces limpias y funcionales que ofrezcan una
        experiencia de usuario óptima y accesible. A lo largo de mi
        trayectoria, he desarrollado soluciones innovadoras y
        personalizadas, como un proyecto reciente para una fotógrafa,
        que puedes ver aquí.`
    },
    {
        title: 'Mis Objetivos',
        text: `Estoy enfocado en mejorar mis habilidades en tecnologías
        modernas como React-Native para el desarrollo de App movil y 
        continuar mejorando en LitElement y React. Mi objetivo es formar 
        parte de un equipo o colaborar en proyectos desafiantes que me 
        permitan crecer profesionalmente, aprender de otros 
        desarrolladores y contribuir con soluciones de calidad.`
    },
    {
        title: 'Qué me motiva',
        text: `"Un humano insaciable de conocimiento e intolerante
        a la injusticia." quise pensar en algo que me describiera y pense 
        en esta franse. Eso es lo que me motiva más que nada, el conocimiento, 
        la curiosidad. Desde que descubrí la programación, la resolución de problemas 
        y el crear cosas, son mis principales motores. Disfruto del proceso de 
        convertir ideas en productos funcionales y crecer en el proceso. La tecnología 
        es mi pasión y busco constantemente oportunidades para mejorar y aprender más.`
    },
];

export const skills = [
    { skill: 'JavaScript', level: 60},
    { skill: 'litElement', level: 40},
    { skill: 'Css', level: 80},
    { skill: 'HTML', level: 75},
    { skill: 'React', level: 30},
    { skill: 'Python', level: 25},
    { skill: 'SQL', level: 25},
    { skill: 'Botpress', level: 90},
    { skill: 'Wix Studio', level: 50},
];