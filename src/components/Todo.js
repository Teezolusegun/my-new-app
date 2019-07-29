import React, { Component } from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";
import todoStyles from "../styles/todo.module.css";

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const duplicateItem = this.state.todoItems.filter(todoItem => {
      if (isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      } else {
        return todoItem === this.state.newTodo;
      }
    });

    if (this.state.newTodo && duplicateItem.length === 0) {
      this.setState(prevState => {
        return {
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ""
        };
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonstate = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonstate);
    }
  }

  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("todoItems");
    const todoItems = JSON.parse(itemsFromLocalStorage);
    if (todoItems) {
      this.setState(() => ({
        todoItems
      }));
    }
  }
  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRemoved
      )
    }));
  };

  handleRemoveAll = () => {
    this.setState(prevState => {
      return {
        todoItems: []
      };
    });
  };

  render() {
    const { todoItems, newTodo } = this.state;
    return (
      <div className={todoStyles.container}>
        <Header title="MY TASK CLOCK" />

        <h1 className={todoStyles.title}>Welcome to my todo App</h1>
        <div className={todoStyles.wrapper}>
          <div className={todoStyles.forms}>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="">
                <h1>Todo Items</h1>
              </label>
              <br />
              <input
                type="text"
                name="new-Todo-item"
                value={newTodo}
                onChange={this.handleChange}
              />{" "}
              <br />
              <button>Submit</button>
            </form>
          </div>
          <div className={todoStyles.cover}>
            <button
              className={todoStyles.removeAllButton}
              style={{ display: todoItems.length !== 0 ? "block" : "none" }}
              onClick={this.handleRemoveAll}
            >
              removeall
            </button>
            {todoItems.map(item => (
              <TodoItems
                key={item}
                handleRemoveOneItem={this.handleRemoveOneItem}
                individual={item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
