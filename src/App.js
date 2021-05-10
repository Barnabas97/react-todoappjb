import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <NewTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
