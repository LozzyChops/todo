//allows me to interact with the imported objects in the browser debugger
//post development, only the UI module should be required
import { userInterface } from "./UI";
window.userInterface = userInterface;

userInterface.loadHomePage();