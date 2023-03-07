import { Project } from "./modules/Projects"

export const taskFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
};

export function printTask(task) {
    console.log(task)
};

export function addTaskToList(project, task){
    project.taskList.push(task);
};

export function updateTaskTitle(task, newTitle) {
    task.title = newTitle;
};

export function updateTaskDescription(task, newDescription) {
    task.description = newDescription;
};

export function updateTaskDueDate(task, newDueDate) {
    task.dueDate = newDueDate;
};

export function updateTaskPriority(task, newPriority) {
    task.priority = newPriority;
};
