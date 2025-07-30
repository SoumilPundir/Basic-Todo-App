import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AppItem({TodoTask,TodoDate,onDeleteClick}) {
  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{TodoTask}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button" onClick={()=> deleteItem(TodoTask)}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppItem;