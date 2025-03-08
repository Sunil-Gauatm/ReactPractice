import { useState } from "react"
import "./App.css"

function App() {

  const[array,setarray] = useState([])
  const[task,settask] = useState("")

  function addTask(){


    setarray(a=>a =([...a,task]))
    settask("")

  }
  function taskadd(e){
    settask(t => t = (e.target.value))
  }

  function keyDown(event){
    if(event.key == "Enter"){
      addTask()
    }
  }
  function deleteTask(index){
    setarray(a => a.filter((_,i)=> i !== index))
  }

  return (
    <>
    <div className="container">
      <div className="input">
      <input type="text" value={task} onChange={taskadd} onKeyDown={keyDown} placeholder="Enter your task here"/>
      <button onClick={addTask}>Add</button>
      </div>

      <div className="tasklist">
          
          {array.map((e, i)=>(<div className="task" key={i}>{e} <div onClick={() =>deleteTask(i)} className="delte">Delete</div> </div>))}
      </div>
    </div>     
    </>
  )
}

export default App
