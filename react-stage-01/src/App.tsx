import MyProfile from './components/MyProfile.tsx'
import './App.css'

function App() {

  return (
    <>

      <MyProfile 
        name="Talha Shaikh"
        bio="Hi i am learning react"
        tech="React"
        age={21}
      />
      <MyProfile 
        name="Ali Khan"
        bio="Backend developer, loves Node.js"
        tech="Node.js"
        age={25}
        isStudent
      />
      <MyProfile 
        name="Sara Ahmed"
        bio="UI/UX designer turned frontend dev"
        tech="TypeScript"
        age={23}
      />
    </>
  )
}

export default App
