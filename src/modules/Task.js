import { Project } from "./Projects"

export const Task = (() => {

    const taskFactory = (title, description, dueDate, priority, complete) => {
        return { title, description, dueDate, priority, complete }
    };

    function createTask(taskName, project) {
        const newTask = taskFactory(taskName, "hi", "hi", "hi", false);
        console.log(project.taskArray)      
        project.taskArray.push(newTask);
        console.log(project.taskArray)
    }

    function printTask(task) {
        console.log(task)
    };

    function addTaskToList(project, task){
        project.taskList.push(task);
    };

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
