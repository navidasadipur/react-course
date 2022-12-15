import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React"/>
      <Todo title="Master in React"/>
      <Todo title="Explore the full react course"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
