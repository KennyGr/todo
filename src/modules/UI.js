import { Project } from './Projects'

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
                    <svg class="add-project-button" id="add-project-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
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
