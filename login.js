// Toggle Login/Signup section
let switchToSignup = document.querySelector('#switchToSignup');
let switchToLogin = document.querySelector('#switchToLogin');

switchToSignup.addEventListener('click', function (e)  {
    $('#loginSection').toggleClass("d-none"); 
    $('#signupSection').toggleClass("d-none");       
});

switchToLogin.addEventListener('click', function (e)  {
    $('#loginSection').toggleClass("d-none"); 
    $('#signupSection').toggleClass("d-none");       
});