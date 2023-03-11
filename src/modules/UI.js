import { Project } from './Projects'
import { Task } from './Task'

export const UI = (() => {
    let displayedProject = Project.projectArray[0];
    let displayedTasks = Project.projectArray[0].taskArray;
    let sidebarToggle = false;
    
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
        <div class="project-container">
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
        <div id="task-container" class="task-container">
            <div class="task-header">
                <h2>Tasks</h2>
                <svg class="add-task-button" id="add-task-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </div>
            <div id="task-list" class="task-list">
            </div>
        </div>
            `

       document.getElementById('add-project-button').addEventListener('click', createProjectModal)
       document.getElementById('add-task-button').addEventListener('click', createTaskModal)
    
       initTasks();
    }

    function renderProjects(projectArray) {
        let projectList = document.getElementById("project-list");
        projectList.innerHTML = '';
        for (let i = 0; i < projectArray.length; i++) {
            let projectDiv = document.createElement("div");
            projectDiv.id = "project" + i;
            projectDiv.classList.add("project-div")
            projectDiv.onclick = () => {
                sidebarToggle = false;
                displayedProject = projectArray[i]
                renderTasks(projectArray[i]);
            };
            let individualProject = document.createElement("li");
            individualProject.innerHTML = projectArray[i].name;
            individualProject.classList.add("project-text")
            projectDiv.appendChild(individualProject);

            projectList.appendChild(projectDiv)
        }
    }

    function highlightProject() {
        for (let projectNumber in Project.projectArray) {
            if (document.getElementById("project" + projectNumber)) {
                if (Project.projectArray[projectNumber].taskArray === displayedTasks) {
                    document.getElementById("project" + projectNumber).classList.add("selected-project");
                } else {
                    document.getElementById("project" + projectNumber).classList.remove("selected-project");
                }
            }
        }
    };

    function initTasks() {
        if (Project.projectArray[0]) {
            let taskList = document.getElementById("task-list");
            renderTasks(Project.projectArray[0]);
        }
    };

    function renderTasks(project) {
        let taskList = document.getElementById("task-list");
        taskList.innerHTML = '';

        let itemContainer = document.createElement("div");
        itemContainer.id = "item-container";
        itemContainer.classList.add("item-container");

        let taskListSection = document.getElementById("task-list");
        let taskSidebar = document.createElement("div");
        taskSidebar.id = "task-sidebar";
        taskSidebar.classList.add("task-sidebar", "task-sidebar-hidden");
        taskListSection.appendChild(taskSidebar);

        if (!project.taskArray[0]) {
            let noTaskMessage = document.createElement("p");
            noTaskMessage.innerText = "No tasks yet!";
            noTaskMessage.classList.add("notask-message");
            taskList.appendChild(noTaskMessage);
            return
        };

        for (let i = 0; i < (project.taskArray).length; i++) {
            let taskItem = document.createElement("div");
            taskItem.classList.add("task-item")
            if (project.taskArray[i].complete === true) {
                taskItem.classList.add("task-complete");
            };
            let taskInfo = document.createElement("div");
            taskInfo.classList.add("task-info-container");
            taskInfo.innerHTML = `
            <div class="task-name" id="task-name"><p>${project.taskArray[i].title}</p></div>
            <div class="task-desc" id="task-desc"><p>${project.taskArray[i].description}</p></div>
            <div class="task-prio" id="task-prio"><p>${project.taskArray[i].priority}</p></div>
            <div class="task-date" id="task-date"><p>${project.taskArray[i].dueDate}</p></div>
            `
            taskInfo.onclick = () => {
                if ((sidebarToggle === true) && (project.taskArray[i].title !== document.getElementById("side-title").innerHTML)) {
                    setSidebarInfo(project.taskArray[i], taskSidebar);
                } else {
                    toggleTaskSidebar(project.taskArray[i], taskSidebar);
                }
            }

            let checkDiv = document.createElement("div");
            checkDiv.id = "task-checkbox"
            checkDiv.classList.add("task-checkbox")

            let completeCheck = document.createElement("input")
            completeCheck.id="checkbox" + i
            completeCheck.type = "checkbox"
            completeCheck.checked = project.taskArray[i].complete;
            completeCheck.onchange = () => {
                project.taskArray[i].complete = !project.taskArray[i].complete
                if (document.getElementById("side-title")) {
                    if (project.taskArray[i].title === document.getElementById("side-title").innerHTML) {
                        setSidebarInfo(project.taskArray[i], taskSidebar)
                    }
                }
                if (project.taskArray[i].complete === true) {
                    taskItem.classList.add("task-complete")
                    Task.updateComplete(document.getElementById("checkbox" + i))
                } else {
                    taskItem.classList.remove("task-complete")
                    Task.updateComplete(document.getElementById("checkbox" + i))
                };

            }
            checkDiv.appendChild(completeCheck);

            taskItem.appendChild(checkDiv);
            taskItem.appendChild(taskInfo);

            itemContainer.appendChild(taskItem);
        }
        displayedTasks = project.taskArray;
        taskList.appendChild(itemContainer);
        highlightProject();
    };

    // function renderSidebar(task) {
    //     let sidebar = document.getElementById("task-sidebar")
    //     sidebar.innerHTML= `
    //         <div class="sidebar-info" id="sidebar-info">
    //             <h2>${task.title}</h2>
    //             <p>${task.description}</h2>
    //             <p>${task.dueDate}</h2>
    //             <p>${task.priority}</h2>
    //             <p>Status: ${taskStatus}</h2>
    //         </div>
    //     `
    // }

    function setSidebarInfo(task, sidebarElement) {
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        sidebarElement.innerHTML= `
            <div class="sidebar-info" id="sidebar-info">
                <h2 id="side-title">${task.title}</h2>
                <p>${task.description}</h2>
                <p>${task.dueDate}</h2>
                <p>${task.priority}</h2>
                <p>Status: ${taskStatus}</h2>
            </div>
        `
    }

    function toggleTaskSidebar(task, sidebarElement) {
        let itemContainer = document.getElementById("item-container");
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        sidebarElement.innerHTML= `
            <div class="sidebar-info" id="sidebar-info">
                <h2 id="side-title">${task.title}</h2>
                <p>${task.description}</h2>
                <p>${task.dueDate}</h2>
                <p>${task.priority}</h2>
                <p>Status: ${taskStatus}</h2>
            </div>
        `
        if (sidebarToggle === false) {
            sidebarElement.classList.remove("task-sidebar-hidden")
            sidebarElement.classList.add("task-sidebar-visible")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = (e) => {
                e.stopPropagation();
                console.log("open")
            }
        } else {
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = () => {
            }
        }
    }

    function createProjectModal() {
        let projectName = prompt("Project name?");
        if (projectName === "" || projectName === null) {
            return;
        }
        Project.createProject(projectName);
        renderProjects(Project.projectArray);
        renderTasks(Project.projectArray[(Project.projectArray.length - 1)])
    };

    function createTaskModal() {
        let taskName = prompt("Task name?");
        if (taskName === "" || taskName === null) {
            return;
        }
        Task.createTask(taskName, displayedProject);
        renderTasks(displayedProject);
    };

    function renderPage() {
        renderHeader();
        renderMainContainer();
        renderProjects(Project.projectArray);
    }

    return { renderPage }
})();
