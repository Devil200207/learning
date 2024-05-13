import { RecoilRoot, useSetRecoilState,useRecoilValue } from "recoil";
import {todoAtom,filtertodo,todoListState} from './store/atoms/todoapp'
import { useState } from "react";

function App() {

  return (
    <div>
      <RecoilRoot>
        <TodoA/>
      </RecoilRoot>
    </div>
  )
}

function TodoA()
{
  return <div>
    <InputTodo/>
    <Alltodo/>
    <Filter/>
  </div>
}

function InputTodo()
{
  const settodo = useSetRecoilState(todoAtom);
  const [title,settitle] = useState("");
  const [description,setdesctiption] = useState("");
  


  return <div>
  <h1>Input the Todos</h1>
    <input type="text" placeholder="title" onChange={(e) =>{
      settitle(e.target.value);
    }}></input>
    <input type="text" placeholder="description" onChange={(e) =>{
      setdesctiption(e.target.value);
    }}></input>

    <button onClick={() => {
      settodo((oldTodo) => {
        return [...oldTodo, {title, description}]
      })
    }}>Add todo</button>
  </div>
}

function Alltodo()
{
  const todo = useRecoilValue(todoAtom);

  return <div>
  <h1>All the Todos: </h1>
  <ul>
    {todo.map((todo, index) => {
      return <div key={index}>
        <li><h3>Title: {todo.title}</h3></li>
        <p>Description: {todo.description}</p>
      </div>
    })}
    </ul>
  </div>
}

function Filter()
{
  const setFilter = useSetRecoilState(todoListState);

  return <div>
    <input type="text" placeholder="title" onChange={(e) =>{
    setFilter(e.target.value);
  }}></input>
  <Showfilter/>
  </div>
}

function Showfilter()
{
  const filterTodo = useRecoilValue(filtertodo);

  return <div>
  <h1>filter Todos: </h1>
  <ul>
    {filterTodo.map((todo, index) => {
      return <div key={index}>
        <li><h3>Title: {todo.title}</h3></li>
        <p>Description: {todo.description}</p>
      </div>
    })}
    </ul>
  </div>
}

export default App
