const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const cPasswordInput = document.querySelector('#com-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

function validate() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const cPassword = cPasswordInput.value;
    
    if(username===''){
               setError(usernameInput,"User name required");
    }
    else{
        setSuccess(usernameInput)
    }

    if(validateEmail(email)){
        setSuccess(emailInput)
    }
    else{
        setError(emailInput)
    }

    if(password.length<8){
        setError(passwordInput,"must be greater than 8 character")
    }
    else{
        setSuccess(passwordInput)
    }

    if(cPassword===password){
        setSuccess(cPasswordInput)
        
    }
    else{
        setError(cPasswordInput,"password must be same")
    }
    console.log(username + " " + email + " " + password + " " + cPassword);
    
}

function setError(element,error){
      const inputError = element.parentElement;
      const errorElement = inputError.querySelector('.error');

      errorElement.innerText = error;
      inputError.classList.add('error');
      inputError.classList.remove('success');
      
}

function setSuccess(element){
    const inputError = element.parentElement;
    const errorElement = inputError.querySelector('.error');

    errorElement.innerText = '';
    inputError.classList.remove('error');
    inputError.classList.add('success'); 
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };