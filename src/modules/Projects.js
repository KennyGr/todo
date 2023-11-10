var moment = require('moment');

export const Project = (() => {
    const projectArray = [{
        name: "Work", 
        taskArray: [
            {
                title: "Do Work", 
                description: "Gotta get that money", 
                dueDate: moment().format("YYYY-MM-DD"), 
                priority: "high", 
                complete: false, 
                completedOn: moment("3000-12-25"),
            }, 
            {
                title: "Team Meeting",
                description: "Rick will give a nice little presentation",
                dueDate: moment("2023-04-15").format("YYYY-MM-DD"),
                priority: "low", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Christmas Party",
                description: "Christmas themed attire required",
                dueDate: moment("2023-12-23").format("YYYY-MM-DD"),
                priority: "mid", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Make To-Do List Tool",
                description: "Really need this to increase productivity",
                dueDate: moment("2023-03-29").format("YYYY-MM-DD"),
                priority: "highest", 
                complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Sleep",
                description: "ZZZzzzz",
                dueDate: moment().add(1, "days").format("YYYY-MM-DD"),
                priority: "highest", 
                complete: false,
                completedOn: moment("3000-12-25")
            }
        ],
        newProjectScreen: true
    }, 
    {
        name: "School",
        taskArray: [
            {
                title: "Do Homework",
                description: "get you smart up",
                dueDate: moment().format("YYYY-M-D"),
                priority: "low af", complete: false,
                completedOn: moment("3000-12-25")
            },
            {
                title: "Baseball Practice", description: "hittin' bombs",
                dueDate: moment().format("YYYY-M-D"),
                priority: "medium",
                complete: false,
                completedOn: moment("3000-12-25")
            }
        ]
    }
];

    const projectFactory = (name) => {
        let taskArray = [{title: "Get Started!", description: "Description goes here!", dueDate: moment().format("YYYY-M-D"), priority: "high", complete: false, completedOn: moment("3000-12-25")}];
        return { name, taskArray }
    };

    function createProject(projectName) {
        const newProject = projectFactory(projectName);
        projectArray.push(newProject);
    }

    function deleteTask(project, task) {
        let taskArray = project.taskArray
        let taskToDelete;
        for (let taskIndex in taskArray) {
            if (taskArray[taskIndex] === task) {
                taskToDelete = taskIndex;
            }
        };
        taskArray.splice(taskToDelete, 1)
    }

    return { projectFactory, createProject, projectArray, deleteTask }
})();