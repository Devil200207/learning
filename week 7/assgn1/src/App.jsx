import './App.css'
import { useState } from 'react';
import Bgchanger from './components/Bgchanger'
function App() {
  const [bgcolor,setbgcolor] = useState('white')
  return <div style={{ backgroundColor: bgcolor, transition: 'background-color 0.5s' }} className='outer'>
    <Bgchanger className='inner' bgcolor={bgcolor} setbgcolor={setbgcolor} />
    
  </div>
}

export default App