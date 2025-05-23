const footer = document.createElement("footer");

const body = document.querySelector("body");

body.appendChild(footer);

const today = new Date();

const year = today.getFullYear();

const footerComponent = document.querySelector("footer");

const copyright = document.createElement("p");

footerComponent.appendChild(copyright);

copyright.innerHTML = `\u00A9 Angelin Fernandez ${year}`;

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

const skillSection = document.querySelector("#skills");

const skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement("li");

    skill.textContent = skills[i];

    skillsList.appendChild(skill);
}

const botton = document.getElementById("color");
  
const chageColor = document.getElementById("Experience");


let flag = false;
botton.addEventListener("click", () => {
    if (flag) {
        chageColor.style.backgroundColor = "white";
        flag = false;
    } else {
        chageColor.style.backgroundColor = "lightblue";
        flag = true;
    }
});


const respuestas = document.getElementById("formularioForm");

respuestas.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = event.target.name.value;
    const email = event.target.email.value;
    const mensajeImput = event.target.message.value;

    const sectionMensaje = document.getElementById("messages");
    const lista = sectionMensaje.querySelector("ul");

    const mensaje = document.createElement("li");
    mensaje.innerHTML = `<strong>${nombre}</strong> <br> <a href="mailto:${email}">${email}</a> <br> <strong>${mensajeImput}</strong>`;

    lista.appendChild(mensaje);

    const buttonremove = document.createElement("button");
    buttonremove.textContent = "Delete";
    buttonremove.classList.add("button");
    buttonremove.addEventListener("click", function () {
        lista.removeChild(mensaje); 
    });

    mensaje.appendChild(buttonremove);
    event.target.reset();
})

async function mostrarGatos() {
  try {
    console.log("Iniciando petición a la API de gatos..."); 
    
    // Realizar la petición a la API de gatos con clave API
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "DEMO-API-KEY"
      }
    });
    
    // Verificar si la respuesta es correcta
    if (!response.ok) throw new Error(`Error al obtener los datos: ${response.status}`);
    
    // Convertir la respuesta a formato JSON
    const data = await response.json();
    console.log("Datos recibidos:", data.length, "razas de gatos");
    
    // Verificar si hay datos
    if (!data || data.length === 0) {
      console.error("No se recibieron datos de la API");
      return;
    }

    // Seleccionar el elemento donde se mostrarán las razas de gatos
    const listaGatos = document.getElementById("cats-list");    

    // Verificar si el elemento existe
    if (!listaGatos) {
      console.error("No se encontró el elemento con ID 'cats-list'");
      return;
    }
    
    // Limpiar la lista antes de añadir nuevos elementos
    listaGatos.innerHTML = "";

    // Mostrar solo las primeras 5 razas para no sobrecargar la página
    data.slice(0, 10).forEach((gato, index) => {
      console.log(`Procesando gato #${index + 1}:, gato.name`);
      
      // Crear un elemento de lista para cada gato
      const item = document.createElement("li");
      
      // Añadir información HTML SOLO con datos de texto (sin imágenes)
      item.innerHTML = `
        <h3>${gato.name || "Nombre no disponible"}</h3>
        <p><strong>Temperamento:</strong> ${gato.temperament || "No disponible"}</p>
        <p><strong>Origen:</strong> ${gato.origin || "No disponible"}</p>
        <p><strong>Descripcion:</strong> ${gato.description || "No disponible"}</p>
        <p><strong>Esperanza de Vida:</strong> ${gato.life_span || "No disponible"}</p>
      `;
      
      // Añadir el elemento a la lista de gatos
      listaGatos.appendChild(item);
    });
    
    console.log("Proceso completado con éxito");

  } catch (error) {
    // Mostrar en consola cualquier error que ocurra
    console.error("Error en la función mostrargatos:", error);
    
    // Mostrar mensaje de error en la página
    const listaGatos = document.getElementById("cats-list");
    if (listaGatos) {
      listaGatos.innerHTML = `<li style="color: red;">Error al cargar datos de gatos: ${error.message}</li>`;
    }
  }
}

// Llamar a la función mostrargatos cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado, llamando a mostrargatos()");
  mostrarGatos();
});

// También podemos agregar un botón para recargar los datos si falla
document.addEventListener("DOMContentLoaded", () => {
  const catApiSection = document.getElementById("cats");
  if (catApiSection) {
    const reloadButton = document.createElement("button");
    reloadButton.textContent = "Recargar datos de gatos";
    reloadButton.classList.add("button");
    reloadButton.addEventListener("click", mostrarGatos);
    catApiSection.appendChild(reloadButton);
  }
});

