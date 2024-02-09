import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css'
const App = () => {
  const[title,setTitle]= useState("")
  const[desc,setDesc]=useState("")
  const[task,setTask]=useState([])

  const addTodo=()=>{
    if(title.trim() !== "" && desc.trim() !== "") 
    //check if user enter only space
    // if(title.length>0 && desc.length>0 )
    {
      setTask([...task,{title,desc}]) 
      // without changing past state, update new state
      setTitle("");
      setDesc("");
    }
    else{
      alert('Enter todo task')
    }
  
  }

  let showTask=<h2>No task available</h2>
if(task.length>0){
  showTask=task.map((item,i)=>{
    return(
      <div className="list-items">
        <div>
        <h2>{item.title} </h2> 
       <p>{item.desc}</p> 

        </div>
      
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='check-btn'/>

        <FontAwesomeIcon icon={faTrash} className='dlt-btn'
        onClick={()=>{
           handleDelete(i)
      }
      }/>

      </div>

       {/* <button >
        Delete</button> */}
      </div>
    )
  })
}
const handleDelete=(i)=>{
  let reducetask=[...task]
  reducetask.splice(i,1)
  setTask(reducetask)
}
 

 
  return (

    <>
    <h1 >My Todo List</h1>
    <div className="todo-main">
      <div className="todo-input">
        <div className="todo-in-item">
          <label >Title:</label>
          <input type="text" 
          placeholder='Enter title of your  todo task.'
          value={title}
          onChange={e=>{
            setTitle(e.target.value)
          }} />
        </div>
        <div className="todo-in-item">
          <label >Description:</label>
          <input type="text" 
          placeholder='Describe your todo task' 
          value={desc}
           onChange={e=>setDesc(e.target.value)} 
          />
        </div>
        <div className="todo-in-item">
          <button className='btn btn-success btnadd' onClick={ addTodo } > Add </button>
        </div>
      </div>
      <div className="todo-list">
          {showTask}


    </div>
    </div>
   
    </>
  )
}

export default App
