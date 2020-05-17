import React, { Component } from "react";
class createTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.todoValue} onChange={this.props.onAddTodoChangeHandler}/>
        <button disabled={this.props.todoValueExist} onClick={this.props.onAddTodoClickHandler}>Add Todo</button>
      </div>
    );
  }
}

export default createTodo;
