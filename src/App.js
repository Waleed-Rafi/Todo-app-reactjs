import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/Pages/About";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "first todo", completed: false },
      { id: 2, title: "second todo", completed: false },
      { id: 3, title: "third todo", completed: false },
      { id: 4, title: "fourth todo", completed: false }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos].filter(todo => todo.id !== id)
    });
  };
  addTodo = todoTitle => {
    let temp = [...this.state.todos];
    temp.push({
      id: temp.length + 1,
      title: todoTitle,
      completed: false
    });
    this.setState({
      todos: temp
    });
  };
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
