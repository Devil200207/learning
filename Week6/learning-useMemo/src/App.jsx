import { useEffect, useMemo, useState } from "react"
function App() {
  const [counter,setCounter] = useState(0);
  const [sum,setSum] = useState(1);

  let count = useMemo(() =>{
    let count = 0;
    for(let i=1;i<=sum;i++)
    {
      count = count + i;
    }

    return count;  
  },[sum])

  

  return (
    <div>

      <input type="text" onChange={(e) =>{
        setSum(e.target.value)
      }}></input>

      <h3>Sume from 1 to {sum} is = {count} </h3>

      <button onClick={()=>{
        setCounter(counter+1);
      }}>Counter ({counter}) </button>

    </div>
  )
}

export default App
