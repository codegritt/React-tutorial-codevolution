import "./App.css";
import ClassClick from "./components/ClassClick";
import DestArray from "./components/DestArray";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import UserGreeting from "./components/UserGreeting";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import From from "./components/From";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import Input from "./components/Input";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ClickIncrease from "./components/HOC/ClickIncrease";
import HoverIncrease from "./components/HOC/HoverIncrease";
import PostList from "./components/PostList";

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
      <hr></hr>
      <Stylesheet primary={true} />
      <hr></hr>
      <Inline />
      <hr></hr>
      <From />
      <hr></hr>
      <LifecycleA />
      <hr></hr>
      <FragmentDemo />
      <hr></hr>
      <Table />
      <hr></hr>
      <ParentComp />
      <hr></hr>
      <RefsDemo />
      <hr></hr>
      <Input />
      <hr></hr>
      <PortalDemo />
      <hr></hr>
      <Hero heroName="Batman" />
      <Hero heroName="Superman" />
      <hr></hr>
      {/* <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <hr></hr>
      <ClickIncrease />
      <HoverIncrease />
      <hr></hr>
      <PostList />
      <hr></hr>
    </div>
  );
}

export default App;
