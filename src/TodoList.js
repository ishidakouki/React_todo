import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos,toggleTodo }) => {
  // console.log(todos);
  return todos.map((todo) =>
  // console.log(todo));
   <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id}/>);
};

export default TodoList;
