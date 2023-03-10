import { Project } from './Projects'
import { Task } from './Task'
var moment = require('moment');

export const UI = (() => {
    let displayedProject = Project.projectArray[0];
    let displayedTasks = Project.projectArray[0].taskArray;
    let sidebarToggle = false;
    let sidebarTaskDisplayed = {};
    const root = document.querySelector(':root');

    root.style.setProperty('--screen-width', window.innerWidth + "px");

    window.addEventListener("resize", function() {
        root.style.setProperty('--screen-width', window.innerWidth + "px");
    })
    
    function renderModals() {
        let modalContainer = document.createElement("div");
        modalContainer.id = "modal-container";
        modalContainer.classList.add("modal-container");
        document.body.appendChild(modalContainer);

        modalContainer.innerHTML = `
        <div class="project-modal" id="project-modal">
            <div class="project-x-button" id="project-x-button">&times;</div>
            <form class="create-project-form" id="create-project-form">
                <legend>New Project</legend>
                <label for="project-name">Project Name<span class="required">*</span> :</label>
                <input type="text" id="project-name" class="project-input" name="project-name" required>
            </form>
            <button id="create-project-button" class="create-project-button" type="button">Create</button>
        </div>
        <div class="task-modal" id="task-modal">
            <div class="task-x-button" id="task-x-button">&times;</div>
            <form class="create-task-form" id="create-task-form">
                <legend class="task-legend">New Task</legend>
                <div class="task-modal-input">
                    <label for="task-title">Title<span class="required">*</span> :</label>
                    <input class="task-input" type="text" id="task-title" name="task-title" required>
                </div>
                <div class="task-modal-input">
                    <label for="task-desc">Description:</label>
                    <textarea rows="4" cols="50" class="task-input-textarea" type="textarea" id="task-desc" name="task-desc"></textarea>
                </div>
                <div class="task-modal-input">
                    <label for="task-prio">Priority<span class="required">*</span> :</label>
                    <input class="task-input" type="text" id="task-prio" name="task-prio" value="Low">
                </div>
                <div class="task-modal-input">
                    <label for="task-date">Deadline<span class="required">*</span> :</label>
                    <input class="task-input" type="date" id="task-date" name="task-date" value="${moment().format("YYYY-MM-DD")}">
                </div>
            </form>
            <button id="create-task-button" class="create-task-button" type="button">Create</button>
        </div>
        <div class="modal-backdrop" id="modal-backdrop"></div>
        `

        document.getElementById("project-modal").addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("create-project-button").click();
            }
        });

        document.getElementById("task-modal").addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("create-task-button").click();
            }
        });
    }

    function openModal(modal) {
        document.getElementById(modal).classList.add("visible")
        document.getElementById("modal-backdrop").classList.add("visible")
        document.getElementById("main-container").classList.add("blur")
    }

    function closeModal(modal) {
        document.getElementById(modal).classList.remove("visible")
        document.getElementById("modal-backdrop").classList.remove("visible")
        document.getElementById("main-container").classList.remove("blur")
        document.getElementById("create-project-form").reset();
        document.getElementById("create-task-form").reset();
    }

    function closeSidebar() {
        document.getElementById("task-sidebar").classList.remove("task-sidebar-visible")
        document.getElementById("task-sidebar").classList.add("task-sidebar-hidden")
        sidebarToggle = false;

        let taskItems = document.querySelectorAll(".task-item");
        taskItems.forEach((item) => {
            item.classList.remove("task-item-short")
            item.classList.add("task-item-long")
        });
    }

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
                <div class="add-task">
                    <h2>Tasks</h2>
                    <svg class="add-task-button" id="add-task-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                </div>
                <div class="select-date">
                    <p class="due-today" id="due-today">
                    Today
                    </p>
                    <p class="due-today" id="due-today">
                    This Week
                    </p>
                    <p class="due-today" id="due-today">
                    This Month
                    </p>
                </div>
            </div>
            <div id="task-list" class="task-list">
            </div>
        </div>
            `

        document.getElementById('add-project-button').addEventListener('click', createProjectModal)
        document.getElementById('add-task-button').addEventListener('click', createTaskModal)
    
       initTasks();
    }

    function renderFooter() {
        let footerContainer = document.createElement("div");
        footerContainer.id = "footer-container";
        footerContainer.classList.add("footer-container");
        document.body.appendChild(footerContainer);

        footerContainer.innerHTML = `
        <p class="footer-text">????? Kenny 2023</p>
        <div class="theme-container">
            <label for="theme-selector">Color Theme:</label>
            <input type="color" id="theme-selector" class="theme-selector" name="theme-selector" value="#ff7070">
        </div>
        `
        
        document.getElementById('theme-selector').addEventListener('input', changeTheme)
    };

    function changeTheme() {
        let colorValue = (document.getElementById("theme-selector").value);

        function hexToHSL(H) {
            // Convert hex to RGB first
            let r = 0, g = 0, b = 0;
            if (H.length == 4) {
              r = "0x" + H[1] + H[1];
              g = "0x" + H[2] + H[2];
              b = "0x" + H[3] + H[3];
            } else if (H.length == 7) {
              r = "0x" + H[1] + H[2];
              g = "0x" + H[3] + H[4];
              b = "0x" + H[5] + H[6];
            }
            // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;
          
            if (delta == 0)
              h = 0;
            else if (cmax == r)
              h = ((g - b) / delta) % 6;
            else if (cmax == g)
              h = (b - r) / delta + 2;
            else
              h = (r - g) / delta + 4;
          
            h = Math.round(h * 60);
          
            if (h < 0)
              h += 360;
          
            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            let lightShade = "hsl(" + h + "," + s + "%," + (l + 14) + "%)";
          
            return lightShade
          }

        let hslLightValue = hexToHSL(colorValue)

        let textColorCheck = hslLightValue.match(/(?<=,)[^,]+(?=%\))/);

        if (textColorCheck > (64) ) {
            root.style.setProperty('--text', "black");
        } else {
            root.style.setProperty('--text', "white");
        }
        
        root.style.setProperty('--main', colorValue);
        root.style.setProperty('--sub', hslLightValue);
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
        highlightProject();
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
        (project.taskArray).sort(function(a, b) {
                return (b.completedOn).diff(a.completedOn)
            }
        )
        
        let taskList = document.getElementById("task-list");
        taskList.innerHTML = '';

        let itemContainer = document.createElement("div");
        itemContainer.id = "item-container";
        itemContainer.classList.add("item-container");
        if (sidebarToggle === true) {
            itemContainer.onclick = () => {
                closeSidebar();
            }
        }

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
            taskItem.classList.add("task-item", "task-item-long")
            taskItem.id = "task-item"
            taskItem.name = "task-item"

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
            taskInfo.onclick = (e) => {
                e.stopPropagation();
                console.log(window.innerWidth)
                if ((sidebarToggle === true) && (project.taskArray[i].title !== document.getElementById("side-title").innerHTML)) {
                    setSidebarInfo(project.taskArray[i], taskSidebar, e);
                } else {
                    toggleTaskSidebar(project.taskArray[i], taskSidebar);
                }
            }

            let checkDiv = document.createElement("div");
            checkDiv.id = "task-checkbox"
            checkDiv.classList.add("task-checkbox")

            let completeCheck = document.createElement("input")
            completeCheck.classList.add("checkbox-input")
            completeCheck.id="checkbox" + i
            completeCheck.type = "checkbox"
            completeCheck.checked = project.taskArray[i].complete;
            completeCheck.onchange = () => {
                project.taskArray[i].complete;
            }

            checkDiv.onclick = (e) => {
                e.stopPropagation();
                completeCheck.checked = !project.taskArray[i].complete;
                project.taskArray[i].complete = !project.taskArray[i].complete
                if (document.getElementById("side-title")) {
                    if (project.taskArray[i].title === document.getElementById("side-title").innerHTML) {
                        setSidebarInfo(project.taskArray[i], taskSidebar, e)
                    }
                }
                if (project.taskArray[i].complete === true) {
                    project.taskArray[i].completedOn = moment();
                    taskItem.classList.add("task-complete")
                    Task.updateComplete(document.getElementById("checkbox" + i))
                } else {
                    taskItem.classList.remove("task-complete")
                    Task.updateComplete(document.getElementById("checkbox" + i))
                    project.taskArray[i].completedOn = moment("3000-12-25");
                };
                document.getElementById("item-container").classList.add("disable-click")
                if (project.taskArray.length !== 0) {
                    setTimeout(function() {
                        document.getElementById("item-container").classList.remove("disable-click")
                    }, 800);
                    setTimeout(function() {
                        renderTasks(displayedProject);
                    }, 800);
                }
            }
            
            checkDiv.appendChild(completeCheck);

            taskItem.appendChild(checkDiv);
            taskItem.appendChild(taskInfo);

            itemContainer.appendChild(taskItem);
        }
        if (sidebarToggle === true) {
            taskSidebar.classList.remove("task-sidebar-hidden")
            taskSidebar.classList.add("task-sidebar-visible")
            setSidebarInfo(sidebarTaskDisplayed, taskSidebar)
        };
        displayedTasks = project.taskArray;
        taskList.appendChild(itemContainer);
        highlightProject();
    };

    function sidebarHTML(task, taskStatus) {
        return `
                <div class="sidebar-info" id="sidebar-info">
                    <div class="info-container">
                        <input type="text" value="${task.title}" class="side-title" id="side-title">
                        <div class="desc-container">
                            <textarea cols="50" rows="6" class="side-description" id="side-description">${task.description}</textarea>
                        </div>
                        <p class="side-priority" id="side-priority">${task.priority}</p>
                        <div class="due-date-container">
                            <label for="side-due-date">Deadline: </label>
                            <input type="date" class="side-due-date" id="side-due-date" name="side-due-date" value="${moment(task.dueDate).format("yyyy-MM-DD")}">
                        </div>
                        <p class="side-status" id="side-status">Status: ${taskStatus}</p>
                        <button class="delete-button" id="delete-button">
                            <div class="delete-container">
                                <p class="delete-text">Delete</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="sidebar-x-button" id="sidebar-x-button">&times;</div>
                </div>
                `
    }

    function setSidebarInfo(task, sidebarElement, eventTarget) {
        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };
        if (eventTarget !== undefined && task !== sidebarTaskDisplayed) {
            sidebarElement.classList.add("quick-blur");
            sidebarElement.innerHTML= sidebarHTML(task, taskStatus);
            setTimeout(() => {
                sidebarElement.classList.remove("quick-blur");
            }, 50);
        } else {
            sidebarElement.innerHTML= sidebarHTML(task, taskStatus);
        };

        sidebarTaskDisplayed = task;

        (document.getElementById("delete-button")).onclick = () => {
            Project.deleteTask(displayedProject, sidebarTaskDisplayed);
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = false;
            renderTasks(displayedProject)
        }

        (document.getElementById("side-title")).onchange = () => {
            sidebarTaskDisplayed.title = (document.getElementById("side-title")).value;
            console.log(sidebarTaskDisplayed)
            renderTasks(displayedProject)
            console.log(sidebarTaskDisplayed)
        }
        (document.getElementById("side-description")).onchange = () => {
            sidebarTaskDisplayed.description = (document.getElementById("side-description")).value;
            console.log(sidebarTaskDisplayed)
            renderTasks(displayedProject)
            console.log(sidebarToggle)
        }
        (document.getElementById("side-due-date")).onchange = () => {
            sidebarTaskDisplayed.dueDate = moment((document.getElementById("side-due-date")).value).format("YYYY-MM-DD");
            renderTasks(displayedProject)
            console.log(sidebarTaskDisplayed)
        }
    }

    function toggleTaskSidebar(task, sidebarElement) {
        let itemContainer = document.getElementById("item-container");

        itemContainer.onclick = () => {
            closeSidebar();
        }

        let taskStatus = "";
        if (task.complete === true) {
            taskStatus = "Complete";
        } else {
            taskStatus = "Incomplete";
        };

        sidebarElement.innerHTML= sidebarHTML(task, taskStatus);

        if (sidebarToggle === false) {
            sidebarElement.classList.remove("task-sidebar-hidden")
            sidebarElement.classList.add("task-sidebar-visible")
            sidebarToggle = !sidebarToggle;
            sidebarTaskDisplayed = task;
        } else {
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = !sidebarToggle;
            itemContainer.onclick = () => {
            }
        }

        let xButton = document.getElementById("sidebar-x-button");

        xButton.onclick = () => {
            closeSidebar();
        }

        (document.getElementById("delete-button")).onclick = () => {
            Project.deleteTask(displayedProject, sidebarTaskDisplayed);
            sidebarElement.classList.remove("task-sidebar-visible")
            sidebarElement.classList.add("task-sidebar-hidden")
            sidebarToggle = false;
            renderTasks(displayedProject)
        }
        (document.getElementById("side-title")).onchange = () => {
            sidebarTaskDisplayed.title = (document.getElementById("side-title")).value;
            console.log(sidebarTaskDisplayed)
            renderTasks(displayedProject)
            console.log(sidebarTaskDisplayed)
        }
        (document.getElementById("side-description")).onchange = () => {
            console.log(document.getElementById("item-container").onclick)
            sidebarTaskDisplayed.description = (document.getElementById("side-description")).value;
            console.log(sidebarTaskDisplayed)
            renderTasks(displayedProject)
            console.log(sidebarToggle)
            console.log(document.getElementById("item-container").onclick)
        }
        (document.getElementById("side-due-date")).onchange = () => {
            sidebarTaskDisplayed.dueDate = moment((document.getElementById("side-due-date")).value).format("YYYY-MM-DD");
            renderTasks(displayedProject)
            console.log(sidebarTaskDisplayed)
        }

        if (sidebarToggle === true) {
            let taskItems = document.querySelectorAll(".task-item");
            taskItems.forEach((item) => {
                item.classList.add("task-item-short")
                item.classList.remove("task-item-long")
              });
        }
    }

    function createProjectModal() {
        let projectModal = document.getElementById("project-modal").className;
        let backdrop = document.getElementById("modal-backdrop");
        let xButton = document.getElementById("project-x-button");

        openModal(projectModal);

        backdrop.onclick = () => {
            closeModal(projectModal);
        }

        xButton.onclick = () => {
            closeModal(projectModal);
        } 

        let createButton = document.getElementById("create-project-button");
        createButton.onclick = () => {
            if (document.getElementById("create-project-form")[0].checkValidity()) {
                createProjectItem(projectModal)
            } else {
                document.getElementById("create-project-form")[0].reportValidity();
            }
        }
    };

    function createProjectItem(projectModal) {
        let projectName = document.getElementById("project-name").value
        Project.createProject(projectName);
        renderProjects(Project.projectArray);
        displayedProject = Project.projectArray[(Project.projectArray.length - 1)]
        renderTasks(Project.projectArray[(Project.projectArray.length - 1)])
        sidebarToggle = false;
        closeModal(projectModal);
    }

    function createTaskModal() {
        let taskModal = document.getElementById("task-modal").className;
        let backdrop = document.getElementById("modal-backdrop");
        let xButton = document.getElementById("task-x-button");

        openModal(taskModal);

        backdrop.onclick = () => {
            closeModal(taskModal);
        }

        xButton.onclick = () => {
            closeModal(taskModal);
        } 

        let createButton = document.getElementById("create-task-button");
        createButton.onclick = () => {
            if (document.getElementById("create-task-form")[0].checkValidity()) {
                let taskTitle = document.getElementById("task-title").value
                let taskDesc = document.getElementById("task-desc").value
                let taskPrio = document.getElementById("task-prio").value
                let taskDate = moment(document.getElementById("task-date").value).format("YYYY/M/D");
                Task.createTask(taskTitle, taskDesc, taskPrio, taskDate, displayedProject);
                sidebarToggle = false;
                renderTasks(displayedProject);
                closeModal(taskModal);
            } else {
                document.getElementById("create-task-form")[0].reportValidity();
            }
        }
    };

    function renderPage() {
        renderModals();
        renderHeader();
        renderMainContainer();
        renderProjects(Project.projectArray);
        renderFooter()
    }

    return { renderPage }
})();
