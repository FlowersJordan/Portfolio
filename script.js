console.log("Script loaded");

const title = document.querySelector("h1").textContent;
console.log(title);

const languages = ["Python", "Javascript", "html"];

console.log(languages.length);

const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", function () {
        const projectTitle = project.querySelector("h3").textContent;
        console.log(projectTitle);
        project.classList.toggle("active-border");
    });
});

const projData = [
    { title: "Project 1", language: "Python", description: "This is a Python project." },
    { title: "Project 2", language: "Javascript", description: "This is a Javascript project." },
    { title: "Project 3", language: "html", description: "This is an HTML project." }
];

function displayProjects(project){
    const card = document.createElement("article");
    card.textContent = `${project.title} - ${project.language}: ${project.description}`;
    return card;
};

const projectCard = document.querySelector("#container");
projData.forEach(project => {
    const card = displayProjects(project);
    projectCard.appendChild(card);
});
