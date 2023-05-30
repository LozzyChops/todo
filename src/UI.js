import { DOMNodes, setUpInitHTML, displayProjectName, displayTask, emptyProjectsDisplay, emptyTasksDisplay } from './DOM'
import { projects, projectControls } from './tools'

const userInterface = {
  tempForTesting: function () {
    projectControls.addProject('DEFAULT')
    projectControls.addProject('EXAMPLE 1')
    projectControls.addProject('EXAMPLE 2')
    projects[0].addTask({title: 'DEFAULT TASK 1'})
    projects[0].addTask({title: 'DEFAULT TASK 2'})
    projects[1].addTask({title: 'EXAMPLE 1 TASK 1'})
    projects[2].addTask({title: 'EXAMPLE 2 TASK 1'})
    projects[2].addTask({title: 'EXAMPLE 2 TASK 2'})
    projects[2].addTask({title: 'EXAMPLE 2 TASK 3'})
    this.selectedProject = projects[0]
    this.selectedProject.onDisplay = true
  },
  displayHomePage: function () {
    setUpInitHTML()
    this.tempForTesting()
    this.displayProjects()
  },
  displayProjects: function () {
    emptyProjectsDisplay()
    
    for (const project in projects) {
      displayProjectName(projects[project], DOMNodes.ulProjectNames)
    }

    this.displayTasks()
  },
  displayTasks: function () {
    emptyTasksDisplay()

    for (const task in this.selectedProject['tasks']) {
      displayTask(this.selectedProject.tasks[task])
    }
  },
}

export { userInterface }