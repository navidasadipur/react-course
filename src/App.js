
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="row">
      <Todo title="Learn React"/>
      <Todo title="Master in React"/>
      <Todo title="Explore the full react course"/>
      </div>

    </div>
  );
}

export default App;
