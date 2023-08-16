import React from "react";
import './App.css';
import Slot from "./Slot";

const App = () => {
  return (
    <>
      <h1 className="heading_style"> welcome to <span style={{fontWeight: "bold"}}>slot machine game</span> </h1>

     <div className="slot_mach" style={{border:"solid"}}>
      <Slot x="😮"  y="😮" z="😮" />

      <Slot x="☹️"  y="😎" z="😮" />
      <Slot x="😎"  y="😎" z="😎" />
      <Slot x="☹️"  y="😎" z="😮" />
      <Slot x="😎"  y="😎" z="😎" />
     </div>
      
    </>

  )
  
}

export default App;
