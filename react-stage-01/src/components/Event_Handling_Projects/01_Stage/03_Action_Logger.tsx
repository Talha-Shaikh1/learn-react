import { useState } from "react"

function Action_Logger() {
    const [log, setLog] = useState<string>()
    function Login(){
        setLog("Login Successfully")
        console.log("Login Successfully")
    }
    function Logout(){
        setLog("Logout Successfully")
        console.log("Logout Successfully")
    }
    function Save(){
        setLog("Save Successfully")
        console.log("Save Successfully")
    }
    function Delete(){
        setLog("Delete Successfully")
        console.log("Delete Successfully")
    }
  return (
    <>
    <div>03_Action_Logger</div>
    {
        log && <p>{log}</p>
    }
    <button onClick={Login}>Login</button>
    <button onClick={Logout}>Logout</button>
    <button onClick={Save}>Save</button>
    <button onClick={Delete}>Delete</button>
    </>
  )
}

export default Action_Logger