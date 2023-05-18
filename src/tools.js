const taskFactory = (title, description, dueDate, priority) => {
  const confirmWorking = () => console.log(`taskFactory worked. It made ${title}.`);
  return { title, description, dueDate, priority, confirmWorking };
};

const projectFactory = (title) => {
  const taskArray = [];
  const confirmWorking = () => console.log(`projectFactory worked. It made ${title}`);
  return { title, taskArray, confirmWorking };
};

function setUpProjects() {
  const projectsArray = [];
  projectsArray.push(projectFactory('DEFAULT'));

  return { projectsArray };
};

const exampleProject = projectFactory('EXAMPLE');

const exampleTask1 = taskFactory();

export { taskFactory, projectFactory, setUpProjects, exampleProject, exampleTask1 };

/*const gameController = (function() {
  const self = {
    playerOne: undefined,
    playerTwo: undefined,
  };

  self.initGame = () => {
    self.playerOne = Player();
  };
  return self;
}());

gameController.initGame();
gameController.playerOne;

const library = {};

library["myBook"] = {title: "hams hams"};
library.myBook2 = {title: "Hams 2"};

const library2 = {
  myBook: { title: "hams hams" },
  myBook2: { title: "Hams 2" },
}; */