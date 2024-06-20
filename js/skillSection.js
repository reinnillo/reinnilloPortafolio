const btn_learning = document.getElementById('learning');
const btn_competent = document.getElementById('competent');
const btn_advanced = document.getElementById('advanced');

const circleToolsList = document.getElementById('circle-tools').children;

const filterLevelTool = (array, level) => {
    const levelList = [];
    [...array].forEach(element => {
        if(element.classList[2] === level) {
            levelList.push(element);
        }
    });
    return levelList;
};

const aprendizajeList = filterLevelTool(circleToolsList,'aprendizaje');
const competenteList = filterLevelTool(circleToolsList,'competente');
//const avanzadoList = filterLevelTool(circleToolsList,'avanzado');

console.log(aprendizajeList);
console.log(competenteList[0]);
//console.log(avanzadoList);

btn_advanced.addEventListener('click', () => {
    console.log('se hizo click en el boton avanzado.')
    const avanzadoList = filterLevelTool(circleToolsList,'avanzado');
    const tool = avanzadoList[0].classList[0];
    tool.style.zIndex = '10';
    console.log(tool)
})