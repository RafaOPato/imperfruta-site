const loginProdutor = "17998142207";
const senhaProdutor = "produtor123";

const loginIndustria = "11222333000144";
const senhaIndustria = "industria123";

document.getElementById("mostra-login-produtor").textContent = "Login: " + loginProdutor;
document.getElementById("mostra-senha-produtor").textContent = "Senha: " + senhaProdutor;
document.getElementById("mostra-login-industria").textContent = "Login: " + loginIndustria;
document.getElementById("mostra-senha-industria").textContent = "Senha: " + senhaIndustria;

const formularioLogin = document.querySelector("form");
const campoLogin = document.getElementById("identificador");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("erro");

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (campoLogin.value === loginProdutor && campoSenha.value === senhaProdutor) {
        window.location.href = "meusprodutos.html";
    } else if (campoLogin.value === loginIndustria && campoSenha.value === senhaIndustria) {
        window.location.href = "lotsnafeira.html";
    } else {
        mensagemErro.hidden = false;
    }
});
