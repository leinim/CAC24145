document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;            
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.textContent = "";
    passwordError.textContent = "";            

    if (!regexEmail.test(email)) {
        emailError.textContent = "El email no cumple con los requisitos.";
        return;
    }

    if (password.trim() === "") {
        passwordError.textContent = "La contraseña no puede estar vacia.";
        return;
    }
    alert("EL formulario se envio con exito");
});