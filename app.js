// Creando el array para almacenar nombres
let amigos = [];

// Funcion para agregar amigos a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        actualizarLista();
    };  
};

// Funcion para actualizar la lista de amigos
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (i = 0 ; i < amigos.length; i++){
        let itemNuevo = document.createElement('li');
        itemNuevo.textContent = amigos[i];
        listaAmigos.appendChild(itemNuevo); 
    }
};