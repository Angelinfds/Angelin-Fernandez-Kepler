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

