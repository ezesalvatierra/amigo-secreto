// Creando el array para almacenar nombres
let amigos = [];

// Funcion para agregar amigos a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = ''
    }
    console.log(amigo);
    console.log(amigos);
}