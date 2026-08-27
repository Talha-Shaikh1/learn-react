import { useState } from "react"



export function Concept_Six() {

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log(event)
        console.log(event.type)
        console.log(event.target)
        console.log(event.currentTarget)
    }

    return (
        <div>
            <h4>Concept Six Event Object</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export function TargetVsCurrentTarget(){
    function handleClick(event: React.MouseEvent<HTMLDivElement>){
        console.log(event.target)
        console.log(event.currentTarget)
    }
    return(
        <>
        <h4>Concept 7 target vs currentTarget</h4>
            <div onClick={handleClick}>
                <button>
                    Click
                </button>
            </div>
        </>
    )
}

export function OnChange(){
    return(
        <>
        <h4>Concept 8 onChange </h4>
        <input
            onChange={(event) => {
                console.log(event.target.value
                )
            }} 
        />
        </>
    )
}

export function ControlledInputWithUseState(){
    const [name, setName] = useState<string>("")
    return(
        <>
        <h4>Concept 9 Controlled Input With useState </h4>
            <input 
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </>
    )
}