import { useState } from "react"

export function LiveNamePreview(){
    const [name, setName] = useState("")
    return(
        <>
        <p>Project 4 Live Name Preview</p>
           <p>Your Name: {name}</p>
           <input value={name}
           onChange={
            (event) => setName(event.target.value)
           }/>
        </>
    )
}

export function CharacterCounter(){
    const [char, setChar] = useState("")
    return(
        <>
        <br />
        <p>Project 5 Character Counter</p>
        <input 
        placeholder="Write something..."
        value={char} 
        onChange={(event) => setChar(event.target.value)}/>
        <p>Characters: {char.length}</p>
        </>
    )
}

export function CheckboxTracker(){
    const [select, setSelect] = useState(false)
    return(
        <>
        <p>Project 6 Checkbox Tracker</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <input type="checkbox" name="course" id="" 
                onChange={(event) => setSelect(event.target.checked)}/>
                <p>I agree to the terms</p>

                
            </div>
            <p>Accepted: {select ? "true": "false"}</p>
        </>
    )
}

export function CourseSelector(){
    const [course, setCourse] = useState("react")
    return(
        <>
        <p>Project 7 Course Selector</p>
        <label>Choose a car:</label>

        <select id="course" name="course"
        value={course} 
        onChange={(event) => setCourse(event.target.value)}>
        <option value="react">React</option>
        <option value="nextjs">Next.js</option>
        <option value="python">Python</option>
        <option value="typescript">Typescript</option>
        </select>
        <p>Selected Course: {course}</p>
        </>
    )
}