const iniciarSesion = () => {
    let user = prompt('Por Favor inicia sesion con tu nombre');

    if(user === '' || user === undefined || !isNaN(user)) {
        alert('Por favor ingresa un nombre valido');
        iniciarSesion();
    } else {
        document.cookie = `usuario=${user}`;
        alert('Sesión iniciada correctamente')
    }
}

let usuario;

const cookies = document.cookie.split(';'); 

cookies.forEach(cookie => {
    let propiedad = cookie.split('=')[0];

    if(propiedad === 'usuario') {
        usuario = cookie.split('=')[1];
    }
})

if(usuario) {
    alert(`Bienvenido ${usuario}`);
} else {
    alert('Por favor inicia sesión')
}