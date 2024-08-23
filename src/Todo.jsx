import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== ''){
      //trim func removes all whitespaces in the string
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      }

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  }

  const editTodo = (id, txt) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(txt);
  }

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId){
        return {...todo, text: editValue};
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue('');
  }
  

  return (
    <div className='todo-container'>
      <h2>To-Do List</h2>
      <input type='text' 
      onChange={(e)=>setInputValue(e.target.value)}
      value={inputValue}></input>

      {
        editMode ? (
          <div>
            <input type='text'
            value={editValue}
            onChange={(e)=>setEditValue(e.target.value)}></input>
            <button onClick={updateTodo}>Update</button>
          </div>
        ) : (
          <button onClick={addTodo}>Add</button>
        )
      }

      {/* <button onClick={addTodo}>Add</button> */}

      <ul>
        {
          todos.map((todo)=>(
            <li key={todo.id}>
              {todo.text}

              <div>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo
