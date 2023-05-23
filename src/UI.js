import { DOMNodes, setUpInitHTML, removeAllChildNodes, projectNameContainerFactory } from './DOM'
import { projects } from './tools'

const userInterface = {
  displayableProjects: projects.all,
  displayHomePage: function () {
    setUpInitHTML()

    //TEMP adding a default project
    projects.addProject('DEFAULT')

    this.displayProjects(this.displayableProjects)
  },
  displayProjects: function (projectObjects) {
    removeAllChildNodes(DOMNodes.ulProjectNames)

    for (let i = 0; i < projectObjects.length; i++) {
      projectNameContainerFactory(projectObjects[i].name)
    }

    let selectedProject = DOMNodes.ulProjectNames.firstChild

    this.toggleSelectedState(selectedProject)
  },
  toggleSelectedState: function (element) {
    element.classList.toggle('selected')
  },
  changeSelectedProject: function () {
    const siblings = DOMNodes.ulProjectNames.children
    if (!window.event.target.classList.contains('selected')) {
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i].classList.contains('selected')) {
          userInterface.toggleSelectedState(siblings[i])
        }
      }
      userInterface.toggleSelectedState(this)
    }
  },
}

export { userInterface }