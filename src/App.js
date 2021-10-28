import React from 'react';
import { useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        comlete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  return (
    <div className='App'>
      <header className='h1ToDo'>
        <h1>To Do List: {todos.length}</h1>
      </header>
      <ToDoForm className='typing' addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}

export default App;
