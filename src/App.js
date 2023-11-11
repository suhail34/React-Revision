import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear_todos, get_todos } from './actions';
import './App.css';

function App() {
  //const [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let todos = [];
  todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(input!==""){
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${input}/todos`);
        const data = await resp.json();
        dispatch(get_todos(data));
        console.log(todos);
      }else {
        console.log("input is empty");
        dispatch(clear_todos());
      }
    }
    fetchData();
  }, [input]);

  return (
    <div>
      <h1>User and there todos</h1>
      <input type="text" onChange={(e)=>{
        setInput(e.target.value);
      }} placeholder='Enter User ID' />
      <ul>
        {Array.isArray(todos) && todos.length > 0 ? todos.map((todo, index)=>(
          <li key={index}>
            {!todo.completed?
              <h3>{todo.title}</h3>:
              <h3 style={{textDecoration:"line-through"}}>{todo.title}</h3>
            }
          </li>
        )):<p>No user selected to view the todos</p>
        }
     </ul>
    </div>
  );
}

export default App;
