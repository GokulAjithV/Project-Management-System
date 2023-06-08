

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementById('gender').value;
    const color = document.getElementById('inputColor').value;

    resetErrors();

    if (username === '') {
      showError('usernameError', 'Username is required.');
    }

    if (email === '') {
      showError('emailError', 'Email is required.');
    } else if (!isValidEmail(email)) {
      showError('emailError', 'Please enter a valid email address.');
    }

    if (gender === '') {
      showError('genderError', 'Gender is required.');
    }

    if (color === '') {
      showError('colorError', 'Input color is required.');
    }


    if (username !== '' && email !== '' && isValidEmail(email) && gender !== '' && color !== '') {
      alert('Form submitted successfully!');
    }
  }

  function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
  }

  function resetErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }





function validate(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    if ((email.value == "gokulvasu225@gmail.com" && password.value == "Gokul123") || (email.value == "gokul2012053@ssn.edu.in" && password.value == "Gokul123")){
        return true;
    }
    else{
        alert("You've entered wrong Email or Password");
        return false;
    }
}


