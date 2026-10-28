console.log("Script loaded");

const title = document.querySelector("h1");
console.log(title);

let array = ["Python", "Javascript", "html"]

console.log(array.length);

let year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", function () {
        console.log("Project clicked");
        project.style.border = "2px solid navy";
    });
});