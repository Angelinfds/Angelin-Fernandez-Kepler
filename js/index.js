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