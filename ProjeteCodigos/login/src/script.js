function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "joao" && password === "123") {
        alert("Seja bem-vindo " + username + ".");
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    alert("Usuário cadastrado com sucesso!");
}
function showRegisterForm() {
   alert("Cadastre-se selecionado."); 
}
