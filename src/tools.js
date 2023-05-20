const tasks = {
  //create a task with the details provided
  createTask: (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
  },
}

const projects = {
  all: [],
  //create a project with the title it was provided
  createProject: (name) => {
    const taskArray = []

    return { name, taskArray }
  },
  //add a project to all with a title from a prompt
  addProject: (projectName) => {
    projects.all.push(projects.createProject(projectName))
  },
}

export { tasks, projects }