import {
  setUpInitHTML,
  displayProjectName,
  displayTask,
  emptyProjectsDisplay,
  emptyTasksDisplay,
} from './DOM'
import { projects, projectControls } from './tools'

const userInterface = {
  testing: function () {
    projectControls.addProject('EXAMPLE 1')
    projectControls.addProject('EXAMPLE 2')
    projects[0].addTask({ title: 'DEFAULT TASK 1' })
    projects[0].addTask({ title: 'DEFAULT TASK 2' })
    projects[1].addTask({ title: 'EXAMPLE 1 TASK 1' })
    projects[2].addTask({ title: 'EXAMPLE 2 TASK 1' })
    projects[2].addTask({ title: 'EXAMPLE 2 TASK 2' })
    projects[2].addTask({ title: 'EXAMPLE 2 TASK 3' })
  },
  determineIfFirstLoad: function () {
    this.isFirstLoad = true
  },
  setUpFirstTime: function () {
    projectControls.addProject('DEFAULT')
  },
  displayHomePage: function () {
    this.determineIfFirstLoad()

    if (this.isFirstLoad) {
      this.setUpFirstTime()

      this.isFirstLoad = false
    }

    this.testing()
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
