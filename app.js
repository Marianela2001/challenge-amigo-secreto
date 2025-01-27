// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos un array para almacenar los nombres de los amigos que se van incluyendo a la lista
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        mostrarError("Por favor, ingrese un nombre antes de añadirlo");
        return;
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        mostrarError(`El nombre "${nombre}" ya está en la lista`);
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Crear elementos <li> para cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.classList.add("name-item");

        // Crear un contenedor para el nombre y el botón
        const nombreSpan = document.createElement("span");
        nombreSpan.textContent = amigo;

        // Agregar un botón para eliminar nombres
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.className = "btn-delete";
        btnEliminar.setAttribute("aria-label", `Eliminar a ${amigo}`);
        btnEliminar.onclick = () => eliminarAmigo(index); // Llama a la función para eliminar

        // Añadir el nombre y el botón al <li>
        li.appendChild(nombreSpan);
        li.appendChild(btnEliminar);

        // Añadir el <li> al listado
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el nombre del array según el índice
    actualizarListaAmigos(); // Actualiza la lista visual
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que la lista tenga al menos un amigo
    if (amigos.length === 0) {
        mostrarError("La lista está vacía. Agrega al menos un nombre para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = mensaje;
    mensajeError.style.display = "block";

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.style.display = "none";
    }, 3000);
}
