// File: src/components/stage02/Stage02.tsx
// Apne projects yahan import karein

import { LiveNamePreview, CharacterCounter, CheckboxTracker, CourseSelector } from "./Stage-2-Projects";

// import CounterApp from './02_Counter'; // Jab 2nd project banayein tab un-comment karein

export default function Stage02() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Stage 02: Small Practice Projects 🚀</h1>
      <p>Yahan mere saare chote React + TS projects ek hi page par render ho rahe hain:</p>
      
      <hr style={{ margin: '20px 0' }} />

      {/* Saare projects yahan ek ke baad ek show honge */}
      <LiveNamePreview />
      <CharacterCounter />
      <CheckboxTracker />
      <CourseSelector />
      {/* <NumberGuessing /> */}
      
      {/* <CounterApp /> */}
      
      {/* Future projects yahan add karte jayen */}
    </div>
  );
}