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


fetch("http://localhost:3000/addPatient", {
                     method:"POST",
                     body:JSON.stringify(
                     {
                        name:name,
                        email:email,
                        phone:phone,
                        city:city,
                        ymptom:symptom
                     }),
                     headers:
                     {
                         "Content-Type":"application/json"
                     }
                 }).then(async (res) => {
                     const json = await res.json();
                     console.log(json);
                     alert("Doctor added");
                 })