import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props)
{
  function Increment()
  {
    props.setCount(props.count+1);

  }
  return <button onClick={Increment}>Count {props.count}</button>
}

export default App
