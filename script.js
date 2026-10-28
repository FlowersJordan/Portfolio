console.log("Script loaded");

const title = document.querySelector("h1");
console.log(title);

const languages = ["Python", "Javascript", "html"]

console.log(languages.length);

let year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", function () {
        let header = project.querySelector("h3");
        console.log(header);
        project.classList.toggle("active-border");
    });
});