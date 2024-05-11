// import {Suspense, lazy,memo} from 'react';
// import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
// const Landing = lazy(() => import('./components/landing'));
// const Dashboard = lazy(() => import('./components/Dashboard')); 

// import { useState } from "react";

// function App() {

//   return (
//    <div>
   
//       <BrowserRouter>
//       <Appbar/>
//         <Routes>
//           <Route path='/dashboard' element={ <Suspense fallback={"loading...."}><Dashboard/></Suspense>}/>
//           <Route path='/' element={<Suspense fallback={"loading...."}><Landing/></Suspense>}/>
//         </Routes>
//     </BrowserRouter>
//    </div>
//   )
// }

// const Appbar = memo (() =>
// {
//   const navigate = useNavigate();
//   return <div>
//     <button onClick={() =>{
//       navigate("/");
//     }}>Landing page</button>

//     <button onClick={() =>{
//     navigate("/dashboard");
//     }}>Dashboard page</button>
//   </div>
// })

// export default App

import { useState,useContext } from "react";
import { CountContext } from "./components/context";
function App()
{
  const[count,setcount] = useState(0)  

  return <div>
    <CountContext.Provider value={{count,setcount}}>
      <Counterpass/>
    </CountContext.Provider>
    
  </div>
}

function Counterpass()
{
  return<div>
    <Counter/> 
    <ButtonShow/>
  </div>
}

function Counter()
{
  const count=useContext(CountContext)
  return <div>
    {count}
  </div>
}

function ButtonShow()
{
  const [count,setcount] = useContext(CountContext);
  return <div>
    <button onClick={() => setcount(count+1)}>Increment</button>
    <button onClick={() => setcount(count-1)}>Decrement</button>
  </div>
}

export default App;