import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0)
    // const [message, setMessage] = useState("operation sucessfull")
    function addCount (amount: number ){
        setCount(prev => prev + amount)
    }

    function minusCount(amount: number){
        setCount(prev => {
            if (prev - amount <= 0) {
                return 0
            }
            return prev - amount
        })
    }
    
  return (
    <div className='flex flex-col border-1 max-w'>
        <div className="bg-blue-200">Your Score {count}</div>
        <div className="flex flex-col gap-10">
        <button onClick={() => addCount(1)}>
            + 1
        </button>
        <button onClick={() => addCount(5)}>
            + 5
        </button>
        <button onClick={() => addCount(10)}>
            + 10
        </button>
        </div>
        <button onClick={() => minusCount(1)}>
            - 1
        </button>
        <button onClick={() => minusCount(5)}>
            - 5
        </button>
        <button onClick={() => setCount(0)}>
            reset
        </button>
    </div>
  )
}

export default Counter