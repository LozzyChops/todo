import { DOMNodes, setUpInitHTML, projectNameContainerFactory } from './DOM'
import { tasks, projects } from './tools'

const userInterface = {
  displayHomePage: function () {
    setUpInitHTML()

    //include a DEFAULT project
    projects.addProject('DEFAULT')

    this.displayProjects()
  },
  displayProjects: function () {
    for (let i = 0; i < projects.all.length; i++) {
      projectNameContainerFactory(projects.all[i].name)
    }
    //set the first project in the list to a selected state
    this.setFirstProjectAsSelected()
  },
  displayAdditionalProject: function (name) {
    projectNameContainerFactory(name)
  },
  setFirstProjectAsSelected: function () {
    const firstProject = DOMNodes.ulProjectNames.firstChild
    firstProject.classList.add('selected')
  },
  toggleSelectedState: function (element) {
    element.classList.toggle('selected')
  },
  changeSelectedProject: function () {
    const siblings = DOMNodes.ulProjectNames.children
    if (!window.event.target.classList.contains('selected')) { 
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i].classList.contains('selected')) {
          userInterface.toggleSelectedState(siblings[i]);
        }
      }
      userInterface.toggleSelectedState(this)
    }
  },
}

export { userInterface }
