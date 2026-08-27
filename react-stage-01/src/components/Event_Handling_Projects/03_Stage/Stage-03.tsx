// File: src/components/stage02/Stage02.tsx
// Apne projects yahan import karein

import { EnterKeyAction, HoverTracker, SimpleLoginUI } from "./Stage-03-Projects";



// import CounterApp from './02_Counter'; // Jab 2nd project banayein tab un-comment karein

export default function Stage03() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Stage 03: Small Practice Projects 🚀</h1>
      <p>Yahan mere saare chote React + TS projects ek hi page par render ho rahe hain:</p>
      
      <hr style={{ margin: '20px 0' }} />

      {/* Saare projects yahan ek ke baad ek show honge */}
      <SimpleLoginUI />
      <EnterKeyAction />
      <HoverTracker />
      {/* <NumberGuessing /> */}
      
      {/* <CounterApp /> */}
      
      {/* Future projects yahan add karte jayen */}
    </div>
  );
}