import {
  setUpInitHTML,
  displayProjectName,
  displayTask,
  emptyProjectsDisplay,
  emptyTasksDisplay,
  DOMNodes,
} from './DOM'
import { Task, projects, projectControls } from './tools'

const userInterface = {
  determineIfFirstLoad: function () {
    this.isFirstLoad = true
  },
  setUpFirstTime: function () {
    projectControls.addProject('EXPLORE')
    projects[0].tasks.push(new Task('CLICK ON THIS TASK'))
  },
  displayHomePage: function () {
    this.determineIfFirstLoad()

    if (this.isFirstLoad) {
      this.setUpFirstTime()

      this.isFirstLoad = false
    }

    setUpInitHTML()
    this.setFirstProjectAsSelected()
    this.displayProjects()
  },
  setFirstProjectAsSelected: function () {
    this.selectedProject = projects[0]
    this.selectedProject.onDisplay = true
  },
  displayProjects: function () {
    emptyProjectsDisplay()

    for (const project in projects) {
      displayProjectName(projects[project])
    }

    this.displayTasks()
  },
  displayTasks: function () {
    emptyTasksDisplay()

    for (const task in this.selectedProject.tasks) {
      displayTask(this.selectedProject.tasks[task])
    }
  },
  checkSelectedProject: function () {
    if (!this.parentElement.associatedProject.onDisplay) {
      userInterface.setSelectedProject(this.parentElement.associatedProject)
    }
  },
  setSelectedProject: function (project) {
    let oldSelection = userInterface.selectedProject
    let clickedProject = project

    oldSelection.onDisplay = false
    userInterface.selectedProject = clickedProject
    userInterface.selectedProject.onDisplay = true

    userInterface.displayProjects()
  },
  animateProjectsButton: function () {
    let button = DOMNodes.btnProjectList
    button.classList.add('animate')
  },
}

export { userInterface }