import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[title,setTitle]= useState(" ")
  const[desc,setDesc]=useState(" ")
  return (

    <>
    <h1 >My Todo List</h1>
    <div className="todo-main">
      <div className="todo-input">
        <div className="todo-in-item">
          <label >Title:</label>
          <input type="text" placeholder='Enter title of your  todo task.' />
        </div>
        <div className="todo-in-item">
          <label >Description:</label>
          <input type="text" placeholder='Describe your todo task'  
          />
        </div>
        <div className="todo-in-item">
          <button className='btn btn-success btnadd' > Add </button>
        </div>
      </div>
      <div className="todo-list">
        <div className="list-items">
      hello js
        </div>
        <div className="list-items">
      hello js
        </div>
    </div>
    </div>
   
    </>
  )
}

export default App
