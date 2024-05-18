import Card from "./components/Card";
import ScrollBar from "./components/ScrollBar";
import Header from "./components/Header";

function App() {
  return <div>
    <div className="sticky z-10 top-0">
      <Header/>
    </div>
   <div className="flex">
    <div className="box-border h-screen overflow-y-scroll flex-none w-1/5 p-4 border-4">
      <ScrollBar/>
    </div>
    <div className="grid p-4 grid-cols-3 w-full gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
   </div>
  </div>
}

export default App
