import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom,evenSelector } from "./store/atoms/count";
function App()
{
  return <div>
    <RecoilRoot>
      <Counterpass/>   
    </RecoilRoot>
      
  </div>
}

function Counterpass()
{
  return<div>
    <Counter/> 
    <ButtonShow/>
    <Showeven/>
  </div>
}

function Counter()
{
  const count=useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
  
}

function Showeven()
{
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ?  null:"It is Even"}
  </div>
    
}

function ButtonShow()
{
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count => count+1)}>Increment</button>
    <button onClick={() => setCount(count => count-1)}>Decrement</button>
  </div>
}

export default App;