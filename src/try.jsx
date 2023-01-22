import React, { useState } from 'react'
import {FaMinus} from 'react-icons/fa'
import './App.css'

function Try() {

  // Getting the date properties
  const todayDate = new Date()
  const displayDate = todayDate.toLocaleDateString()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let day = daysOfWeek[todayDate.getDay()]

  // Setting States
  const [input, setInput] = useState("")
  const [tasks, setTask] = useState([])
  const [count,setCount] = useState(0)

  // Getting the value of the input appear
  function handleChange(event){
    const {value} = event.target
    setInput(value)
  }

  function handleChecked(event){
    const isChecked = event.target.checked
    console.log(isChecked)
    if (isChecked === true){
      setCount(count + 1)
    }else{
      setCount(count - 1)
    }
  }

  // Adding the inputed task to the array state
  function addTask(){
    if (input === ""){
      alert("You can't add an empty Task")
    }else{
      setTask(prevTask => {
        return  ([
          ...prevTask, input
        ])
      })
      setInput("")
    }
  }

  

  // Deleting a task from the array of tasks
  const handleDelete = index => {
    setTask(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }
  
  //Setting count state
  
  // Rendering the task array on the page
  const showTask = tasks.map((item,index) => {
    return (
      <ul>
        <li className='task-list' key={index}>
          <input type='checkbox' id='done' name='isDone' value={item} onChange={handleChecked}/>
          <label htmlFor='done'>{item}</label>
          <button className='delete-button' onClick={() => handleDelete(index)}><FaMinus /></button>
        </li>
      </ul>    
    )
  })

  //Rendering the interface on the screen
  return (
    <section id='todo'>
      <div className="app">
        <h2 className='app-name'>Todo App</h2>
        <div className='date'>
          <p className='weekDay'>{day}</p>
          <p className='actualDate'>{displayDate}</p>
        </div>
        <div className='input-section'>
          <input 
            type='text' 
            value={input}
            className='task'
            name='task'
            placeholder='Add Task'
            onChange={handleChange}
          />
          <button className='add-task' onClick={addTask} >Add Task</button>
        </div>

        <div className='added-tasks'>{showTask}</div>

        <div className='keep-count'>
          <p className='count-box'>{count} of {tasks.length} task done</p>
        </div>
      </div>
    </section>
  )
}

export default Try
