import './Bgchnager.css';
export default function Bgchanger({bgcolor,setbgcolor})
{
    return <div>
         
        <button onClick={()=>{
            setbgcolor('red')
        }}>Red</button>
        <button onClick={()=>{
            setbgcolor('yellow')
        }}>Yellow</button>
        <button onClick={()=>{
            setbgcolor('black')
        }}>Black</button>
        <button onClick={()=>{
            setbgcolor('purple')
        }}>Purple</button>
        <button onClick={()=>{
            setbgcolor('Green')
        }}>Green</button>
        <button onClick={()=>{
            setbgcolor('blue')
        }}>Blue</button>
        <button onClick={()=>{
            setbgcolor('white')
        }}>Default</button>
    </div>
}