console.log("Script loaded");

const title = document.querySelector("h1").textContent;
console.log(title);

const languages = ["Python", "Javascript", "html"];

console.log(languages.length);

const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;


const projData = [
    { title: "Project 1", language: "Python", description: "This is a Python project.", link: "https://example.com/project1" },
    { title: "Project 2", language: "Javascript", description: "This is a Javascript project.", link: "https://example.com/project2" },
    { title: "Project 3", language: "html", description: "This is an HTML project.", link: "https://example.com/project3" }
];

function createProjects(project){
    const card = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = project.title;
    const language = document.createElement("p");
    language.textContent = `Language: ${project.language}`;
    const description = document.createElement("p");
    description.textContent = project.description;
    const link = document.createElement("a");
    link.textContent = "View Project";
    link.href = project.link;
    link.target = "_blank";

    card.appendChild(title);
    card.appendChild(language);
    card.appendChild(description);
    card.appendChild(link);
    card.classList.add("project");
    return card;
}

const projectCard = document.querySelector(".container");
projData.forEach(project => {
    const card = createProjects(project);
    projectCard.appendChild(card);
});

const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", function () {
        const projectTitle = project.querySelector("h3").textContent;
        console.log(projectTitle);
        project.classList.toggle("active-border");
    });
});