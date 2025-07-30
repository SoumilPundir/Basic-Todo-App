import { useContext, useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AppTodo() {
  const {addNewItem} = useContext(TodoItemsContext); 

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, todoDueDate);
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success my-button">
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;
