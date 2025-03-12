/*
    📌 Named Imports

    - Podemos exportar variables, funciones, clases, etc.
    - Para exportar usamos la palabra reservada export.
    - Se puede exportar con un nombre diferente al original.
    
    Ejemplo:
    
    import { nombre as importaDo } from "./namedExport.js";
    import { obtenerPost } from "./namedExport.js";
    
    console.log(importaDo);
    console.log(obtenerPost());
*/

/*
    📌 Namespace Imports

    - Importamos todo lo que se exporta en un archivo mediante un alias.
    - Se usa el * para importar todo.
    - Se puede renombrar el namespace.
    - Se accede a las variables con el nombre del namespace y funciona como un objeto.
    Ejemplo: 
    
    import * as namedExport from "./namedExport.js";
    
    console.log(namedExport.nombre);
    console.log(namedExport.obtenerPost());
*/

/*
    📌 Default Imports

    - Importamos la exportación por defecto de un archivo. 
    - Se puede renombrar la exportación por defecto.
    - Solamente se puede exportar una vez por defecto.
    - Se puede importar con cualquier nombre.
    Ejemplo:

    import defaultExport from "./defaultExport.js";
    
    defaultExport();
*/
