import React from 'react';

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <h2>Todo App</h2>
      <div className="m-2 list-group">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`list-group-item ${
              todo.completed ? 'list-group-item-success' : ''
            }`}
          >
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-md-8 col-lg-9">{todo.title}</div>
              <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-end">
                {!todo.completed && (
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => completed(todo)}
                  >
                    Kész
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => remove(todo.id)}
                >
                  Törlés
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
