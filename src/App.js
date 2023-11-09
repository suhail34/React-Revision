import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if(input!==""){
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${input}/todos`)
        const data = await resp.json();
        setTodos(data);
        console.log(data)
      }else {
        console.log("input is empty")
        setTodos([]);
      }
    }
    fetchData()
  }, [input]);

  return (
    <div>
      <h1>User and there todos</h1>
      <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} placeholder='Enter User ID' />
      <ul>
        {Array.isArray(todos) && todos.length > 0 ? todos.map((todo, index)=>(
          <li key={index}>
            {!todo.completed?
              <h3>{todo.title}</h3>:
              <h3 style={{textDecoration:"line-through"}}>{todo.title}</h3>
            }
          </li>
        )):<p>No user selected to view the todos</p>}
      </ul>
    </div>
  );
}

export default App;
