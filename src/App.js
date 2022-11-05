import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  //[状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [todos, setTodos] = useState([]);

  //inputの記述を取得
  const todoNameRef = useRef();
  //タスク追加処理
  const AddTodo = () => {
    // console.log(todoNameRef.current.value);
    if(todoNameRef.current.value === '') {
      alert('文字を入力してください');
      return;
    }
    //取得したinputの入力内容をnameに格納
    const name = todoNameRef.current.value;
    //上記で取得したnameを新しいオブジェクトに格納して状態を変更する
    setTodos((textAdd) =>{
      return[...textAdd,{id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    //追加したタスクをnewTodosに代入
    const newTodos = [...todos];
    // console.log(newTodos);
    //チェックしたidと追加したタスクのidが同じタスクをtodoに代入する
    const todo = newTodos.find((todo) => todo.id === id);
    //todoのcompletedを反転する
    todo.completed = !todo.completed;
    //変更した内容を更新する
    setTodos(newTodos);
  }

  //削除処理
  const deleteTodo = () => {
    //todo(タスク)からチェックが入っていないリストをdeleteitemに代入
    let deleteitem = (todos.filter((todo) => todo.completed === false));
    // console.log(deleteitem);
    //削除した内容を更新する
    setTodos(deleteitem);
  }
  //試し処理
  const test = () => {
    if((todos.find((find) => find.name === todoNameRef.current.value ))) {
      alert('一致する名前がありました');
    }
    // console.log(todos);
    // console.log(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}></input>
      <button onClick={AddTodo}>タスクを追加</button>
      <button onClick={deleteTodo}>完了したタスクの削除</button>
      <button onClick={test}>試し処理</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
