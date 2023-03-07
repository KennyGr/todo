export const UI = (() => {
    function renderHeader() {
        let headerContainer = document.createElement("div");
        headerContainer.id = "header-container";
        headerContainer.classList.add("header-container");
        document.body.appendChild(headerContainer);

        headerContainer.innerHTML = `
        <h1 class="nice-class">To-Do List</h1>
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
                <a href="./">
                    <li>Projects</li>
                </a>
            </div>
        </div>
        <div class="task-list"></div>
        `
    }

    function renderPage() {
        renderHeader();
        renderMainContainer();
    }

    return { renderPage }
})();
