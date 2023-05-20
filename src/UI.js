import { setUpInitHTML, projectNameContainerFactory } from './DOM'
import { tasks, projects } from './tools'

const userInterface = {
  displayHomePage: function () {
    setUpInitHTML()

    //include a DEFAULT project
    projects.addProject("DEFAULT");

    this.displayProjects();
  },
  displayProjects: function () {
    for (let i = 0; i <  projects.all.length; i++) {
      projectNameContainerFactory(projects.all[i].name);
    }
  },
  displayAdditionalProject: function (name) {
    projectNameContainerFactory(name);
  },
}

export { userInterface }
