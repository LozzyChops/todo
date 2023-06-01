import {
  setUpInitHTML,
  displayProjectName,
  displayTask,
  emptyProjectsDisplay,
  emptyTasksDisplay,
} from './DOM'
import { Task, projects, projectControls } from './tools'

const userInterface = {
  determineIfFirstLoad: function () {
    this.isFirstLoad = true
  },
  setUpFirstTime: function () {
    projectControls.addProject('EXPLORE SITE')
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
  selectedProject: {},
  setFirstProjectAsSelected: function () {
    this.selectedProject = projects[0]
    this.selectedProject.onDisplay = true
  },
  displayProjects: function () {
    emptyProjectsDisplay()

    for (const project in projects) {
      displayProjectName(projects[project])

      if (projects[project].onDisplay === true) {
        this.selectedProject = projects[project]
      }
    }

    this.displayTasks()
  },
  displayTasks: function () {
    emptyTasksDisplay()

    for (const task in this.selectedProject.tasks) {
      displayTask(this.selectedProject.tasks[task])
    }
  },
  setSelectedProject: function () {
    this.selectedProject = window.event.target.associatedProject

    for (const project in projects) {
      if (projects[project].onDisplay) {
        projects[project].onDisplay = false
      }
    }

    this.selectedProject.onDisplay = true
    userInterface.displayProjects()
  },
}

export { userInterface }