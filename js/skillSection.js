// Botones
const btn_learning = document.getElementById('learning');
const btn_competent = document.getElementById('competent');
const btn_advanced = document.getElementById('advanced');
const btn_reset = document.getElementById('reset');
const circleTools = document.getElementById('circle-tools');
const boxCircle = document.querySelector('.box-circle');
const toolsList = circleTools.children;
const deg = 360;
const element = 12;
const degForElement = deg / element;
let incrementador = degForElement;

const positionToolsInParent = {
    learning: {
        react: {
            top: '1%'
        },
        node: {
            top: '35%',
            left: '51%'
        },
        make: {
            top: '-17%',
            left: '52%'
        },
        three: {
            top: '12%',
            left: '78%'
        },
        python: {
            top: '10%',
            left: '36%'
        },
        wordpress: {
            bottom: '0'
        }
    },
    competent: {
        js: {
             bottom: '0'
        },
        git: {
            top: '-17%',
            left: '52%'
        },
        stack: {
            top: '35%',
            left: '51%'
        },
        css: {
            top: '1%'
        }
    },
    advanced: {
        html: {
            bottom: '0',
            backgroundColor: '#8f6406',
        },
        botpress: {
            top: '1%'
        }
    },
    reset: {
        top: '50%',
        left: '8%'
    }
} 

const degOriginTools = {
    styleAnimateTool: {
        zIndex: '5',
        transform: 'rotateZ(251deg)',
        transformOrigin: 'initial',
        borderRadius: '0',
    },
    styleResetTool: {
        zIndex: 'initial',
        transformOrigin: 'right top',
        borderRadius: '100% 0% 50% 50% / 50% 0% 100% 50%',
    }
}
const filterLevelTool = (array, level) => {
    const levelList = [];
    [...array].forEach(element => {
        if(element.classList[2] === level) {
            levelList.push(element);
        }
    });
    return levelList;
};

const verifyAndAddClass = (element, classToVerify) => {
    if (!element.classList.contains(classToVerify)) {
        element.classList.add(classToVerify);
    };
};

const assignStyleToElementsArray = (array, styleObject) => {
    array.forEach(element => {
        Object.assign(element.style, styleObject);
    });
};

const spinResetTool = array => {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        element.style.transform = `rotateZ(${incrementador}deg)`;
        incrementador += degForElement;
    }
}

const isHiddenElement = (element) => {
    const windowPointCenter = window.innerHeight;
    let elementVerticalSpaceBetween_Top = element.getBoundingClientRect().top; 
    return (elementVerticalSpaceBetween_Top > windowPointCenter) || (elementVerticalSpaceBetween_Top < 1);
}

const learningList = filterLevelTool(toolsList,'aprendizaje');
const competentList = filterLevelTool(toolsList,'competente');
const advancedList = filterLevelTool(toolsList,'avanzado');
let isClickBtnLearning = false;
let isClickBtnCompetent = false;
let isClickBtnAdvanced = false;

// Funciones para resetear la animacion de las herramientas
const animationResetLearningTools = () => {
    for (let index = 0; index < learningList.length; index++) {
        let element = learningList[index];
        
        if (element.innerText === 'React'){
            element.style.top = positionToolsInParent.reset.top;
        }
        else if (element.innerText === 'Nodejs') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'Make') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'Threejs') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'Python') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'WordPress') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
    }
}

const animationResetCompetentTools = () => {
    for (let index = 0; index < competentList.length; index++) {
        let element = competentList[index];

        if (element.innerText === 'GitHub'){
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'JavaScript') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'Stack-AI') {
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'CSS') {
            element.style.top = positionToolsInParent.reset.top;
        }
    }
}

const animationResetAdvancedTools = () => {
    for (let index = 0; index < advancedList.length; index++) {
        let element = advancedList[index];
        if (element.innerText === 'HTML'){
            element.style.top = positionToolsInParent.reset.top;
            element.style.left = positionToolsInParent.reset.left;
        }
        else if (element.innerText === 'Botpress') {
            element.style.top = positionToolsInParent.reset.top;
        }
    }
}

// Resetear la posicion de todas las herramientas
const resetAllTools = () => {

    setTimeout(function(){

        if ((isClickBtnLearning === true) || (isClickBtnCompetent === true) || (isClickBtnAdvanced === true)) {
            
            spinResetTool(toolsList);
            assignStyleToElementsArray(learningList, degOriginTools.styleResetTool);
            assignStyleToElementsArray(competentList, degOriginTools.styleResetTool);
            assignStyleToElementsArray(advancedList, degOriginTools.styleResetTool);
            //aprendizaje reseter
            animationResetLearningTools();
            //competente reset
            animationResetCompetentTools();
            // avanzado reset
            animationResetAdvancedTools();
        }
    }, 10000)

}

btn_learning.addEventListener('click', () => {
    isClickBtnLearning = true;
    verifyAndAddClass(circleTools, 'spin-reset');
    spinResetTool(toolsList);
    assignStyleToElementsArray(learningList, degOriginTools.styleAnimateTool);
    assignStyleToElementsArray(competentList, degOriginTools.styleResetTool);
    assignStyleToElementsArray(advancedList, degOriginTools.styleResetTool);

    // aprendizaje animar
    for (let index = 0; index < learningList.length; index++) {
        let element = learningList[index];
        
        if (element.innerText === 'React'){
            element.style.top = positionToolsInParent.learning.react.top;
        }
        else if (element.innerText === 'Nodejs') {
            element.style.top = positionToolsInParent.learning.node.top;
            element.style.left = positionToolsInParent.learning.node.left;
        }
        else if (element.innerText === 'Make') {
            element.style.top = positionToolsInParent.learning.make.top;
            element.style.left = positionToolsInParent.learning.make.left;
        }
        else if (element.innerText === 'Threejs') {
            element.style.top = positionToolsInParent.learning.three.top;
            element.style.left = positionToolsInParent.learning.three.left;
        }
        else if (element.innerText === 'Python') {
            element.style.top = positionToolsInParent.learning.python.top;
            element.style.left = positionToolsInParent.learning.python.left;
        }
        else if (element.innerText === 'WordPress') {
            element.style.bottom = positionToolsInParent.learning.wordpress.bottom
        }
    }

    //competente reset
    animationResetCompetentTools();
    // avanzado reset
    animationResetAdvancedTools();

    resetAllTools()
});

btn_competent.addEventListener('click', () => { 
    isClickBtnCompetent = true;   
    verifyAndAddClass(circleTools, 'spin-reset');
    spinResetTool(toolsList);
    assignStyleToElementsArray(competentList, degOriginTools.styleAnimateTool);
    assignStyleToElementsArray(learningList, degOriginTools.styleResetTool);
    assignStyleToElementsArray(advancedList, degOriginTools.styleResetTool);

    //competente animar
    for (let index = 0; index < competentList.length; index++) {
        let element = competentList[index];
        
        if (element.innerText === 'GitHub'){
            element.style.top = positionToolsInParent.competent.git.top;
            element.style.left = positionToolsInParent.competent.git.left;
        }
        else if (element.innerText === 'JavaScript') {
            element.style.bottom = positionToolsInParent.competent.js.bottom;
        }
        else if (element.innerText === 'Stack-AI') {
            element.style.top = positionToolsInParent.competent.stack.top;
            element.style.left = positionToolsInParent.competent.stack.left;
        }
        else if (element.innerText === 'CSS') {
            element.style.top = positionToolsInParent.competent.css.top;
        }
    }

    //aprendizaje reseter
    animationResetLearningTools();

    //avanzado resetear
    animationResetAdvancedTools();

    resetAllTools()
});

btn_advanced.addEventListener('click', () => {  
    isClickBtnAdvanced = true;
    verifyAndAddClass(circleTools, 'spin-reset');
    spinResetTool(toolsList);
    assignStyleToElementsArray(advancedList, degOriginTools.styleAnimateTool);
    assignStyleToElementsArray(learningList, degOriginTools.styleResetTool);
    assignStyleToElementsArray(competentList, degOriginTools.styleResetTool);

    // avanzado animar
    for (let index = 0; index < advancedList.length; index++) {
        let element = advancedList[index];
        
        if (element.innerText === 'HTML'){
            element.style.bottom = positionToolsInParent.advanced.html.bottom;
        }
        else if (element.innerText === 'Botpress') {
            element.style.top = positionToolsInParent.advanced.botpress.top;
        }
    }

    //aprendizaje reseter
    animationResetLearningTools();

    //competente resetear
    animationResetCompetentTools();

    resetAllTools()
});