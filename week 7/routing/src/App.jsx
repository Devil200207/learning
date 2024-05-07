import {Suspense, lazy,memo} from 'react';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
const Landing = lazy(() => import('./components/landing'));
const Dashboard = lazy(() => import('./components/Dashboard')); 

function App() {

  return (
   <div>
   
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path='/dashboard' element={ <Suspense fallback={"loading...."}><Dashboard/></Suspense>}/>
          <Route path='/' element={<Suspense fallback={"loading...."}><Landing/></Suspense>}/>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

const Appbar = memo (() =>
{
  const navigate = useNavigate();
  return <div>
    <button onClick={() =>{
      navigate("/");
    }}>Landing page</button>

    <button onClick={() =>{
    navigate("/dashboard");
    }}>Dashboard page</button>
  </div>
})

export default App
