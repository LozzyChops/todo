import './styles.css';
import { userInterface } from "./UI";
import { projects} from "./tools";

userInterface.displayHomePage();

//temporary additions below
window.userInterface = userInterface;
window.projects = projects;

//example from Ricky
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
