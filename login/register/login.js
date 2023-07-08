// app.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
  
    // Check if user data exists
    if (userData.length > 0) {
      displayLoginForm();
    } else {
      displayRegisterForm();
    }
  
    // Display login form when "Register" link is clicked
    const registerLink = document.getElementById('register-link');
    registerLink.addEventListener('click', function(event) {
      event.preventDefault();
      displayRegisterForm();
    });
  
    // Display register form when "Login" link is clicked
    const loginLink = document.getElementById('login-link');
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      displayLoginForm();
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      const user = userData.find(user => user.email === email && user.password === password);
      if (user) {
        console.log('Login successful');
        loginForm.reset();
        redirectToHomepage();
      } else {
        displayErrorMessage('Invalid email or password', loginForm);
      }
    });
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
  
      if (userData.some(user => user.email === email)) {
        displayErrorMessage('Email already registered', registerForm);
      } else {
        userData.push({ email, password });
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Registration successful');
        registerForm.reset();
        redirectToHomepage();
      }
    });
  
    function displayLoginForm() {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    }
  
    function displayRegisterForm() {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    }
  
    function displayErrorMessage(message, form) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      form.appendChild(errorMessage);
  
      setTimeout(function() {
        errorMessage.remove();
      }, 3000);
    }
  
    function redirectToHomepage() {
      window.location.href = '../../home/index.html';
    }
  });
  