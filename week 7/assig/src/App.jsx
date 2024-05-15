import Uppperbg from "./components/Upperbg";
import Bottom from "./components/Bottom";
import './App.css'
function App()
{
  return <div className="outer">
    <div className="inner">
      <div className="ubg">
        <Uppperbg/>
      </div>
      <div className="bott">
        <Bottom/>
      </div>
    </div>
  </div>
}

export default App;