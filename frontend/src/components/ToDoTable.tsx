import React from "react";

interface ToDo {
  id: number;
  description: string;
  completed: boolean;
}

interface ToDoTableProps {
  todos: ToDo[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const ToDoTable: React.FC<ToDoTableProps> = ({
  todos,
  onComplete,
  onDelete,
}) => {
  const renderCompleted = (completed: boolean) => {
    return completed ? "Yes" : "No";
  };

  if (!todos || todos.length === 0) {
    return <div> No todos to display</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed</th>
          <th>Complete</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.description}</td>
            <td>{renderCompleted(todo.completed)}</td>
            <td>
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            </td>
            <td>
              <button onClick={() => onDelete(todo.id)} className="delete">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
