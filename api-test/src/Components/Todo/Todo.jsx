import React from 'react'

const Todo = (props) => {
    const {title, id} =props.todoItem
  return (
    <>
    <div  style={{background:'red',color:'#fff', padding:'10px 0', margin:'20px',borderRadius:'10px',width:'500px',height:'300px',fontSize:'15px'}}>
    <h1>Name: {title}</h1>
    <p>Id: {id}</p>
    </div>
    </>
  )
}

export default Todo