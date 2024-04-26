import { useState,useEffect } from "react"
import axios from "axios";



function App() {
  
  const [count,setCount] = useState(1);
  return (
    <div>
      <button onClick={()=>setCount(1)}>1</button>
      <button onClick={()=>setCount(2)}>2</button>
      <button onClick={()=>setCount(3)}>3</button>
      <button onClick={()=>setCount(4)}>4</button>
      <button onClick={()=>setCount(5)}>5</button>
      <Todo id={count}/>     
    </div>
  )
}

function Todo({id})
{
  const [todo,setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) =>{
      setTodo({
        title: res.data.todo.title,
        description: res.data.todo.description
      })
    })

  },[id])


  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
