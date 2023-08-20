import { useEffect, useState } from 'react'
import './App.css'
import Todo from './Components/Todo/Todo'
import Country from './Components/CountryApi/Country'

function App() {
  const [todos , setTodos] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responssss => responssss.json())
    .then(data => setTodos(data))
  },[])

  const todoSlice = todos.slice(0,20)

  return (
    <>
    {
      todoSlice.map((item)=> <Todo todoItem={item}></Todo>)
    }
    <Country></Country>
    </>
  )
}

export default App
