import { useState } from 'react'
import './App.css'
import Ibox from './components/Ibox';
import Card from './components/Card';

function App() {

  const[info,setinfo] = useState([]);
  const[inputval,setinput] = useState('');
  return <div>
    <Ibox inputval={inputval} setinfo={setinfo} setinput={setinput} />
    <Card info={info} />
  </div>
}

export default App
