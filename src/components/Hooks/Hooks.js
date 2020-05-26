import React,{useState} from 'react'

function Hooks() {
  const[things,setThings]=useState(100)
  return(
    <div>
      <h2>Hooks</h2>
      <h1>{things}</h1>
      <button onClick={()=>setThings(things+1)}>Add</button>
    </div>
  )
}

export default Hooks
