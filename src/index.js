import './styles.css';
import { userInterface } from "./UI";
import { projects, projectControls } from "./tools";

userInterface.displayHomePage();

//TEMP - debugging additions
window.userInterface = userInterface
window.projectControls = projectControls
window.projects = projects
