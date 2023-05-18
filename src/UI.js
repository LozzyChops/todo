import { setUpInitHTML, projectNameContainerFactory } from './DOM'
import { setUpProjects } from './tools'

const userInterface = {
  displayHomePage: function () {
    setUpInitHTML()

    this.displayProjects()
  },

  displayProjects: function () {
    for (let i = 0; i < setUpProjects().projectsArray.length; i++) {
      projectNameContainerFactory(setUpProjects().projectsArray[i].title);
    }
  },
}

export { userInterface }
