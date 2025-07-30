import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import AppItem from "./AppItem";
import styles from "./AppItems.module.css";
function AppItems() {

  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <AppItem
            key={item.name}
            TodoTask={item.name}
            TodoDate={item.dueDate}
          ></AppItem>
        ))}
      </div>
    </>
  );
}
export default AppItems;
