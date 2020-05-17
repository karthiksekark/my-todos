// CreateTodo
// Todo Count
// Show Todos
import React from "react";
import CreateTodo from "./createTodo";
import ShowTodosCount from "./showTodoCount";
import ShowTodos from "./showTodos";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    addTodoValue: "",
    myTodosList: [],
    addTodoValueExist: true,
  };
  onADDTodoChangeHandler(event) {
    this.setState({
      addTodoValue: event.target.value,
      addTodoValueExist: !(event.target.value.trim().length > 0),
    });
  }
  onADDTodoClickHandler = () => {
    const myTodosList = [...this.state.myTodosList];
    let newIndex = myTodosList.length || 1;
    if (myTodosList.length > 0) {
      newIndex = myTodosList[myTodosList.length - 1].todoId + 1;
    }
    myTodosList.push({
      todoId: newIndex,
      todoName: this.state.addTodoValue,
      isEdit: false,
      disabled: false,
    });
    this.setState({ myTodosList, addTodoValue: "", addTodoValueExist: true });
  };
  onTODODeleteHandler(singleTodo) {
    const deleteConfirmation = window.confirm(
      `Are you sure want to delete ${singleTodo.todoName}?`
    );
    if (deleteConfirmation) {
      let myTodosList = [...this.state.myTodosList];
      myTodosList = myTodosList.filter((todo) => {
        return todo.todoId !== singleTodo.todoId;
      });
      this.setState({ myTodosList });
    }
  }
  onTODOEditHandler = (todoIndex, todoName) => {
    const editConfirmation = window.confirm(
      `Are you sure want to edit ${todoName}?`
    );
    if (editConfirmation) {
      const myTodosList = [...this.state.myTodosList];
      myTodosList.forEach((todo, index) => {
        if (index === todoIndex) {
          todo.isEdit = true;
        }
        todo.disabled = true;
      });
      this.setState({ myTodosList });
    }
  };
  onSingleTODOChangeHandler = (event, todoIndex) => {
    const myTodosList = [...this.state.myTodosList];
    myTodosList.forEach((todo, index) => {
      if (index === todoIndex) {
        todo.todoName = event.target.value;
      }
    });
    this.setState({ myTodosList });
  };
  onTODOUpdateHandler = (todoIndex, todoName) => {
    const updateConfirmation = window.confirm(
      `Are you sure want to update ${todoName}?`
    );
    if (updateConfirmation) {
    const myTodosList = [...this.state.myTodosList];
    myTodosList.forEach((todo, index) => {
      if (todoIndex === index) {
        todo.todoName = todoName;
        todo.isEdit = false;
      }
      todo.disabled = false;
    });
    this.setState({ myTodosList });
  }
  }
  render() {
    const isMyTodosListExists =
      this.state.myTodosList.length > 0 ? (
        <div>
          <ShowTodosCount todosCount={this.state.myTodosList.length} />
          <ShowTodos
            todosList={this.state.myTodosList}
            onTodoDeleteHandler={this.onTODODeleteHandler.bind(this)}
            onTodoEditHandler={this.onTODOEditHandler}
            onSingleTodoChangeHandler={this.onSingleTODOChangeHandler}
            onTodoUpdateHandler={this.onTODOUpdateHandler}
          />
        </div>
      ) : null;
    return (
      <div className="App">
        <h1>My Todos App</h1>
        <CreateTodo
          todoValue={this.state.addTodoValue}
          onAddTodoChangeHandler={this.onADDTodoChangeHandler.bind(this)}
          onAddTodoClickHandler={this.onADDTodoClickHandler}
          todoValueExist={this.state.addTodoValueExist}
        />
        {isMyTodosListExists}
      </div>
    );
  }
}

export default App;
