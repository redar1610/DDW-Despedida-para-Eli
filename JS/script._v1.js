const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (
        e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda")
    ) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre");

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    }

    // Si se hace clic dentro de la carta abierta, la cierra
    else if (e.target.closest(".envoltura-sobre") && carta.classList.contains("abierta")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");

        carta.classList.add("cerrando-carta");

        setTimeout(() => {
            carta.classList.remove("cerrando-carta");
            carta.classList.remove("abierta");
        }, 500);
    }
});


