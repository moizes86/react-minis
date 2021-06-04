import NoteBoard from "./components/notes-board/notes-board.component";
import NameList from "./components/name-list/name-list";
import ChooseANumber from "./components/choose-a-number/choose-a-number";
import LoginPage from "./components/login-page/login-page";
import MyCarousel from "./components/my-carousel/my-carousel";
import DiceGame from "./components/dice-game/DiceGame";
import RandomQuoteGenerator from "./components/random-quate-generator/RandomQuateGenerator";
import VotingApp from "./components/voting-app/VotingApp";
import Employees from "./components/employees/employees";

export const PROJECTS = [
  { name: "Note Board", url: "/note-board", component: NoteBoard },
  { name: "Name List", url: "/name-list", component:NameList },
  { name: "Choose A Number", url: "/choose-a-number", component:ChooseANumber },
  { name: "Login Page", url: "/login-page", component: LoginPage },
  { name: "Carousel", url: "/carousel", component: MyCarousel },
  { name: "Dice Game", url: "/dice-game", component:DiceGame },
  { name: "Random Quote Generator", url: "/random-quote-generator", component:RandomQuoteGenerator },
  { name: "Voting App", url: "/voting-app", component: VotingApp },
  { name: "Employees", url: "/employees", component:Employees },
];
