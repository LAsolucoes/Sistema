/* MODAL ADICIONAR */ /* categoria - subcategoria - marcas */
/* const btnOpenModalCategoria = document.querySelector("#btn-open-modal-categoria")
const btnOpenModalSubCategoria = document.querySelector("#btn-open-modal-subcategoria")
const btnOpenModalMarcas = document.querySelector("#btn-open-modal-marcas")

const btnCancelFecharModalCategoria = document.querySelector("#btn-cancel-categoria")
const btnCancelFecharModalSubCategoria = document.querySelector("#btn-cancel-subcategoria")
const btnCancelFecharModalMarcas = document.querySelector("#btn-cancel-marcas")

const modalAddCategoria = document.querySelector("#modalAddCategoria")
const modalAddSubCategoria = document.querySelector("#modalAddSubCategoria")
const modalAddMarcas  = document.querySelector("#modalAddMarcas")

function abrirModalAddCategoria() {
  modalAddCategoria.style.display = "block"
  }btnOpenModalCategoria.addEventListener("click" , abrirModalAddCategoria)

function fecharModalAddCategoria(){
  modalAddCategoria.style.display = "none"
}btnCancelFecharModalCategoria.addEventListener("click" , fecharModalAddCategoria)


function abrirModalAddSubCategoria() {
  modalAddSubCategoria.style.display = "block"
  }btnOpenModalSubCategoria.addEventListener("click" , abrirModalAddSubCategoria)

function fecharModalAddSubCategoria(){
  modalAddSubCategoria.style.display = "none"
}btnCancelFecharModalSubCategoria.addEventListener("click" , fecharModalAddSubCategoria) 


function abrirModalAddMarcas() {
   modalAddMarcas.style.display = "block"
}btnOpenModalMarcas.addEventListener("click" , abrirModalAddMarcas)

function fecharModalAddMarcas() {
  modalAddMarcas.style.display = "none"
  
}btnCancelFecharModalMarcas.addEventListener("click" , fecharModalAddMarcas) */
  




const divToogleAtribuicoes = document.querySelector("#toggle-atribuicoes")
const modalAtivoInfo = document.querySelector("#modal-info-ativo")



function openModalInfo(event) {
const btnIconClicado =  event.target.id
 
switch (btnIconClicado) {
  case "open-modal-ativo":
      modalAtivoInfo.classList.remove("hidden")
    break;

  default:
    break;
}


}divToogleAtribuicoes.querySelectorAll("i").forEach((icons)=>{
  icons.addEventListener("click" , openModalInfo)
})
 










/* MODAL INFORMAÇÃO */
/* function abrirModalInfo(modalInfo) {
  let abrirModalInfo = document.getElementById(modalInfo);

  abrirModalInfo.style.display = "block"; 
} */



/* function fecharModalInfo(modalInfo) {
  let fecharModalInfo = document.getElementById(modalInfo)
  fecharModalInfo.style.display = "none"
  
} */
