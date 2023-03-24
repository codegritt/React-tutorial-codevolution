import "./App.css";
import ClassClick from "./components/ClassClick";
import DestArray from "./components/DestArray";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div>
      <Greet />
      <hr></hr>
      <DestArray name="gokul" heroName="sigma" />
      <hr></hr>
      <FunctionClick />
      <hr></hr>
      <ClassClick />
      <hr></hr>
      <EventBind />
      <hr></hr>
      <Parent />
      <hr></hr>
      <UserGreeting />
      <hr></hr>
      <NameList />
    </div>
  );
}

export default App;
