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



function submitForm() {
    document.getElementById("loginForm").submit()
}

document.getElementById('loginSubmit').onclick = function() {
    this.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i>";
    setTimeout(submitForm, 3000); 
}
