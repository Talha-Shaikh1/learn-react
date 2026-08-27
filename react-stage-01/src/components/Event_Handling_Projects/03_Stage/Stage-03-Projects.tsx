import { useState } from "react"


export function SimpleLoginUI(){
    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [status, setStatus] = useState("")
    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ){
        event.preventDefault()
        console.log(event.target)
        setStatus("Login Sucessfully")
    }
    return(
        <>
        <h4>Project 08 --- Simple Login UI</h4>
        <form onSubmit={handleSubmit} style={{margin: 20, gap:10, display: 'flex', flexDirection:"column"}}>
            <label htmlFor="email">
                Email: 
                <input 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label htmlFor="pass">
                Password: 
                <input 
                value={pass}
                onChange={(event) => setPass(event.target.value)}
                />
            </label>
                     <button type="submit" style={{padding: 20}}>Login</button>
        </form>

       {status && <p>{status} pass: {pass} Email: {email}</p>}
        </>
    )
}


export function EnterKeyAction(){
    const [status, setStatus] = useState("")
    function handleKeyDown(
        event: React.KeyboardEvent<HTMLInputElement>
    ){
        if (event.key === "Enter") {
            console.log("Submitted")
            setStatus("Submitted")
        }
        else if(event.key === "Escape"){
            console.log("Cancelled")
            setStatus("Cancelled")
        }
    }
    return(
        <>
        <h4>Project 09 --- Enter Key Action</h4>
        <input type="text" placeholder="Type smething"
        onKeyDown={handleKeyDown}/>
        {status && <p>{status}</p>}
        </>
    )
}

export function HoverTracker(){
    const [mouseEvent, setMouseEvent] = useState("")
    return(
        <>
        <div style={{display: "flex", alignItems:'center', justifyContent:'center', margin: 10, flexDirection: 'column'}}>
            <div 
            style={{padding: 20, backgroundColor: 'red', height: 20, width: 80, alignItems: 'center', justifyContent: 'center'}}
            onMouseEnter={() => setMouseEvent("Inside")}
            onMouseLeave={() => setMouseEvent("Outside")}>
            Hover Me
            </div>
            {mouseEvent && <p>Mouse: {mouseEvent}</p>}
         </div>
        </>
    )
}