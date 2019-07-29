import React from "react";
import todoItemsStyles from "../styles/todoItems.module.css";

const TodoItems = props => {
  const { individual, handleRemoveOneItem } = props;
  return (
    <div className={todoItemsStyles.todoItems}>
      {individual}
      <button
        className={todoItemsStyles.removeButton}
        onClick={e => {
          handleRemoveOneItem(individual);
        }}
      >
        Remove
      </button>
    </div>
  );
};
export default TodoItems;
