
const nombreInput = document.getElementById('name');
nombreInput.addEventListener('input', (event) => {
  const nombre = event.target.value.trim();
  if (nombre.length < 2 || !/^[a-zA-Z ]+$/.test(nombre)) {
    nombreInput.setCustomValidity('El nombre debe contener al menos 2 letras y solo letras');
  } else {
    nombreInput.setCustomValidity('');
  }
});
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', (event) => {
  const email = event.target.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.setCustomValidity('El correo electrónico no es válido');
  } else {
    emailInput.setCustomValidity('');
  }
});
const asuntoInput = document.getElementById('asunto');
asuntoInput.addEventListener('input', (event) => {
  const asunto = event.target.value.trim();
  if (asunto.length < 5) {
    asuntoInput.setCustomValidity('El asunto debe contener al menos 5 caracteres');
  } else {
    asuntoInput.setCustomValidity('');
  }
});

const mensajeInput = document.getElementById('message');
mensajeInput.addEventListener('input', (event) => {
  const mensaje = event.target.value.trim();
  if (mensaje.length < 10) {
    mensajeInput.setCustomValidity('El mensaje debe contener al menos 10 caracteres');
  } else {
    mensajeInput.setCustomValidity('');
  }
});

const formulario = document.querySelector('.formulario__contactame');
formulario.addEventListener('submit', (event) => {
  const nombreInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const asuntoInput = document.getElementById('asunto');
  const mensajeInput = document.getElementById('message');
  
  if (!nombreInput.checkValidity()) {
    nombreInput.focus();
    event.preventDefault();
    return;
  }
  
  if (!emailInput.checkValidity()) {
    emailInput.focus();
    event.preventDefault();
    return;
  }
  
  if (!asuntoInput.checkValidity()) {
    asuntoInput.focus();
    event.preventDefault();
    return;
  }
  
  if (!mensajeInput.checkValidity()) {
    mensajeInput.focus();
    event.preventDefault();
    return;
  }
  
  // aquí se puede enviar el formulario
});