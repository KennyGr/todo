import { Project } from "./Projects"
var moment = require('moment');

export const Task = (() => {

    const taskFactory = (title, description, dueDate, priority, complete, completedOn) => {
        return { title, description, dueDate, priority, complete, completedOn }
    };

    function createTask(taskName, taskDesc, taskDate, taskPrio, project) {
        const newTask = taskFactory(taskName, taskDesc, taskDate, taskPrio, false, moment("3000-12-25"));
        project.taskArray.push(newTask);
    }

    function updateTaskTitle(task, newTitle) {
        task.title = newTitle;
    };

    function updateTaskDescription(task, newDescription) {
        task.description = newDescription;
    };

    function updateTaskDueDate(task, newDueDate) {
        task.dueDate = newDueDate;
    };

    function updateTaskPriority(task, newPriority) {
        task.priority = newPriority;
    };

    function updateComplete(task) {
        task.complete = !task.complete;
    }
    return { taskFactory, createTask, updateComplete }
})();
