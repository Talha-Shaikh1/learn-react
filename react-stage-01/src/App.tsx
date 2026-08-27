// File: src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stage02 from './components/Event_Handling_Projects/02_Stage/Stage-02';
import {Concept_Six, TargetVsCurrentTarget, OnChange, ControlledInputWithUseState} from './components/Stage-02-Practice';
import Stage03 from './components/Event_Handling_Projects/03_Stage/Stage-03';
import { KeyboardEvents, MouseEvent, OnSubmit, SpecificKey } from './components/Stage-03-Practice';


function App() {
  return (
    <>
        <BrowserRouter>
      {/* Navbar */}
      <nav style={{ padding: '15px', background: '#333', color: 'white' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/stage-02" style={{ color: 'white', textDecoration: 'none' }}>Stage 02</Link>
        <Link to="/stage-03" style={{ color: 'white', textDecoration: 'none' }}>Stage 03</Link>
      </nav>

      {/* Routes */}
      <Routes>
        
        <Route path="/" element={<>
        <h2 style={{padding: '20px'}}>Home Page</h2>
         <Concept_Six />
              <TargetVsCurrentTarget />
              <OnChange />
              <ControlledInputWithUseState />
              <h2>Stage 03</h2>
              <OnSubmit />
              <KeyboardEvents />
              <SpecificKey />
              <MouseEvent />
        </>} />
        
        {/* Sirf ek single route Stage 02 ke liye */}
                {/* Home */}
        
      
        <Route path="/stage-02" element={<Stage02 />} />
        <Route path="/stage-03" element={<Stage03 />} />
      </Routes>

 
    </BrowserRouter>
    </>
  );
}

export default App;