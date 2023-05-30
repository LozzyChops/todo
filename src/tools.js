import { userInterface } from "./UI"

function Project (name) {
  this.name = name
  this.tasks = []
  this.onDisplay = false
  this.changeName = function (name) {
    this.name = name
  }
  this.addTask = function (task) {
    this.tasks.push(task)
  }
  this.removeTask = function (task) {
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }
}

function Task (title, description, dueDate, priority) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
}

const projects = []

const projectControls = {
  addProject: (name) => {
    projects.push(new Project(name))

    return projects
  },
}

export { Project, Task, projects, projectControls }