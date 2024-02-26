import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './App.css';

const date = new Date();
const today = date.toLocaleDateString();

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [finsh, setFinish] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo('');
    }
  };

  const history = () => {
    if (finsh.length === 0 || finsh.every((item) => item.status === true)) {
      document.getElementsByClassName('todos-2')[0].style.display = 'block';
      document.getElementsByClassName('BTN_hs-dide')[0].style.display = 'block';
      
    }
  };

  const history2 = () => {
    document.getElementsByClassName('todos-2')[0].style.display = 'none';
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const removeHistory = (id) => {
    const updatedHistory = finsh.filter((item) => item.id !== id);
    setFinish(updatedHistory);
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="mainHeading text-center">
        <h1 style={{ color: 'blue' }}>ToDo List</h1>
      </div>
      <div className="subHeading text-center mt-3">
        <h2>{today} 🌝 ☕ </h2>
      </div>
      <div className="input d-flex justify-content-center align-items-center mt-3">
        <input
          value={todo}
          type="text"
          className="form-control"
          placeholder="🖊️ Add item..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo} className="btn btn-primary ml-2">
          Add
        </button>
      </div>
      <div className="todos mt-4">
        {todos.map((item) => (
          <div key={item.id} className="todo bg-light rounded d-flex mt-2 justify-content-between align-items-center">
            <div className="left p-2">
              <input
                onChange={() => {
                  item.status = !item.status;
                  setFinish([...finsh, item]);
                  removeTodo(item.id);
                }}
                checked={item.status}
                type="checkbox"
                className="mr-2"
              />
              <p>{item.text}</p>
            </div>
            <div className="right p-2">
              <button onClick={() => removeTodo(item.id)} className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        ))}
        <a href='##' onClick={history} className='right p-2 bottom'> show Finished Todos</a>
      </div>
      <div className="todos-2 todos mt-4">
        <a href='##' onClick={history2} className='right BTN_hs-dide p-2 bottom'> hide Finished Todos</a>
        {finsh.map((item) => (
          <div key={item.id} className="todo bg-light rounded d-flex mt-2 justify-content-between align-items-center">
            <div className="left p-2">
              <p>{item.text}</p>
            </div>
            <div className="right p-2">
              <button onClick={() => removeHistory(item.id)} className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
