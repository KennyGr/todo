import { Project } from "./Projects"

export const Task = (() => {

    const taskFactory = (title, description, dueDate, priority, complete) => {
        return { title, description, dueDate, priority, complete }
    };

    function createTask(taskName, taskDesc, taskDate, taskPrio, project) {
        const newTask = taskFactory(taskName, taskDesc, taskDate, taskPrio, false);
        console.log(project)
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
