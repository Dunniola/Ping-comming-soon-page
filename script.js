const form = document.querySelector("#form")

const button = document.querySelector('#button')

form.addEventListener('submit',(e) => {
e.preventDefault()

const email = document.querySelector('#email').value

document.querySelector('.errorMessage').textContent = ''
document.querySelector('#email').textContent = ''

const resizeButton = document.getElementById('resizeButton');



if(email ===  ""){
    document.querySelector('.errorMessage').textContent = "Whoops! It looks like you forgot to add your email"

     return;
    
} 
 if(!isValidEmail(email)){
    document.querySelector('.errorMessage').textContent = 'Please provide a valid email address'
    button.style.color = 'red'
    return
}

console.log("Email address submitted")
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
 
  



