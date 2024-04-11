import { useState } from 'react'

import './App.css'

function App() {
  const [todos, addTodos] = useState([
  {
    title:"go to gym",
    description:"go to gym 7-9",
    complete:false
  },
  {
    title:"go to party",
    description:"go to party tonight",
    complete:false
  }])

  return (

    <div>
      {todos.map((todo) =>{
        return <Todo title={todo.title} description = {todo.description}></Todo>
      })}
      <CustomButton todos={todos} addTodos={addTodos}></CustomButton>
    </div>
    
  )
}

function Todo(props)
{
  return <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
}

function CustomButton(props)
{
  function addTodooo()
  {
    props.addTodos([...props.todos,{
      title:"go to play",
      description:"go to play at ground",
      complete: false
    }])
  }
  return <button onClick={addTodooo}>add some todo</button>
}

export default App
