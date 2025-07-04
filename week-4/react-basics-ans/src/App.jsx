import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo';

function App () {
  const [todos , setTodos] = useState([]);
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");

  const addTodo = () => {
    if(title && description) {
      setTodos([...todos, {title , description , completed : false}]);
      setTitle("");
      setDescription("");
    }
  };

  const completeTodo = (index , value) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = value;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <input 
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className='todos'>
        {todos.map((todo , index) => (
          <Todo
          key = {index}
          title = {todo.title}
          description = {todo.description}
          completed = {todo.completed}
          setCompleted = {(value) => completeTodo(index , value)}
        />
        ))}
      </div>
    </div>
  );
}

export default App
