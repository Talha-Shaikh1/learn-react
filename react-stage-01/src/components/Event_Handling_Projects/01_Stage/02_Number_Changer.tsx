import { useState } from "react"

function Number_Changer() {
    const [num, setNum] = useState(0);
    function addNum (){
        setNum(prev => prev + 1)
    }
    function minusNum(){
        setNum(prev => {
            if (prev === 0) return 0;
            return prev - 1
        })
    }
    function multiplyNumber(){
        setNum(prev => prev * 2)
    }
    function resetNumber(){
        setNum(0)
    }

  return (
    <>
    <h3>Number: {num}</h3>
    <div>
        <button onClick={addNum}>+</button>
        <button onClick={minusNum}>-</button>
        <button onClick={multiplyNumber}>x2</button>
        <button onClick={resetNumber}>Reset</button>
    </div>
    </>
  )
}

export default Number_Changer