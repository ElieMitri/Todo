import React, { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function displayTodo() {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }


  return (
    <div className="wrapper">
      <div className="todo__title">Todo list</div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo__Input"
      />
      <button className="add__button" onClick={displayTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo">
            {todo} <button className="delete__button" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
