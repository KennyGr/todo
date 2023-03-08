import { Project } from './Projects'
import PlusCircle from '../../img/plus-circle.svg'

export const UI = (() => {
    function renderHeader() {
        let headerContainer = document.createElement("div");
        headerContainer.id = "header-container";
        headerContainer.classList.add("header-container");
        document.body.appendChild(headerContainer);

        headerContainer.innerHTML = `
        <h1 class="header-text">To-Do List</h1>
        `
    }

    function renderMainContainer() {
        let mainContainer = document.createElement("div");
        mainContainer.id = "main-container";
        mainContainer.classList.add("main-container");
        document.body.appendChild(mainContainer);

        mainContainer.innerHTML = `
        <div class="project-list">
            <div class="sidebar-items">
                <div id="projects-bar" class="projects-bar">
                    <p class="sidebar-item">Projects</p>
                    <img class="add-project-button" id="add-project-button" src=${PlusCircle}/>
                </div>
                <div class="project-list" id="project-list">
                </div>
            </div>
        </div>
        <div id="task-container" class="task-container">
            <div class="task-header">
                <h2>Tasks</h2>
            </div>
            <div id="task-list" class="task-list">
            </div>
        </div>
        `

       document.getElementById('add-project-button').addEventListener('click', createProjectModal)
    
       initTasks();
    }

    function renderProjects(projectArray) {
        let projectList = document.getElementById("project-list");
        projectList.innerHTML = '';
        for (let i = 0; i < projectArray.length; i++) {
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("project-div")
            projectDiv.onclick = () => {renderTasks(projectArray[i])};
            let individualProject = document.createElement("li");
            individualProject.innerText = projectArray[i].name;
            individualProject.classList.add("project-text")
            projectDiv.appendChild(individualProject);

            projectList.appendChild(projectDiv)
        }
    }

    function initTasks() {
        if (Project.projectArray[0]) {
            let taskList = document.getElementById("task-list");
            renderTasks(Project.projectArray[0]);
        }
    };

    function renderTasks(project) {
        let taskList = document.getElementById("task-list");
        taskList.innerHTML = '';

        if (!project.taskArray[0]) {
            let noTaskMessage = document.createElement("p");
            noTaskMessage.innerText = "No tasks!"
            taskList.appendChild(noTaskMessage);
            return
        };

        for (let i = 0; i < (project.taskArray).length; i++) {
            let task = document.createElement("p");
            task.innerText = project.taskArray[i];
            task.classList.add("task-item")
            taskList.appendChild(task);
        }
    };

    function createProjectModal() {
        let projectName = prompt("Project name?");
        if (projectName === "" || projectName === null) {
            return;
        }
        Project.createProject(projectName);
        renderProjects(Project.projectArray);
    };

    function renderPage() {
        renderHeader();
        renderMainContainer();
        renderProjects(Project.projectArray);
    }

    return { renderPage }
})();
