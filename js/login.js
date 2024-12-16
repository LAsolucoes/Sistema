const loader = document.querySelector("#loader");

document
  .getElementById("formularioLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let inputLogin = document.getElementById("login");
    let inputSenha = document.getElementById("senha");
    let erroCredenciais = document.getElementById("erroCredenciais");

    if (
      (inputLogin.value == "adm" || inputLogin.value == "adm@gmail.com") &&
      inputSenha.value == "123"
    ) {
      loader.style.display = "block";
      erroCredenciais.style.display = "none";
      setTimeout(() => {
        location.href = "/pages/categorias.html";
        return;
      }, 2000);
    } else {
      erroCredenciais.style.display = "block";
      inputLogin.value = "";
      inputSenha.value = "";
      inputLogin.focus();
    }
  });
