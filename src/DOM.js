import { userInterface } from './UI'
import { projects } from './tools'

const DOMNodes = {
  body: document.querySelector('body'),
  divRoot: document.createElement('div'),
  divSideBar: document.createElement('div'),
  divMenu: document.createElement('div'),
  divProjectList: document.createElement('div'),
  divProjectListHeading: document.createElement('div'),
  divContent: document.createElement('div'),
  btnContent: document.createElement('button'),
  divToDoList: document.createElement('div'),
  ulProjectNames: document.createElement('ul'),
  hdrProjectList: document.createElement('h1'),
  btnProjectList: document.createElement('button'),
}

function setUpInitHTML() {
  //add labels to elements
  DOMNodes.divRoot.setAttribute('id', 'root')
  DOMNodes.divRoot.classList.add('flex-container')
  DOMNodes.divSideBar.setAttribute('id', 'side-bar')
  DOMNodes.divMenu.setAttribute('id', 'menu')
  DOMNodes.divProjectList.setAttribute('id', 'project-list')
  DOMNodes.divProjectList.classList.add('flex-container')
  DOMNodes.divProjectListHeading.setAttribute('id', 'project-list-heading')
  DOMNodes.divProjectListHeading.classList.add('flex-container')
  DOMNodes.divContent.setAttribute('id', 'content')
  DOMNodes.btnContent.classList.add('add-button')
  DOMNodes.divToDoList.setAttribute('id', 'to-do-list')
  DOMNodes.ulProjectNames.setAttribute('id', 'project-names')
  DOMNodes.hdrProjectList.classList.add('header')
  DOMNodes.btnProjectList.classList.add('add-button')

  //setup HTML structure
  DOMNodes.divSideBar.appendChild(DOMNodes.divMenu)
  DOMNodes.divProjectListHeading.appendChild(DOMNodes.hdrProjectList)
  DOMNodes.divProjectListHeading.appendChild(DOMNodes.btnProjectList)
  DOMNodes.divProjectList.appendChild(DOMNodes.divProjectListHeading)
  DOMNodes.divProjectList.appendChild(DOMNodes.ulProjectNames)
  DOMNodes.divSideBar.appendChild(DOMNodes.divProjectList)
  DOMNodes.divRoot.appendChild(DOMNodes.divSideBar)

  DOMNodes.divContent.appendChild(DOMNodes.btnContent)
  DOMNodes.divContent.appendChild(DOMNodes.divToDoList)
  DOMNodes.divRoot.appendChild(DOMNodes.divContent)

  DOMNodes.body.appendChild(DOMNodes.divRoot)

  //setup text content
  DOMNodes.hdrProjectList.textContent = 'MY PROJECTS'
  DOMNodes.btnProjectList.textContent = '+'
  DOMNodes.btnContent.textContent = '+'

  //setup events
  DOMNodes.btnProjectList.addEventListener('click', function () {
    //prompt gives a string to make a new project 
    let newProjectName = prompt('Enter project name', 'EXAMPLE PROJECT')

    //a new set of project objects
    let newProjectSet = projects.addProject(newProjectName).all

    //update display using the new set of projects
    userInterface.displayProjects(newProjectSet)
  })
  //setup the add-task button to add a task to the selected project and update the display
  DOMNodes.btnContent.addEventListener('click', function () {
    

  })
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    return parent
}

const projectNameContainerFactory = (name) => {
  const container = document.createElement('li')
  container.classList.add('project-name-container')
  container.textContent = name
  container.addEventListener('click', userInterface.changeSelectedProject)
  
  DOMNodes.ulProjectNames.appendChild(container)

  return container
}

export { DOMNodes, setUpInitHTML, removeAllChildNodes, projectNameContainerFactory }