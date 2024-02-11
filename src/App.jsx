import React, { useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css'
const App = () => {
  const[title,setTitle]= useState("")
  const[desc,setDesc]=useState("")
  const[task,setTask]=useState([])
  
  useEffect(()=>{
    let savedTodos=JSON.parse (localStorage.getItem ('todoData'))
    if(savedTodos){
      setTask(savedTodos)
    }
  },[])
  const addTodo=()=>{
    if(title.trim() !== "" && desc.trim() !== "") 
    //check if user enter only space
    // if(title.length>0 && desc.length>0 )

    {
      let newTask=[...task,{title,desc}]
      setTask(newTask) 
        // without changing past state, update new state

       localStorage.setItem ('todoData', JSON.stringify (newTask));
       
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
        <FontAwesomeIcon icon={faPenToSquare} className='check-btn' onClick={()=>{
          handleUpdate(i)
        }}/>

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
  localStorage.setItem ('todoData', JSON.stringify (reducetask));
  setTask(reducetask)
}

const handleUpdate=(i)=>{
  const updatedTitle=prompt("enter updated title:")
const updatedDesc=prompt("enter updated description:")
if(updatedTitle.trim() !== "" && updatedDesc.trim() !== ""){
  if(confirm('Do you want to update this task?')){
  const updatedTask=[...task];
  updatedTask[i]={title:updatedTitle,desc:updatedDesc};
  localStorage.setItem ('todoData', JSON.stringify (updatedTask));

  setTask(updatedTask);
  }
}
else{
  // if(confirm('enter the task to update!')){
  //   handleUpdate(i)
  // }
  window.alert("Title and description cannot be empty!");
}
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
