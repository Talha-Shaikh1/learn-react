import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>

      <div className='buttons'>
        {/* <button onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
        <button onClick={() => {
          if (count !== 0) {
            setCount(prev => prev - 1)
          }
          
        }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button> */}


        <Button text='Increment' func={()=>setCount(prev => prev + 1)}/>
        <Button text='Decrement' func={()=>{
          if (count !== 0) {
            setCount(prev => prev - 1)
          }
        }}/>
        <Button text='Reset' func={()=>setCount(0)}/>
      </div>
      </div>
    </>
  )
}

export default App
