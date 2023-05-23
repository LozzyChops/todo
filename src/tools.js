import { userInterface } from "./UI"

const projects = {
  all: [],
  //create a project with the name it was provided
  createProject: (name) => {
    const taskArray = []

    return { name, taskArray }
  },
  //add a project to all with a name from a prompt
  addProject: (name) => {
    const newProject = projects.createProject(name)
    let updatedProjects = projects;

    updatedProjects.all.push(newProject)

    return updatedProjects
  },
}

export { projects }

/*
  //create a task with the details provided
  createTask: (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
  },
  //add a task to the selected project
  addTask: () => {
    const project = userInterface.getSelectedProject()
    console.log(project);

    const task = this.createTask();
    project.taskArray.push(task)
  }
*/