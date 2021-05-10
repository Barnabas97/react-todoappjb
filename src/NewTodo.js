import React, { useState } from 'react';

const NewTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = async e => {};

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Teszt kész',
      checked: true
    },
    {
      id: 2,
      text: 'Kenyeret venni',

      checked: true
    },
    {
      id: 3,
      text: 'Kimosni a ruhákat',

      checked: false
    },
    {
      id: 4,
      text: 'Vizsgára készülni',

      checked: false
    },
    {
      id: 5,
      text: 'Teszt',

      checked: false
    }
  ]);

  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <form className="row m-2 justify-content-between" onSubmit={addTask}>
      <input
        className="form-control col-7 col-md-9 col-lg-10"
        type="text"
        name="todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        className="btn btn-primary col-4 col-md-2 col-lg-1"
        type="button"
        onClick={addTask}
      >
        Hozzáadás
      </button>
    </form>
  );
};

export default NewTodo;
