import "./App.css";
import Buttons from "./Buttons";
import Controls from "./Controls";
import { useState } from "react";

function App() {

  const [keyPressed,setKeyPressed]=useState('');
  const [drumId,setDrumId]=useState('Welcome!')

  const handleKeyDown=(e)=>{
    setKeyPressed(e.keyCode);
    
  }

  return (
    <div tabIndex="0"  onKeyDown={handleKeyDown} className="App">
      <main className="bg-dark">
      <div className="border border-dark d-flex" id="drum-machine"> 
      
        <div className="bg-secondary border mx-auto" id="buttons">
          <Buttons className= "border border-dark" keyPressed={keyPressed} setDrumId={setDrumId} setKeyPressed={setKeyPressed}/>
        </div>
         
        <div className="border border-warning" id="controls">
          <Controls drumId={drumId} />
        </div>
        
      </div>
      </main>
      <footer className="footer bg-secondary text-light py-4">Some sounds provided by <a className="text-warning" href="">Placeholder</a></footer>
    </div>
  );
}

export default App;
