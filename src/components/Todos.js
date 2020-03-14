import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    let todos = null;
    if (this.props.todos.length > 0) {
      todos = this.props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      ));
    } else {
      todos = (
        <p align="center">
          <br />
          <br /> There is nothing to show
        </p>
      );
    }
    return <div> {todos} </div>;
  }
}
Todos.propTypes = {
  todos: propTypes.array.isRequired
};

export default Todos;
