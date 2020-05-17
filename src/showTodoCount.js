import React from "react";
class showTodoCount extends React.Component {
  render() {
    return <h3>Show Todos Count {this.props.todosCount}</h3>;
  }
}

export default showTodoCount;
