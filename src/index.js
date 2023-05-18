import { userInterface } from "./UI";
import './styles.css';
import { taskFactory, projectFactory, setUpProjects, exampleProject, exampleTask1 } from "./tools";

//NOTE:  allows me to interact with the imported objects in the browser debugger
window.userInterface = userInterface;
window.taskFactory = taskFactory;
window.projectFactory = projectFactory;
window.setUpProjects = setUpProjects;
window.exampleProject = exampleProject;
window.exampleTask1 = exampleTask1;

userInterface.displayHomePage();
