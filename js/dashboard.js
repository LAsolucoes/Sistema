const loader = document.querySelector("#loader");


document.addEventListener("DOMContentLoaded", () => {
  const dashboardContainer = document.querySelector("#dashboard-container")
  if (dashboardContainer) {

      fetch("/templates/dashboard.html")
          .then(response => response.text())
          .then(data => {
             dashboardContainer.innerHTML = data 





              const loader = document.querySelector("#loader");
              const aside = document.querySelector("aside");
              const divSidebar = document.querySelector("#sidebar");
              const divSidebarTitle = document.querySelector("#sidebar-title");
              const btnCloseSidebar = document.querySelector("#close-sidebar");
              const btnOpenSidebar = document.querySelector("#open-sidebar");
              const divSubMenu = document.querySelector("#sub-menu-cadastro")
              
              function closeSidebar() {
                btnCloseSidebar.classList.add("hidden");
                btnOpenSidebar.classList.remove("hidden");
                aside.style.width = "auto";
                divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                  spanSidebar.style.display = "none";
                });
                divSidebar.querySelectorAll("i").forEach((iconsSidebar) => {
                  iconsSidebar.style.marginRight = "0px";
                });
                divSidebar.querySelectorAll(".sub-menu-sidebar").forEach((bordaSidebar) => {
                  bordaSidebar.style.marginLeft = "0px";
                });
              }
              btnCloseSidebar.addEventListener("click", closeSidebar);
              
              function openSidebar() {
                btnOpenSidebar.classList.add("hidden");
                btnCloseSidebar.classList.remove("hidden");
                aside.style.width = "225px";
              
                divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                  spanSidebar.style.display = "inline";
                });
                divSidebar.querySelectorAll("i").forEach((iconsSidebar) => {
                  iconsSidebar.style.marginRight = "5px";
                });
                divSidebar.querySelectorAll(".sub-menu-sidebar").forEach((bordaSidebar) => {
                  bordaSidebar.style.marginLeft = "17px";
                });
              }
              btnOpenSidebar.addEventListener("click", openSidebar);
              
              function checkTamanhoDisplay() {
                if (window.innerWidth <= 768) {
                  closeSidebar();
                } else {
                  openSidebar();
                }
              }
              window.addEventListener("resize", checkTamanhoDisplay);
              
              /* ********************SIDEBAR******************************* */
              /* Função que abre e fecha o subMenu da Categoria do sidebar */
              function openCloseSubMenuSidebar(menuId) {
                const subMenuSidebar = document.querySelector(menuId);
                if (subMenuSidebar) {
                  subMenuSidebar.classList.toggle("hidden");
                }
              }
              document
                .querySelector("#menu-cadastros")
                .addEventListener("click", () =>
                  openCloseSubMenuSidebar("#sub-menu-cadastro")
                );
              document
                .querySelector("#menu-estoque")
                .addEventListener("click", () =>
                  openCloseSubMenuSidebar("#sub-menu-estoque")
                );
              


                 /* ***********************HEADER************************* */
              /* FUNCAO QUE ALTERNA O TEMA CLICANDO NOS ICON MOON E SUN */
              /* ****************************************************** */
              const btnIconMoon = document.querySelector("#moon");
              const btnIconSun = document.querySelector("#sun");
              const tagHeader = document.querySelector("header");
              
              function temaDark() {
                btnIconMoon.classList.add("hidden");
                btnIconSun.classList.remove("hidden");
                tagHeader.style.backgroundColor = "var(--dark)";
                tagHeader.style.borderBottomColor = "var(--white)";
                tagHeader.querySelectorAll("i").forEach((iconsHeader) => {
                  iconsHeader.style.color = "var(--white)";
                });
                tagHeader.querySelectorAll("span").forEach((spanHeader) => {
                  spanHeader.style.color = "var(--white)";
                });
                aside.style.borderRightColor = "var(--gray-ligth)";
                divSidebarTitle.style.borderBottomColor = "var(--gray-ligth)";
                divSidebar.style.backgroundColor = "var(--dark)";
                divSidebar
                  .querySelector("nav")
                  .querySelectorAll("i")
                  .forEach((iconsSidebar) => {
                    iconsSidebar.style.color = "var(--white)";
                  });
                divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                  spanSidebar.style.color = "var(--white)";
                });
              }
              btnIconMoon.addEventListener("click", temaDark);
              
              function temaClaro() {
                btnIconSun.classList.add("hidden");
                btnIconMoon.classList.remove("hidden");
                tagHeader.style.backgroundColor = "var(--white)";
                tagHeader.style.borderBottomColor = "var(--black-borde)";
                tagHeader.querySelectorAll("i").forEach((iconsHeader) => {
                  iconsHeader.style.color = "var(--gray)";
                });
                tagHeader.querySelectorAll("span").forEach((spanHeader) => {
                  spanHeader.style.color = "var(--gray)";
                });
                aside.style.borderRightColor = "var(--black-borde)";
                divSidebarTitle.style.borderBottomColor = "var(--black-borde)";
                divSidebar.style.backgroundColor = "var(--white)";
                divSidebar
                  .querySelector("nav")
                  .querySelectorAll("i")
                  .forEach((iconsSidebar) => {
                    iconsSidebar.style.color = "var(--gray)";
                  });
                divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                  spanSidebar.style.color = "var(--gray)";
                });
              }
              btnIconSun.addEventListener("click", temaClaro);



              /* ****************************************************** */
              /* ******************HEADER***************************** */
              /* FUNÇÃO QUE ABER E FECHA A MODAL DE ESCOLHER OS TEMAS */
              const btnOpenTemas = document.querySelector("#temas");
              const modalTemas = document.querySelector("#modal-temas");
              const btnCloseModal = document.querySelector("#btn-close-modal");
              
              function openModalTemas() {
                modalTemas.classList.remove("hidden");
              }
              btnOpenTemas.addEventListener("click", openModalTemas);
              
              function closeModalTemas() {
                modalTemas.classList.add("hidden");
              }
              btnCloseModal.addEventListener("click", closeModalTemas);
              
              function clickBackgroundCloseModalTemas(event) {
                if (event.target === modalTemas) {
                  modalTemas.classList.add("hidden");
                }
              }
              modalTemas.addEventListener("click", clickBackgroundCloseModalTemas);
              
             
              
              /* ***********FUNÇÃO QUE ALTERNA O TEMA PELA MODAL********************/
              /* *********FUNCAO QUE ALTERNA O TEMA GERAL DO CONTEUDO************* */
              const selectTema = document.querySelector("#select-tema");
              const btnSalvarTemaModal = document.querySelector("#btn-salvar-tema-modal");
              function selectModalTema() {
                switch (selectTema.value) {
                  case "1":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                    
                      btnIconMoon.classList.remove("hidden");
                      btnIconSun.classList.add("hidden");
                      tagHeader.style.backgroundColor = "var(--white)";
                      tagHeader.querySelectorAll("i").forEach((iconsHeader) => {
                        iconsHeader.style.color = "var(--gray)";
                      });
                      tagHeader.querySelectorAll("span").forEach((spanHeader) => {
                        spanHeader.style.color = "var(--gray)";
                      });
                      divSidebar.style.backgroundColor = "var(--white)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconsSidebar) => {
                          iconsSidebar.style.color = "var(--gray)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--gray)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
              
                    break;
              
                  case "2":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                     
                      btnIconMoon.classList.add("hidden");
                      btnIconSun.classList.remove("hidden");
                      tagHeader.style.backgroundColor = "var(--dark)";
              
                      tagHeader.querySelectorAll("i").forEach((iconsHeader) => {
                        iconsHeader.style.color = "var(--white)";
                      });
                      tagHeader.querySelectorAll("span").forEach((spanHeader) => {
                        spanHeader.style.color = "var(--white)";
                      });
                      divSidebar.style.backgroundColor = "var(--dark)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconsSidebar) => {
                          iconsSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
                    
                      loader.style.display = "none";
                    }, 1000);
              
                    break;
                }
              }
              btnSalvarTemaModal.addEventListener("click", selectModalTema);
              
              
              /* ***********FUNÇÃO QUE ALTERNA O TEMA PELA MODAL********************/
              /* *********FUNCAO QUE ALTERNA O TEMA DO SIDEBAR******************** */
              const selectTemaSidebar = document.querySelector("#select-tema-sidebar");
              
              function selectModalTemaSidebar() {
                switch (selectTemaSidebar.value) {
                  case "1":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--green)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconsSidebar) => {
                          iconsSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.disply = "none";
                    }, 1000);
              
                    break;
              
                  case "2":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--cyan)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconsSidebar) => {
                          iconsSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
              
                    break;
              
                  case "3":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--yellow)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconsSidebar) => {
                          iconsSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
                    break;
              
                  case "4":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--red)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconssspanSidebar) => {
                          iconssspanSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
                    break;
              
                  case "5":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--orange)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconssspanSidebar) => {
                          iconssspanSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
                    break;
              
                  case "6":
                    loader.style.display = "block";
                    closeModalTemas();
              
                    setTimeout(() => {
                      divSidebar.style.backgroundColor = "var(--indigo)";
                      divSidebar
                        .querySelector("nav")
                        .querySelectorAll("i")
                        .forEach((iconssspanSidebar) => {
                          iconssspanSidebar.style.color = "var(--white)";
                        });
                      divSidebar.querySelectorAll("span").forEach((spanSidebar) => {
                        spanSidebar.style.color = "var(--white)";
                      });
              
                      loader.style.display = "none";
                    }, 1000);
                    break;
                }
              }
              btnSalvarTemaModal.addEventListener("click", selectModalTemaSidebar);
              
              /* **************************HEADER********************************** */
              /* ************************FUNÇÃO FULL SCREEN*************************/
              /* ****************************************************************** */
              const btnIconFullScreen = document.querySelector("#full-screen");
              const btnIconExitFullScreen = document.querySelector("#exit-full-screen");
              function telaFullScreen() {
                if (!document.fullscreenElement) {
                  btnIconFullScreen.classList.add("hidden");
                  btnIconExitFullScreen.classList.remove("hidden");
                  document.documentElement.requestFullscreen();
                }
              }
              btnIconFullScreen.addEventListener("click", telaFullScreen);
              
              function exitTelaFullScreen() {
                if (document.exitFullscreen) {
                  btnIconFullScreen.classList.remove("hidden");
                  btnIconExitFullScreen.classList.add("hidden");
                  document.exitFullscreen();
                }
              }
              btnIconExitFullScreen.addEventListener("click", exitTelaFullScreen);
              
              
              function loaderSidebar(event){
                    event.preventDefault()
                 loader.style.display = "block"

                 setTimeout(()=>{

                    
                    loader.style.display = "none"
                    window.location.href = event.target.closest("a").href
                    console.log(event.target)
                    
                 } , 1000)

              } divSubMenu.querySelectorAll("a").forEach((linksSidebar) =>{
                 linksSidebar.addEventListener("click" , loaderSidebar)
              })
              
              


             
              
             

/* cuidado aqui nao remover as chaves  */
            })
            
        }
      })




            
 

 