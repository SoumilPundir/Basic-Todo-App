import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import AppItems from "./Components/AppItems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
        <WelcomeMessage></WelcomeMessage>
        <AppItems></AppItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
