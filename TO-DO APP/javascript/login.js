const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
const form = document.getElementById('myForm');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

container.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let isValid = true;

  // Validate username (optional, add your validation logic here)
  // if (!validateUsername(username)) {
  //   isValid = false;
  //   // Add error message for username
  // }

  // Validate email
  if (!validateEmail(email)) {
    isValid = false;
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block'; // Show error message
  } else {
    emailError.textContent = '';
    emailError.style.display = 'none'; // Hide error message if valid
  }

  // Validate password
  if (!validatePassword(password)) {
    isValid = false;
    passwordError.textContent = 'Password must be at least 5 characters long and contain at least one number, one letter, and one special character.';
    passwordError.style.display = 'block'; // Show error message
  } else {
    passwordError.textContent = '';
    passwordError.style.display = 'none'; // Hide error message if valid
  }

  if (isValid) {
    // Form is valid, submit the data (e.g., using AJAX or fetch)
    console.log('Form submitted successfully!');

    // Clear the form after successful submission (optional)
    form.reset();
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const minLength = 5;
  const hasNumber = /\d/;
  const hasLetter = /[a-zA-Z]/;
  const hasSpecialChar = /[!@#$%^&*()]/;
  return password.length >= minLength && hasNumber.test(password) && hasLetter.test(password) && hasSpecialChar.test(password);
}
