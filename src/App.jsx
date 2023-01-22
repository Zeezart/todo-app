import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const todayDate = new Date().toLocaleString()
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState({
    task: "",
    isDone: false
  })

  function handleChange(event){
    const {name,value,type,checked}=event.target
    setInput(value)
  }

  useEffect(()=>{
    
  },[input])
  function addTask(){
    useEffect(()=>{
      setTasks(prevTask => {
        return  {...prevTask, tasks}
      })
      console.log(tasks)
      setInput("")
    },[])
  }
  

  // const showTask = tasks.map(item => {
  //   return (
  //     <ul>
  //       <input type='checkbox' id='done' checked={tasks.isDone} name='task'/>
  //       <label htmlFor='done'><li>{item}</li></label>
  //       <li><input type='checkbox' id='done' checked={tasks.isDone} />{item}</li>
  //     </ul>
  //   )
  // })
  return (
    <section id='todo'>
      <div className="App">
        <div className='date'>
          <p>{todayDate}</p>
        </div>
        <div className='input-section'>
          <input 
            type='text' 
            value={input}
            className='task'
            placeholder='Add Task'
            onChange={handleChange}
          />
          <button className='add-task' onClick={addTask} name='button'>Add Task</button>

          {/* <ul>
            {tasks.map((task) => {
              return <li>{task}</li>
            })}
          </ul> */}

          {/* {showTask} */}

          {/* <ul>
            {tasks.map((task) => {
              return (
                <div>
                  <input type='checkbox' id='done' checked={tasks.isDone} />
                  <label htmlFor='done'><li>{task}</li></label>
                </div>
              )
            })}
          </ul> */}

        </div>

        <div className='added-tasks'></div>
        <div className='keep-count'>
          
        </div>
      </div>
    </section>
  )
}

export default App
