import { userInterface } from './UI'
import { Project, Task, projects } from './tools'

const DOMNodes = {
  body: document.querySelector('body'),

  divHeader: document.createElement('div'),
  divRoot: document.createElement('div'),
  divSideBar: document.createElement('div'),
  divProjectList: document.createElement('div'),
  divProjectListHead: document.createElement('div'),
  divProjectListHeading: document.createElement('div'),
  divContent: document.createElement('div'),
  divToDoList: document.createElement('div'),
  divProjectNames: document.createElement('div'),

  hdrProjectList: document.createElement('h1'),

  btnProjectList: document.createElement('button'),
  btnContent: document.createElement('button'),

  spanAddProject: document.createElement('span'),
  spanAddTask: document.createElement('span')
}

function setUpInitHTML() {
  //labels
  DOMNodes.divHeader.setAttribute('id', 'header')
  DOMNodes.divRoot.setAttribute('id', 'root')
  DOMNodes.divSideBar.setAttribute('id', 'side-bar')
  DOMNodes.divProjectList.setAttribute('id', 'project-list')
  DOMNodes.divProjectListHead.setAttribute('id', 'project-list-head')
  DOMNodes.divProjectListHeading.setAttribute('id', 'project-list-header')
  DOMNodes.divContent.setAttribute('id', 'content')
  DOMNodes.divToDoList.setAttribute('id', 'to-do-list')
  DOMNodes.divProjectNames.setAttribute('id', 'project-names')

  DOMNodes.divRoot.classList.add('flex-container')
  DOMNodes.divProjectList.classList.add('flex-container')
  DOMNodes.divProjectListHead.classList.add('flex-container')
  DOMNodes.divContent.classList.add('flex-container')
  DOMNodes.spanAddTask.classList.add('material-icons')
  DOMNodes.btnContent.classList.add('add-button')
  DOMNodes.divProjectListHeading.classList.add('heading')
  DOMNodes.spanAddProject.classList.add('material-icons')
  DOMNodes.btnProjectList.classList.add('add-button')

  //structure
  DOMNodes.divProjectListHeading.appendChild(DOMNodes.hdrProjectList)
  DOMNodes.divProjectListHead.appendChild(DOMNodes.divProjectListHeading)
  DOMNodes.btnProjectList.appendChild(DOMNodes.spanAddProject)
  DOMNodes.divProjectListHead.appendChild(DOMNodes.btnProjectList)
  DOMNodes.divProjectList.appendChild(DOMNodes.divProjectListHead)
  DOMNodes.divProjectList.appendChild(DOMNodes.divProjectNames)

  DOMNodes.divSideBar.appendChild(DOMNodes.divProjectList)
  DOMNodes.divRoot.appendChild(DOMNodes.divSideBar)
  DOMNodes.btnContent.appendChild(DOMNodes.spanAddTask)
  DOMNodes.divContent.appendChild(DOMNodes.btnContent)
  DOMNodes.divContent.appendChild(DOMNodes.divToDoList)
  DOMNodes.divRoot.appendChild(DOMNodes.divContent)
  DOMNodes.body.appendChild(DOMNodes.divHeader)
  DOMNodes.body.appendChild(DOMNodes.divRoot)

  //text
  DOMNodes.hdrProjectList.innerText = 'PROJECTS'
  DOMNodes.spanAddProject.innerText = 'add_box'
  DOMNodes.spanAddTask.innerText = 'add_box'

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

    newTask.description = prompt(
      'Enter task description',
      'Example description',
    )

    newTask.dueDate = prompt('When is it due?', '')

    newTask.priority = prompt('Choose a priority', '')

    userInterface.selectedProject.tasks.push(newTask)

    userInterface.displayTasks()
  })
}

function displayProjectName(project) {
  const container = DOMNodes.divProjectNames
  const buttonContainer = document.createElement('div')
  const nameButton = document.createElement('button')

  buttonContainer.classList.add('project-name', 'flex-container')
  nameButton.classList.add('project-name-button')

  buttonContainer.associatedProject = project

  nameButton.addEventListener('click', userInterface.checkSelectedProject)

  nameButton.innerText = project.name

  buttonContainer.appendChild(nameButton)

  if (project.onDisplay) {
    const deleteButton = document.createElement('button')
    const icon = document.createElement('span')

    buttonContainer.classList.add('selected')

    deleteButton.classList.add('delete-button', 'material-icons')
    deleteButton.addEventListener('click', function () {
      projects.splice((projects.indexOf(this.parentElement.associatedProject)), 1)

      if (projects.length > 0) {
        userInterface.selectedProject = projects[0]
        userInterface.selectedProject.onDisplay = true
      }

      userInterface.displayProjects()
    })

    icon.classList.add('material-icons')
    icon.innerText = 'delete'

    deleteButton.appendChild(icon)
    buttonContainer.appendChild(deleteButton)
  }

  container.appendChild(buttonContainer)

  DOMNodes.divProjectNames.appendChild(buttonContainer)
}

function displayTask(task) {
  const div = document.createElement('div')
  div.classList.add('task-container')

  div.associatedTask = task

  div.innerText = div.associatedTask.title

  DOMNodes.divToDoList.appendChild(div)
}

const emptyProjectsDisplay = () => {
  DOMNodes.divProjectNames.remove()
  DOMNodes.divProjectNames = document.createElement('div')
  DOMNodes.divProjectNames.setAttribute('id', 'project-names')
  DOMNodes.divProjectList.appendChild(DOMNodes.divProjectNames)
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

/*

      if (projects[project].onDisplay) {
        let container = 
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerText = 'hi'
        container.appendChild(deleteButton)
      }

      for (const project in projects) {
        if (projects[project].onDisplay) {
          projects[project].onDisplay = false
        }
      }

      userInterface.selectedProject.onDisplay = true
      */
