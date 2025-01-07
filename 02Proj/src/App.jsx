
import { useState } from 'react';
import './App.css'


function App() {
   const [counter, setCounter]= useState(0)

  const addValue = () => {
      setCounter(counter+1)
  }

  const remValue = () => {  
    
    setCounter(counter-1)
  }


  return (
    <>
    <h1>React Counter</h1>
    <h2>Click A Button</h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={remValue}>Remove Value</button>
    <p>Counts: {counter} </p>
    </>
  )
}

export default App
