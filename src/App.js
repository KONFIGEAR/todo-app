import "./App.css";
import Header from "./components/Header/Header.jsx";
import Todo from "./components/Todo/Todo";
import TodoInput from "./components/TodoInput/TodoInput";
import Style from "./styles/style.css";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <Header bgColor="bg-primary" title="TODO APP" />
          <TodoInput />
          <div class="row" id="todo-container"><Todo/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
