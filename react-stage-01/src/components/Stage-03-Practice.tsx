import React, { useState } from "react";

export function OnSubmit() {
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Page reload hone se rokta hai

    console.log(event.target);
    console.log("submitted");

    // UI state update
    setStatus("Form successfully submit ho gaya hai!");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <p>Concept 11, 12 onSubmit</p>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Kuch type karein..." 
          style={{ padding: "8px", marginRight: "10px" }}
        />
        
        {/* Button ka type 'submit' hona zaroori hai */}
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {/* UI par submit status check karne ke liye */}
      {status && (
        <p style={{ color: "green", marginTop: "12px", fontWeight: "bold" }}>
          {status}
        </p>
      )}
    </div>
  );
}

export function KeyboardEvents(){
  const [key, setKey] = useState("")
  // return(
  //   <>  
  //     <div style={{padding: 20}}>
  //       <input type="text"
  //       placeholder="Write something"
  //       onKeyDown={(event) => {
  //         console.log(event.key)
  //         setKey(event.key)
  //       }}
  //       style={{ padding: "8px", marginRight: "10px" }}
  //       />
  //       { key && <p>user press {key}</p>}
  //     </div>
  //   </>
  // ) inline event

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ){
    console.log(event.key)
    setKey(event.key)
  }

  return(
    <>
      <div style={{padding: 20}}>
        <input onKeyDown={handleKeyDown}
        />
        { key && <p style={{display: 'flex', justifyContent: 'center'}}>user press <div style={{fontWeight: "bold", color: 'green', marginLeft: 10}}>{key}</div></p>}
      </div>
    </>
  )
}


export function SpecificKey(){
  const [key, setKey] = useState<string>("")

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ){
    if (event.key === "Enter") {
      console.log("Enter Pressed")
      setKey("User press Enter")
    }
    if (event.key === "Escape") {
      console.log("Escape Pressed")
      setKey("User Press Escape")
    }
  }

  return (
    <>
    <div>
    <input type="text" onKeyDown={handleKeyDown} />
    { key && <p style={{display: 'flex', justifyContent: 'center'}}>user press <div style={{fontWeight: "bold", color: 'green', marginLeft: 10}}>{key}</div></p>}
    </div>
    </>
  )
}


export function MouseEvent(){
  const [mouseEvent, setMouseEvent] = useState<string>("")
  const [click, setClick] = useState<string>("")
  return(
    <>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
      <div style={{padding: 10, backgroundColor: 'blue', border: 2, height: 50, width: 100}}
        onMouseEnter={() => {
          console.log("Mouse entered")
          setMouseEvent("Mouse Entered")
        }}
        onMouseLeave={() => {console.log("Mouse left")
          setMouseEvent("Mouse Left")
        }}

      >
        Hover me {mouseEvent && <p>{mouseEvent}</p>}
      </div>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
      <button style={{padding: 10}}
      onDoubleClick={() => {
        console.log("Double Clicked")
        // setMouseEvent("Doubled Clicked")
        setClick("Doubled Click")
      }}>
        Doubled Click
      </button>
      {/* {mouseEvent && <p style={{color: "green"}}>{mouseEvent}</p>}
       */}
       {click && <p style={{color: "green"}}>{click}</p>}
    </div>
    </>
  )
}