const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section");
const imagenPapelera = document.querySelector(".imagen-papelera");

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", event => {
    console.log("Estoy arrastrando el párrafo " + parrafo.innerText);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const elementoFantasma = document.createElement("img");
    elementoFantasma.src = "ruta_de_la_imagen_fantasma.jpg"; // Reemplaza con la ruta de la imagen fantasma
    elementoFantasma.classList.add("dragging"); // Agrega la clase "dragging" al elemento fantasma
    event.dataTransfer.setDragImage(elementoFantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    console.log("He terminado de arrastrar " + parrafo.innerText);
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  seccion.addEventListener("drop", event => {
    console.log("Drop");
    const idParrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(idParrafo);
    seccion.appendChild(parrafo);
  });
});

imagenPapelera.addEventListener("dragover", event => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
});

imagenPapelera.addEventListener("drop", event => {
  console.log("Drop en la papelera");
  const idParrafo = event.dataTransfer.getData("id");
  const parrafo = document.getElementById(idParrafo);
  parrafo.remove();
});
