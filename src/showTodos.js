import React from "react";
import styles from "./appStyle.css";
class showTodos extends React.Component {
  render() {
    return (
      <div>
        <h4>Show Todos</h4>
        <table>
          <thead>
            <tr>
              <th>S. No</th>
              <th>Todo Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todosList.map((todo, index) => (
              <tr key={todo.todoId}>
                <td>{index + 1}</td>
                <td>
                  {todo.isEdit ? (
                    <input
                      type="text"
                      value={todo.todoName}
                      onChange={(event) =>
                        this.props.onSingleTodoChangeHandler(event, index)
                      }
                    />
                  ) : (
                    todo.todoName
                  )}
                </td>
                <td>
                  {todo.isEdit ? (
                    <button
                      onClick={() =>
                        this.props.onTodoUpdateHandler(index, todo.todoName)
                      }
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      disabled={todo.disabled}
                      onClick={() =>
                        this.props.onTodoEditHandler(index, todo.todoName)
                      }
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      const modfiedTodo = {
                        todoName: todo.todoName,
                        todoId: todo.todoId,
                      };
                      this.props.onTodoDeleteHandler(modfiedTodo);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default showTodos;
