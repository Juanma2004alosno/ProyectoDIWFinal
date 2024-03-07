(function () {
  'use strict';
  
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');
  
  // Función para iniciar sesión
  function login(username, password) {
    // Verificar si las credenciales son correctas
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
      // Si las credenciales son correctas, redirigir al usuario a la página de la tienda
      window.location.href = 'tienda.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
  
  // Función para registrar un nuevo usuario
  function register(username, password) {
    // Almacenar las credenciales del nuevo usuario en el almacenamiento local
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Usuario registrado correctamente');
  }
  
  // addEventListener para inicio de sesion
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (loginForm.checkValidity()) {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      login(username, password);
    }
    loginForm.classList.add('was-validated');
  });
  
  // addEventListener para registro
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (registerForm.checkValidity()) {
      var newUsername = document.getElementById('newUsername').value;
      var newPassword = document.getElementById('newPassword').value;
      register(newUsername, newPassword);
    }
    registerForm.classList.add('was-validated');
  });
})();
