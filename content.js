// Encuentra todos los inputs de tipo password
const passwordInputs = document.querySelectorAll('input[type="password"]');

// Cambia el tipo a "text" para hacer visible la contraseña
passwordInputs.forEach(input => {
  input.type = "text";
});
