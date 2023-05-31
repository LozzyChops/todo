import './styles.css';
import { userInterface } from "./UI";
import { Project, Task, projects, projectControls } from "./tools";
import { DOMNodes, setUpInitHTML, displayProjectName, displayTask, swapSelected, emptyProjectsDisplay, emptyTasksDisplay } from './DOM'

userInterface.displayHomePage();

//TEMP - debugging additions
/*
window.userInterface = userInterface
window.Project = Project    
window.Task = Task
window.projectControls = projectControls
window.projects = projects
window.DOMNodes = DOMNodes
window.setUpInitHTML = setUpInitHTML
window.displayProjectName = displayProjectName
window.displayTask = displayTask
window.swapSelected = swapSelected
window.emptyProjectsDisplay = emptyProjectsDisplay
window.emptyTasksDisplay = emptyTasksDisplay
*/