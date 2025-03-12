// console.log(`La ventana de tu navegador mide: ${window.innerWidth} px`);
// console.log(`La ventana de tu navegador mide: ${window.innerHeight} px`);

/* 📌 window.open() 

    - Nos permite abrir una nueva ventana en el navegador.
    - NOTA: Es posible que el navegador te pida permiso para abrir una nueva ventana.
    
    - Sintaxis: 

        - 1er parámetro: URL de la nueva ventana.
        - 2do parámetro: Nombre de la ventana.
        - 3er parámetro: Opciones de la ventana.

    Ejemplo:

        const abrirVentana = () => {
            window.open(
                "https://www.google.com",
                "Mi nueva ventana",
                "width=500",
                "height=500"
            );
        };

    Ejemplo: 

    - Con .close() podemos cerrar la ventana que hemos abierto.
        
        const cerrarVentana = () => {
          window.close();
        };


/* 📌 Screen Object
    Representa la pantalla del usuario.
    - En este caso si toma en cuenta el monitor
    
    console.log("Ancho de pantalla: ", window.screen.width);
    console.log("Alto de pantalla: ", window.screen.height);
    
*/
