// Selección de elementos del DOM
const form = document.getElementById('quickContactForm');
const progressBar = document.querySelector('.progress-bar-inside');
// const inputs = form.querySelectorAll('input, textarea');
console.log(form)

// Inicializar el progreso
let completedFields = 0;
const totalFields = inputs.length;
const progressStep = 100 / totalFields; // Porcentaje de cada campo

// Función para actualizar la barra de progreso
function updateProgress() {
  // Calcula el porcentaje basado en el número de campos completados
  const progressPercentage = (completedFields / totalFields) * 100;
  progressBar.style.width = `${progressPercentage}%`; // Actualiza el estilo
}

// Función para validar y actualizar progreso
function handleInputChange(event) {
  const input = event.target;

  // Validación básica de ejemplo (puedes mejorarla según tus necesidades)
  const isValid = input.value.trim() !== ''; // Checa que no esté vacío

  // Verificar si el campo ya estaba marcado como completado
  if (isValid && !input.dataset.completed) {
    completedFields++; // Incrementa si es válido
    input.dataset.completed = 'true'; // Marcar campo como completado
  } else if (!isValid && input.dataset.completed) {
    completedFields--; // Decrementa si deja de ser válido
    input.dataset.completed = ''; // Marcar campo como no completado
  }

  // Actualizar barra de progreso
  updateProgress();
}

// Añadir event listeners a los campos del formulario
inputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});
