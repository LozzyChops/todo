import { userInterface } from './UI'
import { Project, Task, projects } from './tools'

const DOMNodes = {
  body: document.querySelector('body'),

  divHeader: document.createElement('div'),
  divRoot: document.createElement('div'),
  divSideBar: document.createElement('div'),
  divProjectList: document.createElement('div'),
  divProjectListHeading: document.createElement('div'),
  divContent: document.createElement('div'),
  divToDoList: document.createElement('div'),

  ulProjectNames: document.createElement('ul'),

  hdrProjectList: document.createElement('h1'),

  btnProjectList: document.createElement('button'),
  btnContent: document.createElement('button'),
}

function setUpInitHTML() {
  //labels
  DOMNodes.divHeader.setAttribute('id', 'header')
  DOMNodes.divRoot.setAttribute('id', 'root')
  DOMNodes.divSideBar.setAttribute('id', 'side-bar')
  DOMNodes.divProjectList.setAttribute('id', 'project-list')
  DOMNodes.divProjectListHeading.setAttribute('id', 'project-list-heading')
  DOMNodes.divContent.setAttribute('id', 'content')
  DOMNodes.divToDoList.setAttribute('id', 'to-do-list')
  DOMNodes.ulProjectNames.setAttribute('id', 'project-names')

  DOMNodes.divRoot.classList.add('flex-container')
  DOMNodes.divProjectList.classList.add('flex-container')
  DOMNodes.divProjectListHeading.classList.add('flex-container')
  DOMNodes.divContent.classList.add('flex-container')
  DOMNodes.btnContent.classList.add('add-button')
  DOMNodes.hdrProjectList.classList.add('header')
  DOMNodes.btnProjectList.classList.add('add-button')

  //structure
  DOMNodes.divProjectListHeading.appendChild(DOMNodes.hdrProjectList)
  DOMNodes.divProjectListHeading.appendChild(DOMNodes.btnProjectList)
  DOMNodes.divProjectList.appendChild(DOMNodes.divProjectListHeading)
  DOMNodes.divProjectList.appendChild(DOMNodes.ulProjectNames)
  DOMNodes.divSideBar.appendChild(DOMNodes.divProjectList)
  DOMNodes.divRoot.appendChild(DOMNodes.divSideBar)
  DOMNodes.divContent.appendChild(DOMNodes.btnContent)
  DOMNodes.divContent.appendChild(DOMNodes.divToDoList)
  DOMNodes.divRoot.appendChild(DOMNodes.divContent)
  DOMNodes.body.appendChild(DOMNodes.divHeader)
  DOMNodes.body.appendChild(DOMNodes.divRoot)

  //text
  DOMNodes.hdrProjectList.textContent = 'MY PROJECTS'
  DOMNodes.btnProjectList.textContent = '+'
  DOMNodes.btnContent.textContent = '+'

  //events
  DOMNodes.btnProjectList.addEventListener('click', function () {
    let newProjectName = prompt('Enter project name', 'EXAMPLE PROJECT')

    let newProject = new Project(newProjectName)

    projects.push(newProject)

    userInterface.displayProjects()
  })

  DOMNodes.btnContent.addEventListener('click', function () {
    let newTaskTitle = prompt('Enter task title', 'EXAMPLE TITLE')

    let newTask = new Task(newTaskTitle)

    newTask.description = prompt('Enter task description', 'Example description')

    newTask.dueDate = prompt('When is it due?', '')

    newTask.priority = prompt('Choose a priority', '')

    userInterface.selectedProject.tasks.push(newTask)

    userInterface.displayTasks()
  })
}

function displayProjectName(project) {
  const li = document.createElement('li')
  li.classList.add('project-name')

  li.associatedProject = project

  li.textContent = li.associatedProject.name

  li.addEventListener('click', userInterface.setSelectedProject)

  if (li.associatedProject.onDisplay) {
    li.classList.add('selected')
  }

  DOMNodes.ulProjectNames.appendChild(li)
}

function displayTask(task) {
  const div = document.createElement('div')
  div.classList.add('task-container')

  div.associatedTask = task

  div.textContent = div.associatedTask.title

  DOMNodes.divToDoList.appendChild(div)
}

const emptyProjectsDisplay = () => {
  DOMNodes.ulProjectNames.remove()
  DOMNodes.ulProjectNames = document.createElement('ul')
  DOMNodes.ulProjectNames.setAttribute('id', 'project-names')
  DOMNodes.divProjectList.appendChild(DOMNodes.ulProjectNames)
}

const emptyTasksDisplay = () => {
  DOMNodes.divToDoList.remove()
  DOMNodes.divToDoList = document.createElement('div')
  DOMNodes.divToDoList.setAttribute('id', 'to-do-list')
  DOMNodes.divContent.appendChild(DOMNodes.divToDoList)
}

export {
  DOMNodes,
  setUpInitHTML,
  displayProjectName,
  displayTask,
  emptyProjectsDisplay,
  emptyTasksDisplay,
}