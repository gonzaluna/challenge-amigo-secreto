let amigos = [];

// Asigna texto a elementos HTML, validando que existan
function asignarElementoTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  if (elementoHtml) {
    elementoHtml.innerHTML = texto;
  } else {
    console.warn(`El elemento '${elemento}' no existe en el DOM.`);
  }
}

// Agrega títulos al HTML
asignarElementoTexto("h1", "Amigo Secreto");
asignarElementoTexto("h2", "Digite el nombre de sus Amigos");

// Muestra la lista de amigos en el <ul>
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  if (!lista) {
    console.warn("El elemento 'listaAmigos' no existe en el DOM.");
    return;
  }

  lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Agrega amigos al array y actualiza la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  if (!input) {
    console.warn("El elemento 'amigo' no existe en el DOM.");
    return;
  }

  let amigo = input.value.trim();

  if (amigo === "") { 
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigo);
  console.log(amigos);

  input.value = ""; // Limpia el input
  mostrarAmigos();
}

// Sortea un amigo y limpia la lista después
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
  } else {
    console.warn("El elemento 'resultado' no existe en el DOM.");
  }

  // Limpiar la lista y el array de amigos después del sorteo
  amigos = [];
  mostrarAmigos();
}

