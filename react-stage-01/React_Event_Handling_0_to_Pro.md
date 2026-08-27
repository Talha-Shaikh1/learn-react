# React Event Handling — 0 to Pro
## Concepts → 5 Concepts → Projects → 5 Concepts → Projects

Ye roadmap is tarah design kiya gaya hai ke theory aur practice saath-saath chalein. Har 5 concepts ke baad unhi concepts par based projects hain. Abhi Conditional Rendering, Lists, Forms waghera ko unnecessarily mix nahi kiya gaya.

---

# Stage 1 — Concepts 1–5

## Concept 1 — Event kya hota hai?

React mein **event** user ke kisi action ko kehte hain.

Common examples:

- Button click
- Input mein type karna
- Form submit karna
- Mouse element par lana
- Mouse element se hatana
- Keyboard key press karna
- Checkbox change karna
- Select option change karna

React mein events camelCase mein likhe jate hain:

```tsx
onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
onKeyDown
```

Basic example:

```tsx
<button onClick={() => console.log("Clicked")}>
  Click Me
</button>
```

Flow:

```text
User action
    ↓
React event
    ↓
Event handler
    ↓
Function runs
```

---

## Concept 2 — Event Handler Function

Event handler wo function hota hai jo event hone par run hota hai.

```tsx
function handleClick() {
  console.log("Button clicked")
}

<button onClick={handleClick}>
  Click
</button>
```

Yahan:

```tsx
onClick={handleClick}
```

ka matlab hai:

> Jab click ho, `handleClick` function run karna.

### Important difference

Correct:

```tsx
<button onClick={handleClick}>
```

Incorrect for normal event handling:

```tsx
<button onClick={handleClick()}>
```

`handleClick` function ko React ke hawale karta hai.

`handleClick()` function ko immediately call karta hai.

### Naming convention

Common pattern:

```tsx
handleClick
handleSubmit
handleChange
handleMouseEnter
handleKeyDown
```

---

## Concept 3 — Inline Event Handler

Function directly JSX mein bhi likh sakte ho:

```tsx
<button onClick={() => console.log("Clicked")}>
  Click
</button>
```

Ye inline handler hai.

Multiple lines:

```tsx
<button
  onClick={() => {
    console.log("Clicked")
    console.log("Another action")
  }}
>
  Click
</button>
```

### Kab kya use karna hai?

Small logic:

```tsx
onClick={() => setCount(prev => prev + 1)}
```

Bigger/reusable logic:

```tsx
function handleClick() {
  // logic
}

<button onClick={handleClick}>
```

---

## Concept 4 — Event + useState

Ab tumhari pehle wali knowledge Event Handling ke saath combine hoti hai.

```tsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick={handleIncrease}>
        +1
      </button>
    </div>
  )
}

export default Counter
```

Flow:

```text
Click
  ↓
handleIncrease()
  ↓
setCount()
  ↓
State changes
  ↓
React re-renders
  ↓
UI updates
```

### Important rule

Agar new state previous state par depend karti hai:

```tsx
setCount(prev => prev + 1)
```

use karo.

Examples:

```tsx
setCount(prev => prev - 1)

setCount(prev => prev * 2)

setCount(prev => prev + 10)
```

---

## Concept 5 — Event Handler ko Arguments Pass Karna

Agar function ko custom argument dena ho:

```tsx
function greet(name: string) {
  console.log(`Hello ${name}`)
}
```

Button:

```tsx
<button onClick={() => greet("Talha")}>
  Greet
</button>
```

Direct:

```tsx
<button onClick={greet("Talha")}>
```

nahi karna, kyun ke wo function ko immediately call karega.

### Practical example

```tsx
function addScore(amount: number) {
  setScore(prev => prev + amount)
}

<button onClick={() => addScore(1)}>
  +1
</button>

<button onClick={() => addScore(5)}>
  +5
</button>

<button onClick={() => addScore(10)}>
  +10
</button>
```

Ab ek hi handler logic different values ke saath reuse ho raha hai.

---

# Projects After Concepts 1–5

## Project 1 — Advanced Counter

Features:

```text
Score: 0

[ +1 ] [ +5 ] [ +10 ]
[ -1 ] [ -5 ]
[ Reset ]
```

Rules:

- Score 0 se neeche na jaye.
- `+1`, `+5`, `+10` work karein.
- `-1`, `-5` work karein.
- Reset 0 kare.
- Functional state updates use karo.
- Har button ka logic samjho; copy-paste avoid karo.

Concepts practiced:

- onClick
- handler functions
- inline handlers
- useState
- functional updates
- passing arguments

---

## Project 2 — Number Changer

```text
Number: 10

[ + ]
[ - ]
[ ×2 ]
[ Reset ]
```

Har button alag state operation kare.

Goal:

- Event handler ko separate functions mein organize karna.
- Previous state ka sahi use karna.

---

## Project 3 — Action Logger

Screen par buttons:

```text
[ Login ]
[ Logout ]
[ Save ]
[ Delete ]
```

Har click par console mein:

```text
Login clicked
Logout clicked
Save clicked
Delete clicked
```

Goal:

- Event handlers ko samajhna.
- Multiple buttons ko different handlers dena.

---

# Stage 2 — Concepts 6–10

## Concept 6 — Event Object

Event handler ko event ki information mil sakti hai.

```tsx
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event)
}
```

```tsx
<button onClick={handleClick}>
  Click
</button>
```

Event object mein useful information hoti hai:

```tsx
event.type
event.target
event.currentTarget
```

TypeScript mein button ke liye:

```tsx
React.MouseEvent<HTMLButtonElement>
```

---

## Concept 7 — target vs currentTarget

Ye advanced Event Handling ka important concept hai.

```tsx
function handleClick(
  event: React.MouseEvent<HTMLButtonElement>
) {
  console.log(event.target)
  console.log(event.currentTarget)
}
```

Basic difference:

### `target`

Jahan se event originate hua.

### `currentTarget`

Jis element par current event handler attached hai.

Example:

```tsx
<div onClick={handleClick}>
  <button>Click</button>
</div>
```

Button click karne par `target` button ho sakta hai, jabke `currentTarget` div ho sakta hai.

Is distinction ko baad mein event propagation mein use karenge.

---

## Concept 8 — onChange

Input ke value change hone par `onChange` fire hota hai.

```tsx
<input
  onChange={(event) => {
    console.log(event.target.value)
  }}
/>
```

Agar user type kare:

```text
T
Ta
Tal
Talh
Talha
```

to value har change par milti rahegi.

---

## Concept 9 — Controlled Input + useState

React mein input ko state ke saath connect kar sakte ho.

```tsx
const [name, setName] = useState("")
```

```tsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

Flow:

```text
User types
    ↓
onChange
    ↓
event.target.value
    ↓
setName(...)
    ↓
state update
    ↓
UI update
```

Isko **controlled input** kehte hain.

---

## Concept 10 — onChange ke saath Different Input Values

Different inputs different properties use karte hain.

Text:

```tsx
event.target.value
```

Checkbox:

```tsx
event.target.checked
```

Select:

```tsx
event.target.value
```

Example checkbox:

```tsx
<input
  type="checkbox"
  onChange={(event) => {
    console.log(event.target.checked)
  }}
/>
```

---

# Projects After Concepts 6–10

## Project 4 — Live Name Preview

Input:

```text
[ Enter your name ]
```

Neeche:

```text
Hello Talha
```

Requirements:

- `useState`
- `onChange`
- controlled input
- `event.target.value`

---

## Project 5 — Character Counter

```text
[ Write something... ]

Characters: 0
```

Typing:

```text
Hello React
```

Output:

```text
Characters: 11
```

Goal:

- onChange
- state
- `.length`
- live UI update

---

## Project 6 — Checkbox Tracker

Build:

```text
☐ I agree to the terms
```

Neeche state/value show karo:

```text
Accepted: false
```

Checked:

```text
Accepted: true
```

Use:

```tsx
event.target.checked
```

---

## Project 7 — Course Selector

Create:

```text
<select>
  React
  Next.js
  Python
  TypeScript
</select>
```

Neeche selected course show karo.

Example:

```text
Selected Course: React
```

---

# Stage 3 — Concepts 11–15

## Concept 11 — onSubmit

Forms mein submit event:

```tsx
<form onSubmit={handleSubmit}>
```

Handler:

```tsx
function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  console.log("Submitted")
}
```

---

## Concept 12 — preventDefault()

Browser ka default form behavior prevent karne ke liye:

```tsx
event.preventDefault()
```

Example:

```tsx
function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault()

  console.log("Form submitted")
}
```

React applications mein ye extremely common hai.

---

## Concept 13 — Keyboard Events

Common keyboard events:

```tsx
onKeyDown
onKeyUp
```

Example:

```tsx
<input
  onKeyDown={(event) => {
    console.log(event.key)
  }}
/>
```

TypeScript:

```tsx
function handleKeyDown(
  event: React.KeyboardEvent<HTMLInputElement>
) {
  console.log(event.key)
}
```

---

## Concept 14 — Specific Key Detect Karna

Example:

```tsx
function handleKeyDown(
  event: React.KeyboardEvent<HTMLInputElement>
) {
  if (event.key === "Enter") {
    console.log("Enter pressed")
  }

  if (event.key === "Escape") {
    console.log("Escape pressed")
  }
}
```

Useful keys:

```text
Enter
Escape
ArrowUp
ArrowDown
ArrowLeft
ArrowRight
Backspace
Delete
```

---

## Concept 15 — Mouse Events

Common mouse events:

```tsx
onMouseEnter
onMouseLeave
onMouseMove
onDoubleClick
```

Example:

```tsx
<div
  onMouseEnter={() => console.log("Mouse entered")}
  onMouseLeave={() => console.log("Mouse left")}
>
  Hover me
</div>
```

Double click:

```tsx
<button onDoubleClick={() => console.log("Double clicked")}>
  Double Click
</button>
```

---

# Projects After Concepts 11–15

## Project 8 — Simple Login UI

Build:

```text
Email
[____________]

Password
[____________]

[ Login ]
```

Requirements:

- useState
- onChange
- onSubmit
- preventDefault
- controlled inputs

Abhi actual authentication nahi karni.

Sirf form interaction.

---

## Project 9 — Enter Key Action

Input:

```text
[ Type something ]
```

Agar Enter press ho:

```text
Submitted!
```

Agar Escape press ho:

```text
Cancelled!
```

Concepts:

- onKeyDown
- event.key
- conditions
- state

---

## Project 10 — Hover Tracker

Build a box:

```text
┌────────────────┐
│                │
│    Hover Me    │
│                │
└────────────────┘
```

Screen par show karo:

```text
Mouse: Outside
```

Mouse andar:

```text
Mouse: Inside
```

Use:

- onMouseEnter
- onMouseLeave
- useState

---

# Stage 4 — Concepts 16–20

## Concept 16 — Event Bubbling

Example:

```tsx
<div onClick={() => console.log("DIV")}>
  <button onClick={() => console.log("BUTTON")}>
    Click
  </button>
</div>
```

Button click:

```text
BUTTON
DIV
```

Event child se parent ki taraf propagate karta hai.

Isko **event bubbling** kehte hain.

---

## Concept 17 — stopPropagation()

Parent handler tak event ko jane se rokna:

```tsx
<button
  onClick={(event) => {
    event.stopPropagation()
    console.log("Button")
  }}
>
  Click
</button>
```

Ab parent ka click handler trigger nahi hoga.

---

## Concept 18 — Multiple Events on One Element

Ek element par multiple events ho sakte hain:

```tsx
<div
  onClick={handleClick}
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
>
  Interactive Box
</div>
```

Important:

Har event ka apna purpose hai.

---

## Concept 19 — Reusable Event Handlers

Agar same logic multiple buttons use karte hain:

```tsx
function changeScore(amount: number) {
  setScore(prev => prev + amount)
}
```

Then:

```tsx
<button onClick={() => changeScore(1)}>
  +1
</button>

<button onClick={() => changeScore(5)}>
  +5
</button>

<button onClick={() => changeScore(10)}>
  +10
</button>
```

Ye duplicate logic reduce karta hai.

---

## Concept 20 — Event Handling + State Decision

Har variable ko state nahi banana.

Question:

> Kya value change hone par UI update honi chahiye?

Agar yes, state consider karo.

Example:

```tsx
const [count, setCount] = useState(0)
```

Click:

```tsx
onClick={() => setCount(prev => prev + 1)}
```

Mental model:

```text
User Action
    ↓
Event
    ↓
Handler
    ↓
State Update
    ↓
Re-render
    ↓
UI Change
```

Ye React Event Handling ka core pattern hai.

---

# Projects After Concepts 16–20

## Project 11 — Parent + Child Click Demo

Build:

```text
┌─────────────────────────────┐
│ Parent                      │
│                             │
│       [ Child Button ]      │
│                             │
└─────────────────────────────┘
```

Parent aur child dono par click handlers lagao.

Observe:

```text
Child clicked
Parent clicked
```

Phir `stopPropagation()` use karke behavior change karo.

Goal:

- bubbling
- propagation
- stopPropagation

---

## Project 12 — Interactive Action Panel

Buttons:

```text
[ +1 ]
[ +5 ]
[ +10 ]
[ Reset ]
```

Har action ke baad screen par last action show karo:

```text
Score: 15
Last Action: Added 10
```

Ismein:

- multiple events
- reusable handlers
- arguments
- multiple states
- functional updates

practice karo.

---

## Project 13 — Interactive Box

Box par:

- click
- double click
- mouse enter
- mouse leave

har event ka result UI mein track karo.

Example:

```text
Last Event: Mouse Enter
```

---

# Stage 5 — Concepts 21–25 — Pro-Level Event Handling Foundation

## Concept 21 — Form Event Types in TypeScript

Common types:

```tsx
React.MouseEvent<HTMLButtonElement>
React.ChangeEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.KeyboardEvent<HTMLInputElement>
```

Event ke element ke according type choose karo.

---

## Concept 22 — `currentTarget.value` vs `target.value`

Input handler mein usually:

```tsx
event.target.value
```

use hota hai.

For strongly typed handlers:

```tsx
function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const value = event.target.value
}
```

`currentTarget` aur `target` ka difference bhi samjho; bubbling ke context mein ye important hai.

---

## Concept 23 — Event Handler + Functional State Update

Agar state previous value par depend kare:

```tsx
setCount(prev => prev + 1)
```

Multiple updates:

```tsx
setCount(prev => prev + 1)
setCount(prev => prev + 1)
setCount(prev => prev + 1)
```

Har update previous updated value ko receive kar sakta hai.

---

## Concept 24 — Event Handler mein Business Logic

Handler sirf `console.log` ke liye nahi.

Real application mein:

```tsx
function handleSubmit(event) {
  event.preventDefault()

  // validate
  // update state
  // show result
  // later API call
}
```

Event handler user action ko application logic se connect karta hai.

---

## Concept 25 — Event Handling Architecture

Large components mein logic organize karo:

```text
UI
 ↓
Event Handler
 ↓
Helper / Business Logic
 ↓
State Update
 ↓
UI
```

Example:

```tsx
function handleAdd(amount: number) {
  setScore(prev => prev + amount)
}
```

UI:

```tsx
<button onClick={() => handleAdd(5)}>
  +5
</button>
```

Is approach se code readable aur maintainable rehta hai.

---

# Final Projects — Event Handling Mastery

## Project 14 — Mini Interactive Dashboard

Build:

```text
Score: 0

[ +1 ] [ +5 ] [ +10 ]
[ Reset ]

Last Action: None

Name:
[____________]

Hello: Talha

[ Checkbox ]

Accepted: true

[ Select Course ]

Selected: React
```

Requirements:

- onClick
- onChange
- useState
- event object
- controlled input
- checkbox
- select
- reusable handlers
- functional updates

---

## Project 15 — Event Playground

Ek single page banao jahan har event separately demonstrate ho:

```text
Click Demo
Double Click Demo
Hover Demo
Input Demo
Checkbox Demo
Select Demo
Keyboard Demo
Form Submit Demo
Bubbling Demo
stopPropagation Demo
```

Har section ke neeche:

```text
Last Event: ...
```

Ye tumhara **Event Handling practice lab** hoga.

---

# Event Handling Mastery Checklist

## Basic

- [ ] Event ka meaning samajhta hun
- [ ] `onClick`
- [ ] Event handler function
- [ ] Inline handler
- [ ] Function reference vs function call
- [ ] Arguments pass karna

## State

- [ ] Event + useState
- [ ] Functional updates
- [ ] Multiple event handlers
- [ ] Reusable handlers

## Input

- [ ] `onChange`
- [ ] `event.target.value`
- [ ] Controlled input
- [ ] Checkbox `checked`
- [ ] Select `value`

## Forms

- [ ] `onSubmit`
- [ ] `preventDefault()`

## Keyboard

- [ ] `onKeyDown`
- [ ] `onKeyUp`
- [ ] `event.key`
- [ ] Enter detect karna
- [ ] Escape detect karna

## Mouse

- [ ] `onMouseEnter`
- [ ] `onMouseLeave`
- [ ] `onMouseMove`
- [ ] `onDoubleClick`

## Advanced

- [ ] Event object
- [ ] `target`
- [ ] `currentTarget`
- [ ] Event bubbling
- [ ] `stopPropagation()`
- [ ] TypeScript event types
- [ ] Event + business logic
- [ ] Clean/reusable handlers

---

# Tumhara Learning Rule

Har concept ke baad ye 4 questions khud se poochna:

1. **Ye event kab fire hota hai?**
2. **Is event ka handler kaise likhunga?**
3. **Kya ismein state update karni hai?**
4. **Agar state previous state par depend hai to kya `prev` use karunga?**

Aur sabse important:

```text
5 Concepts
   ↓
Projects
   ↓
5 Concepts
   ↓
Projects
   ↓
5 Concepts
   ↓
Projects
   ↓
Repeat
```

Is tarah tum theory ko ratne ke bajaye **har 5 concepts ko actual code mein lock** karoge.

---

# Next Learning Order

Event Handling complete karne ke baad:

```text
JSX
  ↓
Components
  ↓
Props
  ↓
useState
  ↓
🔥 Event Handling ← Current
  ↓
Conditional Rendering
  ↓
Lists & Keys
  ↓
Forms
  ↓
Styling
```

**Abhi isi Event Handling roadmap ko follow karo. `useEffect`, Context, API, Router waghera mein jump mat karo.**
