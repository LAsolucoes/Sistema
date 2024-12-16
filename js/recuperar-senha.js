const btnRetornarTelaLogin = document.querySelector("#btn-retornar-login");
const divMsgEmailInvalido = document.querySelector("#erroEmailInvalido");
const divMsgEmailEnviado = document.querySelector("#sucessoEmailEnvidado");
const btnRecuperarSenha = document.querySelector("#btn-recuperar-senha");
const loader = document.querySelector("#loader");
const inputEmail = document.querySelector("#email");

function retornarLogin(event) {
  event.preventDefault();
  loader.style.display = "block";
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);
}
btnRetornarTelaLogin.addEventListener("click", retornarLogin);

function recuperarSenha(event) {
  event.preventDefault();
  if (inputEmail.value === "alex@gmail.com") {
    divMsgEmailInvalido.style.display = "none"
    divMsgEmailEnviado.style.display = "block";

    setTimeout(() => {
      loader.style.display = "block";
    },1000);

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
  } else {
    loader.style.display = "none";
    divMsgEmailInvalido.style.display = "block";
    inputEmail.focus();
  }
}
btnRecuperarSenha.addEventListener("click", recuperarSenha);
