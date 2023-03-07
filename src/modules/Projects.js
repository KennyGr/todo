export const Project = (() => {
    const projectFactory = (name) => {
        let taskList = [];
        return { name, taskList }
    };

    return { projectFactory }
})();