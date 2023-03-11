export const Project = (() => {
    const projectArray = [{name: "Work", taskArray: [{title: "Do Work", description: "Gotta get that money", dueDate: "Tomorrow", priority: "high", complete: false}, {title: "Sleep", description: "ZZZzzzz", dueDate: "Tomorrow", priority: "highest", complete: false}]}, {name: "School", taskArray: [{title: "Do Homework", description: "get you smart up", dueDate: "Tomorrow", priority: "low af", complete: false}, {title: "Baseball Practice", description: "hittin' bombs", dueDate: "Tomorrow", priority: "medium", complete: false}]}];

    const projectFactory = (name) => {
        let taskArray = [{title: "Get Started!", description: "Description goes here!", dueDate: "Tomorrow", priority: "high", complete: false}];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
    }

    return { projectFactory, createProject, projectArray }
})();