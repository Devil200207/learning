import { useEffect,useState } from "react";
import { Todos } from "./assets/components/Todos";

function App()
{

  const [todo,setTodo] = useState([]);

  useEffect(() =>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) =>{
        const json = await res.json();
        setTodo(json.todos);
      })
    }, 10000);
    

  },[]);

  return <div>
    <Todos Todo={todo}/>
  </div>

}

export default App;

