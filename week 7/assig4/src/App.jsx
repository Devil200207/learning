import { useEffect } from 'react'
import './App.css'

function App() 
{
   useEffect(() =>{
    fetch("api",{
      method: "GET",
      headers: {
        "Content-Type": "application"
      }
    }).then()
   },[])
    
 return <div></div>
}

export default App
