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
        if(amigos.length == 1){
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = '';
        }
        let itemNuevo = document.createElement('li');
        itemNuevo.textContent = amigos[i];
        listaAmigos.appendChild(itemNuevo); 
    }
};

// Funcion para sortear amigo
function sortearAmigo () {
    if(amigos.length < 2){
        alert('Cantidad de amigos insuficiente');
    } else {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es ${amigos[amigoAleatorio]}`;
        listaAmigos.innerHTML = '';
        amigos = [];
    }
}