import React from 'react'

const Todo = ({ todo,toggleTodo }) => {

  const CheckboxClick = () => {
    // console.log(todo.id);
    toggleTodo(todo.id);
  };

  return (
  <div>
    <label>
      <input type="checkbox" checked={todo.completed} readOnly onChange={CheckboxClick}></input>
    </label>
    { todo.name }
  </div>
  )
}

export default Todo;
